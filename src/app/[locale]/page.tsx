import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExploreLevrack from "@/components/ExploreLevrack";
import LeadersBanner from "@/components/LeadersBanner";
import WhoUsesLevrack from "@/components/WhoUsesLevrack";
import ExploreWorkstations from "@/components/ExploreWorkstations";
import LevrackAccessories from "@/components/LevrackAccessories";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });
  return {
    title: { absolute: t("metaTitle") },
    description: t("metaDescription"),
    alternates: buildAlternates(locale, "/"),
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExploreLevrack />
        <LeadersBanner />
        <WhoUsesLevrack />
        <ExploreWorkstations />
        <LevrackAccessories />
        <FAQSection />
        <ContactFormSection />
      </main>
      <Footer hideCta />
    </>
  );
}
