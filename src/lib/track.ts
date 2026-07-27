import { ADS_LEAD_CONVERSION, GA_ID } from "@/lib/analytics-ids";

/**
 * Marca un lead conseguido: conversión en Google Ads + evento clave en GA4.
 *
 * Se llama en el handler del formulario, justo tras el 200 de /api/contact y
 * antes de navegar a /gracias. Se hace aquí y no en la página de gracias a
 * propósito: así se dispara exactamente una vez por envío correcto y una recarga
 * o un acceso directo a /gracias no puede inventarse un lead.
 *
 * Como la navegación posterior es client-side (router.push), la página no se
 * destruye y a los pings les da tiempo a salir.
 *
 * Si el usuario no ha aceptado cookies, gtag existe igual (Consent Mode v2 lo
 * carga en modo denegado) y el ping sale sin cookies, que es lo que permite a
 * Google modelar la conversión. Si aun así no existiera, esto es un no-op.
 */
export function trackLead(leadSource: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", { send_to: ADS_LEAD_CONVERSION });
  window.gtag("event", "generate_lead", {
    send_to: GA_ID,
    lead_source: leadSource,
  });
}
