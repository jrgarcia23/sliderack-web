"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCookiePreferences } from "@/components/CookieBanner";

// Cómo está montada la medición de Sliderack (verificado contra la GA4 Admin API
// y con Playwright sobre producción el 27-jul-2026):
//
//   · La propiedad GA4 es la 531623274 ("Sliderack", cuenta 390166986) y su único
//     data stream es G-FG09L26VL7.
//   · El ÚNICO Google tag servido de la cuenta es AW-18087793515. G-FG09L26VL7 va
//     dentro de él como destino vinculado, no como tag propio: pedirlo al loader
//     (gtag/js?id=G-FG09L26VL7) devuelve 404 y deja el sitio sin medir NADA.
//     Por eso el <Script> de abajo carga siempre por ADS_ID.
//   · Para mandar eventos a GA4 desde cualquier componente: send_to GA_ID.
//     Ejemplo: gtag('event','generate_lead',{ send_to: GA_ID }).
//
// Histórico: aquí llegó a fijarse G-4HLFXX80SW, que no es stream de esta propiedad.
// Antes de tocar estos IDs, comprobar el stream real en Admin → Flujos de datos Y
// que el loader responda 200 (curl "…/gtag/js?id=<ID>").
export const GA_ID = "G-FG09L26VL7";
const ADS_ID = "AW-18087793515"; // Google Ads (conversiones/remarketing)
const CLARITY_ID = "wxuvstjke4";

export default function Analytics() {
  const [analyticsConsented, setAnalyticsConsented] = useState(false);

  useEffect(() => {
    // Check initial consent
    const prefs = getCookiePreferences();
    setAnalyticsConsented(prefs.analytics);

    // Listen for consent updates
    const handler = () => {
      const updated = getCookiePreferences();
      setAnalyticsConsented(updated.analytics);
      if (updated.analytics) {
        window.gtag?.("consent", "update", {
          analytics_storage: "granted",
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
        });
      }
    };
    window.addEventListener("cookie-consent-update", handler);
    return () => window.removeEventListener("cookie-consent-update", handler);
  }, []);

  // Only load analytics scripts after analytics consent
  if (!analyticsConsented) return null;

  return (
    <>
      {/* gtag.js: se carga tras consentimiento y alimenta GA4 y Google Ads.
          El loader va SIEMPRE por ADS_ID: es el único Google tag servido de la
          cuenta, y GA_ID viaja dentro como destino vinculado. Pedir el loader
          con GA_ID devuelve 404 y deja el sitio entero sin medir. El componente
          ya solo se renderiza con consent, por lo que ad_storage puede otorgarse. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'granted',
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          });
          gtag('config', '${ADS_ID}');
        `}
      </Script>
      {/* Microsoft Clarity (heatmaps + grabaciones; señal Bing) — tras consentimiento */}
      <Script id="ms-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
