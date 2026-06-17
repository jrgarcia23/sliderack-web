import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/sistemas": { es: "/sistemas", en: "/systems" },
    "/sistemas/[slug]": { es: "/sistemas/[slug]", en: "/systems/[slug]" },
    "/accesorios": { es: "/accesorios", en: "/accessories" },
    "/accesorios/[slug]": { es: "/accesorios/[slug]", en: "/accessories/[slug]" },
    "/por-que-sliderack": { es: "/por-que-sliderack", en: "/why-sliderack" },
    "/compania": { es: "/compania", en: "/company" },
    "/contacto": { es: "/contacto", en: "/contact" },
    "/talleres": { es: "/talleres", en: "/workshops" },
    "/blog": { es: "/blog", en: "/blog" },
    "/gracias": { es: "/gracias", en: "/thank-you" },
    "/aviso-legal": { es: "/aviso-legal", en: "/legal-notice" },
    "/politica-de-privacidad": { es: "/politica-de-privacidad", en: "/privacy-policy" },
    "/politica-de-cookies": { es: "/politica-de-cookies", en: "/cookie-policy" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
