import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const BASE = "https://sliderack.es";

// Mirrors the `href` accepted by next-intl's getPathname: a known pathname key
// (e.g. "/sistemas") or an object with pathname + params (e.g. "/sistemas/[slug]").
type Href = Parameters<typeof getPathname>[0]["href"];

function url(locale: string, href: Href): string {
  // getPathname respects localePrefix: "as-needed" (no prefix for the default locale).
  const path = getPathname({ locale, href });
  return BASE + (path === "/" ? "" : path);
}

/**
 * Builds canonical + hreflang alternates for a page in the given locale.
 * - canonical → self-referencing URL of the current locale.
 * - languages → one entry per locale (es / en) plus x-default (default locale).
 *
 * Returning page-level alternates is required: Next.js replaces (does not merge)
 * the `alternates` field, so a global canonical in the root layout would otherwise
 * mark every page as a duplicate of the home.
 */
export function buildAlternates(locale: string, href: Href): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = url(loc, href);
  }
  languages["x-default"] = url(routing.defaultLocale, href);

  return {
    canonical: url(locale, href),
    languages,
  };
}
