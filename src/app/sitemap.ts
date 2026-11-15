import { MetadataRoute } from "next";
import { products } from "@/data/products";

const base = "https://www.sliderack.es";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SitemapEntry = {
  url: string;
  changeFrequency?: ChangeFreq;
  priority?: number;
  alternates?: { languages: Record<string, string> };
};

type Page = {
  es: string;
  en: string;
  priority?: number;
  freq?: ChangeFreq;
};

// /blog y /en/blog quedan fuera mientras no tengan posts (llevan noindex).
// Sin lastModified: no hay una fecha real de modificación por página y la hora del build
// le diría a Google que todo cambia en cada despliegue.
const staticPathnames: Page[] = [
  { es: "", en: "/en", priority: 1 },
  { es: "/sistemas", en: "/en/systems", priority: 0.9 },
  { es: "/accesorios", en: "/en/accessories", priority: 0.9 },
  { es: "/por-que-sliderack", en: "/en/why-sliderack", priority: 0.8 },
  { es: "/compania", en: "/en/company", priority: 0.7 },
  { es: "/contacto", en: "/en/contact", priority: 0.85 },
  { es: "/aviso-legal", en: "/en/legal-notice", priority: 0.3, freq: "yearly" },
  { es: "/politica-de-privacidad", en: "/en/privacy-policy", priority: 0.3, freq: "yearly" },
  { es: "/politica-de-cookies", en: "/en/cookie-policy", priority: 0.3, freq: "yearly" },
];

/**
 * Una entrada <url> por idioma (ES y EN), las dos con el mismo bloque de hreflang,
 * como pide Google para sitemaps con alternates.
 */
function bothLocales({ es, en, priority = 0.8, freq = "monthly" }: Page): SitemapEntry[] {
  const alternates = {
    languages: {
      es: `${base}${es}`,
      en: `${base}${en}`,
      "x-default": `${base}${es}`,
    },
  };
  return [
    { url: `${base}${es}`, changeFrequency: freq, priority, alternates },
    { url: `${base}${en}`, changeFrequency: freq, priority, alternates },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const sistemas: Page[] = products
    .filter((p) => p.category === "sistemas")
    .map((p) => ({ es: `/sistemas/${p.slug}`, en: `/en/systems/${p.slug}`, priority: 0.8 }));

  const accesorios: Page[] = products
    .filter((p) => p.category === "accesorios")
    .map((p) => ({ es: `/accesorios/${p.slug}`, en: `/en/accessories/${p.slug}`, priority: 0.7 }));

  return [...staticPathnames, ...sistemas, ...accesorios].flatMap(bothLocales);
}
