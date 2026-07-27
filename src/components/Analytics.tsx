"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCookiePreferences } from "@/components/CookieBanner";
import { ADS_ID, GA_ID } from "@/lib/analytics-ids";

const CLARITY_ID = "wxuvstjke4";

// Consent Mode v2.
//
// Antes este componente devolvía null mientras no hubiera consentimiento, así que
// quien ignoraba el banner (la mayoría) no generaba ni un hit: ni GA4, ni Ads, ni
// pings sin cookies, y por tanto tampoco modelado de conversiones en Ads.
//
// Ahora el tag se carga SIEMPRE, pero arrancando con todo denegado. Sin
// consentimiento Google no escribe cookies ni identifica a nadie: manda pings
// cookieless que le permiten modelar. Al aceptar en el banner se hace un
// consent update y pasa a medición completa. Al rechazar se queda en denegado.
//
// Clarity no tiene consent mode, así que ese sí sigue condicionado al consentimiento.

/** Lee el consentimiento guardado antes de que cargue gtag, para que un usuario
 *  que ya aceptó no mande su primer page_view en modo denegado. Se inyecta como
 *  string porque tiene que ejecutarse antes que nada. */
const CONSENT_BOOTSTRAP = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
  try {
    var prefs = JSON.parse(localStorage.getItem('cookie-preferences') || 'null');
    if (prefs && prefs.analytics) {
      gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted'
      });
    }
  } catch (e) {}
`;

export default function Analytics() {
  const [analyticsConsented, setAnalyticsConsented] = useState(false);

  useEffect(() => {
    setAnalyticsConsented(getCookiePreferences().analytics);

    const handler = () => {
      const updated = getCookiePreferences();
      setAnalyticsConsented(updated.analytics);
      // Se propaga siempre, también al rechazar: un "denied" explícito es una
      // señal válida de Consent Mode, no la ausencia de señal.
      const state = updated.analytics ? "granted" : "denied";
      window.gtag?.("consent", "update", {
        analytics_storage: state,
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
      });
    };
    window.addEventListener("cookie-consent-update", handler);
    return () => window.removeEventListener("cookie-consent-update", handler);
  }, []);

  return (
    <>
      {/* Tiene que ejecutarse ANTES de que cargue gtag.js, de ahí beforeInteractive. */}
      <Script id="gtag-consent-default" strategy="beforeInteractive">
        {CONSENT_BOOTSTRAP}
      </Script>

      {/* El loader va SIEMPRE por ADS_ID: es el único Google tag servido de la
          cuenta, y GA_ID viaja dentro como destino vinculado. Pedirlo con GA_ID
          devuelve 404 y deja el sitio entero sin medir. Ver src/lib/analytics-ids.ts. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
        `}
      </Script>

      {/* Microsoft Clarity (heatmaps + grabaciones; señal Bing). Sin consent mode
          propio, así que solo se carga con consentimiento explícito. */}
      {analyticsConsented && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
        </Script>
      )}
    </>
  );
}

export { GA_ID };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
