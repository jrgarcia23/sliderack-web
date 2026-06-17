import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Sistemas 1 Nivel · Prof. 370
      { source: "/sistemas/sliderack-1825-370", destination: "/sistemas/sliderack-1-1837", permanent: true },
      { source: "/sistemas/sliderack-2700-370", destination: "/sistemas/sliderack-1-2737", permanent: true },
      { source: "/sistemas/sliderack-3600-370", destination: "/sistemas/sliderack-1-3637", permanent: true },
      // Sistemas 1 Nivel · Prof. 470
      { source: "/sistemas/sliderack-1825-470", destination: "/sistemas/sliderack-1-1847", permanent: true },
      { source: "/sistemas/sliderack-2700-470", destination: "/sistemas/sliderack-1-2747", permanent: true },
      { source: "/sistemas/sliderack-3600-470", destination: "/sistemas/sliderack-1-3647", permanent: true },
      // Sistemas 2 Niveles · Prof. 370
      { source: "/sistemas/sliderack-2n-1825-370", destination: "/sistemas/sliderack-2-1837", permanent: true },
      { source: "/sistemas/sliderack-2n-2700-370", destination: "/sistemas/sliderack-2-2737", permanent: true },
      { source: "/sistemas/sliderack-2n-3600-370", destination: "/sistemas/sliderack-2-3637", permanent: true },
      // Sistemas 2 Niveles · Prof. 470
      { source: "/sistemas/sliderack-2n-1825-470", destination: "/sistemas/sliderack-2-1847", permanent: true },
      { source: "/sistemas/sliderack-2n-2700-470", destination: "/sistemas/sliderack-2-2747", permanent: true },
      { source: "/sistemas/sliderack-2n-3600-470", destination: "/sistemas/sliderack-2-3647", permanent: true },
      // Accesorios
      { source: "/accesorios/kit-cajon", destination: "/accesorios/kit-5-cajones", permanent: true },
      { source: "/accesorios/modulo", destination: "/accesorios/armario-movil-adicional", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
