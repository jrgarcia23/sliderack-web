import { MetadataRoute } from "next";
import { products } from "@/data/products";

const base = "https://sliderack.es";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

type SitemapEntry = {
  url: string;
  lastModified?: Date;
  changeFrequency?: ChangeFreq;
  priority?: number;
  alternates?: { languages: Record<string, string> };
};

const staticPathnames: Array<{
  es: string;
  en: string;
  priority?: number;
  freq?: ChangeFreq;
}> = [
  { es: "", en: "/en", priority: 1 },
  { es: "/sistemas", en: "/en/systems", priority: 0.9 },
  { es: "/accesorios", en: "/en/accessories", priority: 0.9 },
  { es: "/por-que-sliderack", en: "/en/why-sliderack", priority: 0.8 },
  { es: "/compania", en: "/en/company", priority: 0.7 },
  { es: "/contacto", en: "/en/contact", priority: 0.85 },
  { es: "/blog", en: "/en/blog", priority: 0.6 },
  { es: "/aviso-legal", en: "/en/legal-notice", priority: 0.3, freq: "yearly" },
  { es: "/politica-de-privacidad", en: "/en/privacy-policy", priority: 0.3, freq: "yearly" },
  { es: "/politica-de-cookies", en: "/en/cookie-policy", priority: 0.3, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: SitemapEntry[] = staticPathnames.map(({ es, en, priority = 0.8, freq = "monthly" }) => ({
    url: `${base}${es}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
    alternates: {
      languages: {
        es: `${base}${es}`,
        en: `${base}${en}`,
        "x-default": `${base}${es}`,
      },
    },
  }));

  const sistemas = products.filter((p) => p.category === "sistemas");
  const accesorios = products.filter((p) => p.category === "accesorios");

  const sistemasPages: SitemapEntry[] = sistemas.map((p) => ({
    url: `${base}/sistemas/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        es: `${base}/sistemas/${p.slug}`,
        en: `${base}/en/systems/${p.slug}`,
        "x-default": `${base}/sistemas/${p.slug}`,
      },
    },
  }));

  const accesoriosPages: SitemapEntry[] = accesorios.map((p) => ({
    url: `${base}/accesorios/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: {
        es: `${base}/accesorios/${p.slug}`,
        en: `${base}/en/accessories/${p.slug}`,
        "x-default": `${base}/accesorios/${p.slug}`,
      },
    },
  }));

  return [...staticPages, ...sistemasPages, ...accesoriosPages];
}
