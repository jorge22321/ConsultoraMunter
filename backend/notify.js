async function notify(reference, service) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_FROM) return;
  try {
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.NOTIFICATION_FROM,
        to:
          process.env.NOTIFICATION_TO || "consultoramunteryasociados@gmail.com",
        subject: `Nueva consulta ${reference}`,
        text: `Se registró una nueva consulta. Referencia: ${reference}. Área: ${service}. Revisa el almacén privado de consultas.`,
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (!result.ok)
      console.error("No se pudo enviar la notificación:", result.status);
  } catch (error) {
    console.error("No se pudo enviar la notificación:", error?.name || "Error");
  }
}
module.exports = { notify };
