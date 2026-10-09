const express = require("express");
const cors = require("cors");
const fs = require("node:fs/promises");
const path = require("node:path");
const { randomUUID } = require("node:crypto");
const { notify } = require("./notify");

const AREAS = new Set([
  "asesoria-legal",
  "arquitectura-ingenieria",
  "contabilidad-finanzas",
  "comercio-exterior",
  "marketing-diseno",
  "orientacion",
]);
const clean = (value) => (typeof value === "string" ? value.trim() : "");
function validate(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const entry = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    service: clean(body.service),
    message: clean(body.message),
  };
  if (body.consent !== true || clean(body.website)) return null;
  if (
    entry.name.length < 3 ||
    entry.name.length > 100 ||
    /[\r\n]/.test(entry.name)
  )
    return null;
  if (
    !/^[+\d ()-]{7,25}$/.test(entry.phone) ||
    entry.phone.replace(/\D/g, "").length < 7 ||
    entry.phone.replace(/\D/g, "").length > 15
  )
    return null;
  if (body.email != null && typeof body.email !== "string") return null;
  if (
    entry.email &&
    (entry.email.length > 150 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email))
  )
    return null;
  if (
    !AREAS.has(entry.service) ||
    entry.message.length < 10 ||
    entry.message.length > 2000
  )
    return null;
  return entry;
}

function createApp(options = {}) {
  const app = express();
  const dataDir =
    options.dataDir || process.env.DATA_DIR || path.join(__dirname, "data");
  const webDir = options.webDir || path.resolve(__dirname, "../frontend/dist");
  const allowedOrigins =
    options.allowedOrigins ||
    (
      process.env.FRONTEND_ORIGINS ||
      "http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000,http://127.0.0.1:3000"
    )
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  const maxRequests = options.maxRequests ?? 5;
  const now = options.now || Date.now;
  const rateWindow = 15 * 60 * 1000;
  const clients = new Map();
  let writeQueue = Promise.resolve();
  app.disable("x-powered-by");
  app.use((req, res, next) => {
    res.set("X-Content-Type-Options", "nosniff");
    res.set("Referrer-Policy", "strict-origin-when-cross-origin");
    res.set("X-Frame-Options", "DENY");
    next();
  });
  app.use(
    "/api",
    (req, res, next) => {
      res.set("Cache-Control", "no-store");
      const origin = req.get("Origin");
      if (origin && !allowedOrigins.includes(origin))
        return res.status(403).json({ message: "Origen no autorizado." });
      next();
    },
    cors({
      origin: allowedOrigins,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type"],
    }),
  );
  app.use(express.json({ limit: "16kb" }));
  app.get("/api/health", (_req, res) =>
    res.json({ ok: true, service: "munter-consultas" }),
  );
  app.get("/api/mensaje", (_req, res) =>
    res.json({ message: "Consultora Munter & Asociados: API disponible." }),
  );
  app.post("/api/consultas", async (req, res, next) => {
    if (!req.is("application/json"))
      return res
        .status(415)
        .json({ message: "Envía la consulta en formato JSON." });
    const timestamp = now();
    for (const [key, value] of clients)
      if (timestamp >= value.resetAt) clients.delete(key);
    const ip = req.ip;
    if (!clients.has(ip) && clients.size >= 5000)
      return res
        .status(503)
        .json({
          message: "El servicio está ocupado. Inténtalo en unos minutos.",
        });
    const limit = clients.get(ip) || {
      count: 0,
      resetAt: timestamp + rateWindow,
    };
    clients.set(ip, limit);
    if (limit.count >= maxRequests) {
      res.set(
        "Retry-After",
        String(Math.ceil((limit.resetAt - timestamp) / 1000)),
      );
      return res
        .status(429)
        .json({
          message:
            "Has enviado varias consultas. Espera unos minutos o contáctanos por WhatsApp.",
        });
    }
    limit.count++;
    const entry = validate(req.body);
    if (!entry)
      return res
        .status(400)
        .json({
          message:
            "Revisa tus datos, el área seleccionada y la autorización de privacidad.",
        });
    const record = {
      id: randomUUID(),
      ...entry,
      consent: true,
      consentVersion: "2026-10-09",
      createdAt: new Date(timestamp).toISOString(),
    };
    record.reference = "MA-" + record.id.slice(0, 8).toUpperCase();
    const write = async () => {
      await fs.mkdir(dataDir, { recursive: true, mode: 0o700 });
      const file = await fs.open(
        path.join(dataDir, "consultas.jsonl"),
        "a",
        0o600,
      );
      try {
        await file.writeFile(JSON.stringify(record) + "\n", "utf8");
        await file.sync();
      } finally {
        await file.close();
      }
    };
    const pending = writeQueue.then(write);
    writeQueue = pending.catch(() => {});
    try {
      await pending;
      await notify(record.reference, record.service);
      res
        .status(201)
        .json({
          reference: record.reference,
          message: "Consulta registrada correctamente.",
        });
    } catch (error) {
      next(error);
    }
  });
  app.use("/api", (_req, res) =>
    res.status(404).json({ message: "Ruta no encontrada." }),
  );
  app.use((req, res, next) => {
    res.set(
      "Content-Security-Policy",
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'self'",
    );
    next();
  });
  app.use(express.static(webDir));
  app.get(/.*/, (req, res, next) => {
    if (path.extname(req.path))
      return res.status(404).send("Archivo no encontrado.");
    res.sendFile(path.join(webDir, "index.html"), (error) => {
      if (error && !res.headersSent) {
        if (error.code === "ENOENT")
          return res
            .status(404)
            .json({
              message:
                "Frontend no compilado. Ejecuta npm run build en frontend.",
            });
        next(error);
      }
    });
  });
  app.use((error, _req, res, _next) => {
    if (error.type === "entity.too.large")
      return res
        .status(413)
        .json({ message: "La consulta supera el tamaño permitido." });
    if (error.type === "entity.parse.failed")
      return res
        .status(400)
        .json({ message: "La solicitud no contiene un JSON válido." });
    // Do not write the submitted personal information to application logs.
    if (options.logErrors !== false)
      console.error(
        "No se pudo procesar la consulta:",
        error.code || error.name,
      );
    res
      .status(500)
      .json({
        message:
          "No pudimos guardar tu consulta. Inténtalo de nuevo o contáctanos por WhatsApp.",
      });
  });
  return app;
}
module.exports = { createApp, validate };
