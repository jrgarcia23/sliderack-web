import type { Metadata } from "next";
import { Rajdhani, Heebo, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Analytics from "@/components/Analytics";
import { OrganizationSchema } from "@/components/SchemaOrg";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const heebo = Heebo({
  variable: "--font-heebo",
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
    icon: [{ url: "/images/sliderack/logo.webp", sizes: "192x192" }],
  },
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
  alternates: {
    canonical: "https://sliderack.es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${rajdhani.variable} ${heebo.variable} ${openSans.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-heebo text-[#201F20] bg-white">
        <OrganizationSchema />
        <Analytics />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
