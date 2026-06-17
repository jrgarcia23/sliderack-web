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

// --- Hardening helpers (no regex literals: avoids escape-sequence pitfalls) ---
const LIMITS: Record<string, number> = {
  nombre: 120,
  email: 200,
  telefono: 40,
  empresa: 160,
  pais: 80,
  mensaje: 4000,
  modelo: 120,
  consentTimestamp: 40,
  gclid: 200,
  source: 300,
  page: 300,
};
const MAX_ACCESORIOS = 30;
const MAX_ACCESORIO_LEN = 120;

// Best-effort in-memory rate limiter (per warm serverless instance). Not a hard
// global limit, but blocks naive bursts/abuse from a single IP.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      const fresh = times.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }
  return false;
}

// Email validation without a regex literal.
function validEmail(email: string): boolean {
  // Reject any control char (CR/LF/TAB/...) — blocks header injection in reply_to.
  for (let i = 0; i < email.length; i++) {
    if (email.charCodeAt(i) < 32) return false;
  }
  if (email.indexOf(" ") !== -1) return false;
  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@")) return false;
  const domain = email.slice(at + 1);
  const dot = domain.indexOf(".");
  return dot > 0 && dot < domain.length - 1;
}

// Collapse line breaks / control chars so the email subject cannot be injected.
function singleLine(value: string): string {
  const NL = String.fromCharCode(10);
  const CR = String.fromCharCode(13);
  const TAB = String.fromCharCode(9);
  return value
    .split(NL).join(" ")
    .split(CR).join(" ")
    .split(TAB).join(" ")
    .split(" ").filter(Boolean).join(" ")
    .trim();
}

export async function POST(request: Request) {
  try {
    // Get client IP from headers
    const headersList = await headers();
    const ip =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "desconocida";

    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos." },
        { status: 429 }
      );
    }

    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
    }
    if (typeof raw !== "object" || raw === null) {
      return NextResponse.json({ error: "Solicitud inválida" }, { status: 400 });
    }
    const body = raw as ContactBody;

    if (!body.nombre || !body.email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    // Every text field must be a string within its length limit; accesorios an array of short strings.
    const textFields: Array<[string, unknown]> = [
      ["nombre", body.nombre],
      ["email", body.email],
      ["telefono", body.telefono],
      ["empresa", body.empresa],
      ["pais", body.pais],
      ["mensaje", body.mensaje],
      ["modelo", body.modelo],
      ["consentTimestamp", body.consentTimestamp],
      ["gclid", body.gclid],
      ["source", body.source],
      ["page", body.page],
    ];
    for (const [key, value] of textFields) {
      if (value === undefined || value === null) continue;
      if (typeof value !== "string" || value.length > LIMITS[key]) {
        return NextResponse.json({ error: "Datos del formulario no válidos" }, { status: 400 });
      }
    }
    if (body.accesorios !== undefined) {
      if (
        !Array.isArray(body.accesorios) ||
        body.accesorios.length > MAX_ACCESORIOS ||
        body.accesorios.some((a) => typeof a !== "string" || a.length > MAX_ACCESORIO_LEN)
      ) {
        return NextResponse.json({ error: "Datos del formulario no válidos" }, { status: 400 });
      }
    }
    if (!validEmail(body.email)) {
      return NextResponse.json({ error: "Email no válido" }, { status: 400 });
    }

    const timestamp = body.consentTimestamp || new Date().toISOString();

    // Build notification email content
    const lines = [
      `Nueva solicitud desde sliderack.es`,
      ``,
      `--- DATOS DE CONTACTO ---`,
      `Nombre: ${body.nombre}`,
      `Email: ${body.email}`,
      body.telefono ? `Teléfono: ${body.telefono}` : null,
      body.empresa ? `Empresa: ${body.empresa}` : null,
      body.pais ? `País: ${body.pais}` : null,
      ``,
      `--- PRODUCTO ---`,
      body.modelo ? `Modelo: ${body.modelo}` : `Modelo: no seleccionado`,
      body.accesorios?.filter(Boolean).length
        ? `Accesorios: ${body.accesorios.filter(Boolean).join(", ")}`
        : null,
      body.mensaje ? `\nMensaje:\n${body.mensaje}` : null,
      ``,
      `--- CUMPLIMIENTO RGPD ---`,
      `Privacidad aceptada: ${body.privacidadAceptada ? "Sí" : "No"}`,
      `Fecha/hora aceptación: ${timestamp}`,
      `IP del usuario: ${ip}`,
      ``,
      `--- TRACKING ---`,
      body.gclid ? `GCLID: ${body.gclid}` : `GCLID: (orgánico / sin Google Ads)`,
      body.source ? `Referrer: ${body.source}` : `Referrer: directo`,
      body.page ? `Página: ${body.page}` : null,
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
          subject: `Solicitud web: ${singleLine(body.nombre)}${body.empresa ? ` — ${singleLine(body.empresa)}` : ""}`,
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
