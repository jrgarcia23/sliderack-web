import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPage from "@/components/ContactPage";
import { buildAlternates } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    alternates: buildAlternates(locale, "/contacto"),
  };
}

export default function Contacto() {
  return (
    <>
      <Header />
      <Suspense>
        <ContactPage />
      </Suspense>
      <Footer hideCta />
    </>
  );
}
