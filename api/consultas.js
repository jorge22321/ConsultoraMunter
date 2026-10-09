const { randomUUID } = require("node:crypto");
const { put } = require("@vercel/blob");
const { validate } = require("../backend/app");
const { notify } = require("../backend/notify");

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
// Serverless instances do not share memory. This is a best-effort per-instance guard.
const clients = new Map();

function limited(ip) {
  const now = Date.now();
  for (const [key, value] of clients)
    if (now >= value.resetAt) clients.delete(key);
  if (!clients.has(ip) && clients.size >= 5000) return true;
  const value = clients.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  value.count++;
  clients.set(ip, value);
  return value.count > MAX_REQUESTS;
}

module.exports = async (request, response) => {
  response.setHeader("Cache-Control", "no-store");
  if (request.method !== "POST")
    return response.status(405).json({ message: "Método no permitido." });
  if (!request.headers["content-type"]?.startsWith("application/json"))
    return response
      .status(415)
      .json({ message: "Envía la consulta en formato JSON." });
  if (Number(request.headers["content-length"] || 0) > 16384)
    return response
      .status(413)
      .json({ message: "La consulta supera el tamaño permitido." });
  const origin = request.headers.origin;
  if (origin) {
    try {
      if (new URL(origin).host !== request.headers.host)
        return response.status(403).json({ message: "Origen no autorizado." });
    } catch {
      return response.status(403).json({ message: "Origen no autorizado." });
    }
  }
  const ip = String(
    request.headers["x-forwarded-for"] ||
      request.socket?.remoteAddress ||
      "unknown",
  )
    .split(",")[0]
    .trim();
  if (limited(ip)) {
    response.setHeader("Retry-After", "900");
    return response
      .status(429)
      .json({
        message:
          "Has enviado varias consultas. Espera unos minutos o contáctanos por WhatsApp.",
      });
  }
  const entry = validate(request.body);
  if (!entry)
    return response
      .status(400)
      .json({ message: "Revisa los datos y la autorización de la consulta." });
  if (!process.env.BLOB_READ_WRITE_TOKEN)
    return response
      .status(503)
      .json({
        message:
          "El formulario está temporalmente no disponible. Escríbenos por WhatsApp.",
      });
  const id = randomUUID();
  const reference = "MA-" + id.slice(0, 8).toUpperCase();
  const record = {
    id,
    ...entry,
    consent: true,
    consentVersion: "2026-10-09",
    createdAt: new Date().toISOString(),
    reference,
  };
  try {
    await put(`consultas/${id}.json`, JSON.stringify(record), {
      access: "private",
      contentType: "application/json",
    });
    await notify(reference, entry.service);
    return response
      .status(201)
      .json({ reference, message: "Consulta registrada correctamente." });
  } catch (error) {
    console.error("No se pudo guardar la consulta:", error?.name || "Error");
    return response
      .status(500)
      .json({
        message:
          "No pudimos guardar tu consulta. Inténtalo de nuevo o contáctanos por WhatsApp.",
      });
  }
};
