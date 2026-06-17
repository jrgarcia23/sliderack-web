import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Open_Sans, Roboto } from "next/font/google";
import { getLocale } from "next-intl/server";
import "./globals.css";
import Analytics from "@/components/Analytics";
import { OrganizationSchema } from "@/components/SchemaOrg";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Sliderack | La fortaleza de la sencillez",
    template: "%s | Sliderack",
  },
  description:
    "Sliderack es un sistema de almacenaje deslizante diseñado para entornos que exigen precisión, orden y fiabilidad. Fabricado por Esnova Racks.",
  metadataBase: new URL("https://sliderack.es"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Sliderack",
    title: "Sliderack | La fortaleza de la sencillez",
    description:
      "Sistema de almacenaje deslizante de alta precisión. Diseñado y fabricado en España por Esnova Racks.",
    images: [{ url: "/images/sliderack/logo.webp", width: 1200, height: 630, alt: "Sliderack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sliderack | La fortaleza de la sencillez",
    description:
      "Sistema de almacenaje deslizante de alta precisión. Fabricado en España por Esnova Racks.",
    images: ["/images/sliderack/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // Per-page canonical + hreflang are emitted from each page's generateMetadata
  // via buildAlternates() (see src/lib/seo.ts). A global canonical here would
  // mark every page as a duplicate of the home.
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      className={`${barlowCondensed.variable} ${dmSans.variable} ${openSans.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-[#201F20] bg-white">
        <OrganizationSchema />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
