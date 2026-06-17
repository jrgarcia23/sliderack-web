import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import CookieBanner from "@/components/CookieBanner";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// Locale-aware OpenGraph/Twitter so sharing an /en URL shows English (the root
// layout's OG is Spanish-only). canonical/hreflang stay per-page (buildAlternates).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });
  const title = t("metaTitle");
  const description = t("metaDescription");
  const ogLocale = locale === "en" ? "en_US" : "es_ES";
  const image = { url: "/images/sliderack/logo.webp", width: 1200, height: 630, alt: "Sliderack" };
  return {
    openGraph: {
      type: "website",
      locale: ogLocale,
      siteName: "Sliderack",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
      <CookieBanner />
    </NextIntlClientProvider>
  );
}
