import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.gracias" });
  return {
    title: `${t("title")}`,
    description: t("body"),
    robots: { index: false, follow: false },
  };
}

export default async function GraciasPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.gracias" });
  const tc = await getTranslations({ locale, namespace: "contact" });

  const bullets = [tc("trust_response"), tc("trust_advice"), tc("trust_nocommit")];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Message */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-wide text-green-700">
                  {t("title")}
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[48px] font-bold uppercase leading-[1.1] text-[#201F20]">
                {t("title")}
              </h1>

              <p className="mt-6 font-[family-name:var(--font-body)] text-[17px] leading-relaxed text-[#666]">
                {t("body")}
              </p>

              <div className="mt-8 space-y-3">
                {bullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#A52430] shrink-0" />
                    <span className="font-[family-name:var(--font-body)] text-[15px] text-[#555]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href="/sistemas" className="rounded-lg bg-[#A52430] px-8 py-3.5 text-center font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors">
                  {locale === "en" ? "Explore systems" : "Explorar sistemas"}
                </Link>
                <Link href="/" className="rounded-lg border-2 border-gray-300 px-8 py-3.5 text-center font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition-colors">
                  {t("cta")}
                </Link>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="font-[family-name:var(--font-body)] text-[14px] text-[#999]">
                  {tc("preferCall")}{" "}
                  <a href="tel:+34985308980" className="text-[#A52430] font-semibold hover:underline">985 30 89 80</a>
                  {" "}({tc("schedule")})
                </p>
              </div>
            </div>

            {/* Right: Product image */}
            <div className="relative">
              <div className="relative aspect-square bg-[#f5f5f5] overflow-hidden">
                <Image src="/images/sliderack/products/sr-2700-370.webp" alt="Sliderack system" fill className="object-contain p-8" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-left-6 bg-[#201F20] px-5 py-4 shadow-xl">
                <p className="font-[family-name:var(--font-heading)] text-[12px] font-semibold uppercase tracking-[2px] text-[#A52430]">
                  {locale === "en" ? "Made in Spain" : "Fabricado en España"}
                </p>
                <p className="font-[family-name:var(--font-heading)] text-[20px] font-bold text-white mt-0.5">
                  {locale === "en" ? "Over 50 years" : "Más de 50 años"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
