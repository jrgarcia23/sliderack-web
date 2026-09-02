import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { ESPANA, isPaisValido, isProvinciaValida } from "@/data/geo";

interface ContactBody {
  nombre: string;
  email: string;
  telefono: string;
  empresa?: string;
  pais?: string;
  provincia?: string;
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
  provincia: 80,
  mensaje: 4000,
  modelo: 120,
  consentTimestamp: 40,
  gclid: 200,
  source: 300,
  page: 300,
};
const MAX_ACCESORIOS = 30;
const MAX_ACCESORIO_LEN = 120;

// Destinatarios de la notificación interna. Se parte de CONTACT_NOTIFY_EMAIL
// (env de Vercel, hoy sliderack.esnova@gmail.com) y se añaden los fijos de
// negocio, deduplicando. Para gestionarlos solo por env, mover todos a
// CONTACT_NOTIFY_EMAIL separados por comas y vaciar EXTRA_NOTIFY.
const EXTRA_NOTIFY = ["gustavo.mendez@esnova.es", "jrgarcia@esconzeta.com"];
const NOTIFY_EMAILS = Array.from(
  new Set(
    (process.env.CONTACT_NOTIFY_EMAIL || "sliderack.esnova@gmail.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .concat(EXTRA_NOTIFY)
  )
);
const FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "Sliderack <onboarding@resend.dev>";

const SITE_URL = "https://www.sliderack.es";
const LOGO_URL = `${SITE_URL}/images/sliderack/logo-email.png`;
const BRAND = {
  red: "#A52430",
  redDark: "#8a1e28",
  dark: "#201F20",
  heading: "#201F20",
  body: "#4A4A4A",
  muted: "#8A8A8A",
  warm: "#FAFAF8",
  warmSoft: "#FAF6F2",
  border: "#E2E0DD",
  green: "#1c7a33",
  amber: "#C77B3B",
};

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

// Escapa HTML para que ningún dato del usuario rompa/inyecte en el email.
function escapeHtml(s: string): string {
  return (s || "")
    .split("&").join("&amp;")
    .split("<").join("&lt;")
    .split(">").join("&gt;")
    .split('"').join("&quot;")
    .split("'").join("&#39;");
}

function emailHeader(): string {
  return `
    <tr>
      <td style="padding:26px 32px 22px;background:${BRAND.dark};border-bottom:3px solid ${BRAND.red}">
        <img src="${LOGO_URL}" alt="Sliderack" width="176" height="53" style="display:block;border:0;outline:none;text-decoration:none" />
      </td>
    </tr>`;
}

function emailFooter(extra?: string): string {
  return `
    <tr>
      <td style="padding:24px 32px;background:${BRAND.warm};border-top:1px solid ${BRAND.border};text-align:center">
        <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};line-height:1.7">
          Sliderack · un producto de <strong style="color:${BRAND.body}">Esnova Racks</strong> · Fabricado en España${extra ? `<br/>${extra}` : `<br/><a href="${SITE_URL}" style="color:${BRAND.red};text-decoration:none">sliderack.es</a> · 985 30 89 80`}
        </p>
      </td>
    </tr>`;
}

function row(label: string, valueHtml: string, mono = false): string {
  if (!valueHtml) return "";
  const valueStyle = mono
    ? `font-family:'SF Mono',Consolas,Menlo,monospace;font-size:12px;color:${BRAND.muted};word-break:break-all`
    : `font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;color:${BRAND.heading};line-height:1.6`;
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};vertical-align:top;width:130px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;font-weight:600">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};${valueStyle}">${valueHtml}</td>
    </tr>`;
}

function sectionHeader(title: string, color: string): string {
  return `
    <tr><td colspan="2" style="padding:24px 0 12px">
      <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${color};text-transform:uppercase;letter-spacing:0.1em;font-weight:700">${escapeHtml(title)}</p>
    </td></tr>`;
}

/** Notificación interna (equipo Sliderack/Esnova). */
function notificationHtml(
  p: ContactBody,
  meta: { when: string; ip: string; timestamp: string }
): { subject: string; html: string } {
  const empresa = p.empresa || "Solicitud sin empresa";
  const subject = `Nueva solicitud web: ${singleLine(p.nombre)}${p.empresa ? ` — ${singleLine(p.empresa)}` : ""}`;
  const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"/><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:32px 16px;background:#F4F2F0;font-family:'Helvetica Neue',Arial,sans-serif">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid ${BRAND.border};box-shadow:0 8px 24px rgba(0,0,0,0.05)">
    ${emailHeader()}
    <tr><td style="padding:32px">
      <p style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.red};text-transform:uppercase;letter-spacing:0.12em;font-weight:700">Nueva solicitud de información</p>
      <h1 style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:24px;line-height:1.25;letter-spacing:-0.01em;color:${BRAND.heading};font-weight:700">${escapeHtml(empresa)}</h1>
      <p style="margin:0 0 26px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:13px;color:${BRAND.muted}">${escapeHtml(meta.when)}${p.modelo ? ` · ${escapeHtml(p.modelo)}` : ""}</p>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
        ${sectionHeader("Datos de contacto", BRAND.red)}
        ${row("Nombre", escapeHtml(p.nombre))}
        ${row("Email", `<a href="mailto:${escapeHtml(p.email)}" style="color:${BRAND.red};text-decoration:none">${escapeHtml(p.email)}</a>`)}
        ${p.telefono ? row("Teléfono", `<a href="tel:${escapeHtml(p.telefono)}" style="color:${BRAND.red};text-decoration:none">${escapeHtml(p.telefono)}</a>`) : ""}
        ${p.empresa ? row("Empresa", escapeHtml(p.empresa)) : ""}
        ${p.pais ? row("País", escapeHtml(p.pais)) : ""}
        ${p.provincia ? row("Provincia", escapeHtml(p.provincia)) : ""}
        ${p.mensaje ? row("Mensaje", escapeHtml(p.mensaje).split("\n").join("<br/>")) : ""}
        ${p.accesorios?.filter(Boolean).length ? row("Accesorios", escapeHtml(p.accesorios.filter(Boolean).join(", "))) : ""}

        ${sectionHeader("Origen de la solicitud", BRAND.amber)}
        ${p.page ? row("Página", escapeHtml(p.page)) : ""}
        ${row("Referrer", escapeHtml(p.source || "directo"))}
        ${row("GCLID (Ads)", escapeHtml(p.gclid || "(orgánico / sin Google Ads)"), true)}
        ${row("RGPD", `<span style="color:${BRAND.green};font-weight:600">✓ Privacidad ${p.privacidadAceptada ? "aceptada" : "NO aceptada"} · ${escapeHtml(meta.timestamp)} · IP ${escapeHtml(meta.ip)}</span>`)}
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px"><tr><td style="padding:0">
        <a href="mailto:${escapeHtml(p.email)}?subject=Re%3A%20Tu%20solicitud%20de%20Sliderack" style="display:inline-block;padding:14px 28px;background:${BRAND.red};color:#fff;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;font-weight:700;border-radius:8px;text-decoration:none;text-transform:uppercase;letter-spacing:0.03em">Responder al cliente →</a>
      </td></tr></table>
    </td></tr>
    ${emailFooter()}
  </table>
</body></html>`;
  return { subject, html };
}

/** Auto-reply al lead (acuse de recibo). */
function autoReplyHtml(p: ContactBody): { subject: string; html: string } {
  const firstName = escapeHtml((p.nombre || "").split(" ")[0] || "");
  const subject = "Hemos recibido tu solicitud — Sliderack";
  const html = `<!DOCTYPE html>
<html lang="es"><head><meta charset="UTF-8"/><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:32px 16px;background:#F4F2F0;font-family:'Helvetica Neue',Arial,sans-serif">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;border:1px solid ${BRAND.border};box-shadow:0 8px 24px rgba(0,0,0,0.05)">
    ${emailHeader()}
    <tr><td style="padding:36px 32px">
      <h1 style="margin:0 0 18px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:25px;line-height:1.3;letter-spacing:-0.01em;color:${BRAND.heading};font-weight:700">
        Hola ${firstName}, hemos recibido tu solicitud
      </h1>
      <p style="margin:0 0 16px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.65;color:${BRAND.body}">
        Gracias por tu interés en <strong style="color:${BRAND.heading}">Sliderack</strong>. Hemos recibido tu solicitud y un especialista en almacenaje para taller la está revisando. Te contactaremos <strong style="color:${BRAND.heading}">en menos de 24 horas laborables</strong> para preparar una propuesta a medida de tu espacio.
      </p>
      <p style="margin:0 0 24px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.65;color:${BRAND.body}">
        Si prefieres que te llamemos antes, marca directamente el <a href="tel:+34985308980" style="color:${BRAND.red};text-decoration:none;font-weight:600">985 30 89 80</a> (lunes a viernes).
      </p>
      ${p.mensaje ? `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0"><tr>
        <td style="padding:20px 22px;background:${BRAND.warmSoft};border-radius:10px;border-left:3px solid ${BRAND.red}">
          <p style="margin:0 0 6px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.08em;font-weight:700">Tu solicitud</p>
          <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${BRAND.body};line-height:1.6">"${escapeHtml(p.mensaje).split("\n").join("<br/>")}"</p>
        </td>
      </tr></table>` : ""}
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:24px 0 4px"><tr>
        <td style="padding:18px 20px;background:${BRAND.warm};border-radius:10px;border:1px solid ${BRAND.border}">
          <p style="margin:0 0 4px;font-family:'Helvetica Neue',Arial,sans-serif;font-size:11px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.08em;font-weight:700">Mientras tanto</p>
          <p style="margin:0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${BRAND.body};line-height:1.6">Descubre cómo Sliderack ordena un taller entero en el espacio de una pared en <a href="${SITE_URL}" style="color:${BRAND.red};text-decoration:none;font-weight:600">sliderack.es</a>.</p>
        </td>
      </tr></table>
      <p style="margin:26px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;font-size:14px;color:${BRAND.body};line-height:1.65">
        Un saludo,<br/><strong style="color:${BRAND.heading}">El equipo de Sliderack</strong> · Esnova Racks
      </p>
    </td></tr>
    ${emailFooter("Recibes este email porque solicitaste información en sliderack.es.")}
  </table>
</body></html>`;
  return { subject, html };
}

async function sendEmail(payload: {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
  headers?: Record<string, string>;
}): Promise<{ ok: boolean; error?: unknown }> {
  const body: Record<string, unknown> = {
    from: FROM_EMAIL,
    to: payload.to,
    subject: payload.subject,
    html: payload.html,
  };
  if (payload.replyTo) body.reply_to = payload.replyTo;
  if (payload.headers) body.headers = payload.headers;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) return { ok: false, error: await res.text() };
  return { ok: true };
}

export async function POST(request: Request) {
  try {
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

    const textFields: Array<[string, unknown]> = [
      ["nombre", body.nombre],
      ["email", body.email],
      ["telefono", body.telefono],
      ["empresa", body.empresa],
      ["pais", body.pais],
      ["provincia", body.provincia],
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

    // Un valor de solo espacios no es un valor: se recorta antes de exigirlo.
    const fields = body as unknown as Record<string, unknown>;
    for (const [key] of textFields) {
      const value = fields[key];
      if (typeof value === "string") fields[key] = value.trim();
    }

    if (!body.nombre || !body.email || !body.telefono) {
      return NextResponse.json(
        { error: "Nombre, email y teléfono son obligatorios" },
        { status: 400 }
      );
    }

    // País y provincia: las mismas reglas que aplica el formulario en el navegador,
    // repetidas aquí porque el `required` del HTML no protege a la API.
    // Sin país se asume España, que es lo que trae el selector por defecto.
    const pais = body.pais || ESPANA;
    if (!isPaisValido(pais)) {
      return NextResponse.json({ error: "País no válido" }, { status: 400 });
    }
    if (pais === ESPANA) {
      if (!body.provincia) {
        return NextResponse.json({ error: "La provincia es obligatoria" }, { status: 400 });
      }
      if (!isProvinciaValida(body.provincia)) {
        return NextResponse.json({ error: "Provincia no válida" }, { status: 400 });
      }
    } else if (body.provincia) {
      // La provincia solo aplica a España; fuera de ella se descarta.
      body.provincia = undefined;
    }
    body.pais = pais;

    if (!validEmail(body.email)) {
      return NextResponse.json({ error: "Email no válido" }, { status: 400 });
    }

    const timestamp = body.consentTimestamp || new Date().toISOString();
    const when = new Date().toLocaleString("es-ES", {
      timeZone: "Europe/Madrid",
      dateStyle: "long",
      timeStyle: "short",
    });

    const notify = notificationHtml(body, { when, ip, timestamp });
    const autoReply = autoReplyHtml(body);

    if (process.env.RESEND_API_KEY) {
      // AWAIT obligatorio: en Vercel serverless el contenedor se termina al
      // devolver la respuesta; una promesa sin await se aborta y se pierde el
      // email (lección Neodoc). El coste es ~200-400 ms de latencia extra.
      const [notifyRes, autoRes] = await Promise.all([
        sendEmail({
          to: NOTIFY_EMAILS,
          replyTo: body.email,
          subject: notify.subject,
          html: notify.html,
        }),
        sendEmail({
          to: [body.email],
          subject: autoReply.subject,
          html: autoReply.html,
          headers: { "Auto-Submitted": "auto-replied" },
        }),
      ]);
      if (!notifyRes.ok) {
        console.error("Resend notify error:", notifyRes.error);
        // La notificación al equipo es crítica: si falla, devolvemos error.
        return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 });
      }
      if (!autoRes.ok) {
        // El auto-reply es secundario: se registra pero no bloquea la conversión.
        console.error("Resend auto-reply error:", autoRes.error);
      }
    } else {
      console.log("=== CONTACT FORM SUBMISSION (log-only, sin RESEND_API_KEY) ===");
      console.log("Notify:", NOTIFY_EMAILS.join(", "));
      console.log(notify.subject);
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
