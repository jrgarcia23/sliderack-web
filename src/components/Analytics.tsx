"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { getCookiePreferences } from "@/components/CookieBanner";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
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
      {/* gtag.js: se carga tras consentimiento y sirve tanto a GA4 (si hay ID)
          como a Google Ads. El componente ya solo se renderiza con consent, por
          lo que aquí ad_storage puede otorgarse. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || ADS_ID}`}
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
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
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
