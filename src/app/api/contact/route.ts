import { NextResponse } from "next/server";
import { headers } from "next/headers";

interface ContactBody {
  nombre: string;
  email: string;
  telefono?: string;
  empresa?: string;
  pais?: string;
  mensaje?: string;
  modelo?: string;
  accesorios?: string[];
  privacidadAceptada?: boolean;
  consentTimestamp?: string;
  gclid?: string;
  source?: string;
  page?: string;
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

    // Get client IP from headers
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "desconocida";

    const timestamp = body.consentTimestamp || new Date().toISOString();

    // Build notification email content
    const lines = [
      `Nueva solicitud desde sliderack.es`,
      ``,
      `--- DATOS DE CONTACTO ---`,
      `Nombre: ${body.nombre}`,
      `Email: ${body.email}`,
      body.telefono ? `Tel\u00e9fono: ${body.telefono}` : null,
      body.empresa ? `Empresa: ${body.empresa}` : null,
      body.pais ? `Pa\u00eds: ${body.pais}` : null,
      ``,
      `--- PRODUCTO ---`,
      body.modelo ? `Modelo: ${body.modelo}` : `Modelo: no seleccionado`,
      body.accesorios?.filter(Boolean).length
        ? `Accesorios: ${body.accesorios.filter(Boolean).join(", ")}`
        : null,
      body.mensaje ? `\nMensaje:\n${body.mensaje}` : null,
      ``,
      `--- CUMPLIMIENTO RGPD ---`,
      `Privacidad aceptada: ${body.privacidadAceptada ? "S\u00ed" : "No"}`,
      `Fecha/hora aceptaci\u00f3n: ${timestamp}`,
      `IP del usuario: ${ip}`,
      ``,
      `--- TRACKING ---`,
      body.gclid ? `GCLID: ${body.gclid}` : `GCLID: (org\u00e1nico / sin Google Ads)`,
      body.source ? `Referrer: ${body.source}` : `Referrer: directo`,
      body.page ? `P\u00e1gina: ${body.page}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || "info@sliderack.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Sliderack Web <onboarding@resend.dev>";

    if (process.env.RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          reply_to: body.email,
          subject: `Solicitud web: ${body.nombre}${body.empresa ? ` \u2014 ${body.empresa}` : ""}`,
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
      console.log("=== CONTACT FORM SUBMISSION ===");
      console.log(lines);
      console.log("=== END ===");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
