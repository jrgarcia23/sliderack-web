"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const consent = localStorage.getItem("cookie-consent");
    if (consent !== "accepted") return;

    // Initialize GA4 after consent
    window.gtag?.("config", GA_ID, {
      page_path: window.location.pathname,
    });
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
          });

          // Check existing consent
          if (localStorage.getItem('cookie-consent') === 'accepted') {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            });
          }

          gtag('config', '${GA_ID}');
        `}
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
