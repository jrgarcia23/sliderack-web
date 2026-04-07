import { NextResponse } from "next/server";

interface ContactBody {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  pais?: string;
  mensaje?: string;
  modelo?: string;
  accesorios?: string[];
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (!body.nombre || !body.email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    // Build notification email content
    const lines = [
      `Nueva solicitud desde sliderack.com`,
      ``,
      `Nombre: ${body.nombre}`,
      `Email: ${body.email}`,
      body.telefono ? `Teléfono: ${body.telefono}` : null,
      body.empresa ? `Empresa: ${body.empresa}` : null,
      body.pais ? `País: ${body.pais}` : null,
      body.modelo ? `Modelo: ${body.modelo}` : null,
      body.accesorios?.filter(Boolean).length
        ? `Accesorios: ${body.accesorios.filter(Boolean).join(", ")}`
        : null,
      body.mensaje ? `\nMensaje:\n${body.mensaje}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    // Send via email if SMTP is configured, otherwise log
    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || "info@sliderack.com";

    if (process.env.RESEND_API_KEY) {
      // Use Resend API
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Sliderack Web <onboarding@resend.dev>",
          to: [notifyEmail],
          reply_to: body.email,
          subject: `Solicitud web: ${body.nombre}${body.empresa ? ` — ${body.empresa}` : ""}`,
          text: lines,
        }),
      });

      if (!res.ok) {
        console.error("Resend error:", await res.text());
        return NextResponse.json(
          { error: "Error al enviar el email" },
          { status: 500 }
        );
      }
    } else {
      // Fallback: log to console (useful in dev)
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(lines);
      console.log("=== END ===");
      console.log("Tip: Set RESEND_API_KEY to send real emails");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
