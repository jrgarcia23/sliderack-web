import type { Metadata } from "next";
import { Rajdhani, Heebo, Open_Sans, Roboto } from "next/font/google";
import "./globals.css";

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
  title: "Sliderack | La fortaleza de la sencillez",
  description:
    "Sliderack es un sistema de almacenaje deslizante diseñado para entornos que exigen precisión, orden y fiabilidad. Fabricado por Esnova Racks.",
  icons: {
    icon: [
      { url: "/images/sliderack/logo.png", sizes: "192x192" },
    ],
  },
  openGraph: {
    images: ["/images/sliderack/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rajdhani.variable} ${heebo.variable} ${openSans.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-heebo text-[#201F20] bg-white">
        {children}
      </body>
    </html>
  );
}
