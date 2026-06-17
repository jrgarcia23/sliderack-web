import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildAlternates } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.blog" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    robots: { index: true, follow: true },
    alternates: buildAlternates(locale, "/blog"),
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.blog" });

  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[48px] font-bold uppercase text-[#201F20] mb-6">
            {t("title")}
          </h1>
          <p className="font-[family-name:var(--font-body)] text-[17px] text-[#888] mb-12">
            {t("subtitle")}
          </p>
          <div className="inline-block rounded-full bg-[#f5f5f5] px-6 py-3">
            <span className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[2px] text-[#999]">
              {t("comingSoon")}
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
