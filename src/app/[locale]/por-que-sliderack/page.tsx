import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { buildAlternates } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const difIcons = [
  <svg key="0" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.22a.993.993 0 01-.534-.872V6.073a1 1 0 01.534-.872l5.58-3.22a1 1 0 01.96 0l5.58 3.22a1 1 0 01.534.872v5.005a1 1 0 01-.534.872l-5.58 3.22a1 1 0 01-.96 0z" />
  </svg>,
  <svg key="2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
  </svg>,
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.whySliderack" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    alternates: buildAlternates(locale, "/por-que-sliderack"),
  };
}

export default async function PorQueSliderrackPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.whySliderack" });

  const badges = [t("badge1"), t("badge2"), t("badge3"), t("badge4")];
  const dif = t.raw("dif") as Array<{ title: string; desc: string }>;
  const sectors = t.raw("sectors") as Array<{ name: string; desc: string }>;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[350px] md:h-[450px] flex items-center justify-center"
          style={{ backgroundImage: 'url("/images/sliderack/bg/vista-general.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[52px] font-bold uppercase text-white">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-[550px] mx-auto font-[family-name:var(--font-body)] text-[17px] text-white/70">
              {t("subtitle")}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-[1200px] px-6 py-3 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {badges.map((badge) => (
                <span key={badge} className="font-[family-name:var(--font-heading)] text-[12px] font-semibold uppercase tracking-[1.5px] text-white/80">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/sliderack/photos/taller-completo.jpg" alt="Sliderack installed in a professional workshop" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                  {t("introTitle")}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">
                  {t("introPara1")}
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
                  {t("introPara2")}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Technical advantages */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-14">
                {t("techTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ScrollReveal direction="left">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("techPara1")}</p>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">{t("techPara2")}</p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("techPara3")}</p>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">{t("techPara4")}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-14">
                {t("difTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dif.map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 100} direction="up">
                  <div className="text-center h-full">
                    <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-[#A52430]/10 flex items-center justify-center text-[#A52430]">
                      {difIcons[i]}
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-bold uppercase text-[#201F20] mb-3">{d.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-[#777]">{d.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Configuration */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                {t("configTitle")}
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("configPara1")}</p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("configPara2")}</p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">{t("configPara3")}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Photo break */}
        <section
          className="relative h-[300px] md:h-[400px] flex items-center justify-center"
          style={{ backgroundImage: 'url("/images/sliderack/photos/garaje-bmw.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-6">
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[40px] font-bold uppercase text-white max-w-[700px]">
              {t("photoBreakQuote")}
            </h2>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20] mb-4">
                {t("sectorsTitle")}
              </h2>
              <p className="text-center max-w-[500px] mx-auto font-[family-name:var(--font-body)] text-[16px] text-[#888] mb-12">
                {t("sectorsSubtitle")}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((s, i) => (
                <ScrollReveal key={s.name} delay={i * 60} direction="up">
                  <div className="rounded-xl bg-[#f8f8f8] border border-gray-100 p-6 h-full">
                    <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-bold uppercase text-[#201F20] mb-3">{s.name}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-[#777]">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#A52430] px-6 py-20">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-white mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white/80 mb-8">{t("ctaBody")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contacto" className="rounded-lg border-2 border-white bg-white px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-[#A52430] hover:bg-transparent hover:text-white transition-colors">
                {t("ctaContact")}
              </Link>
              <a href="/catalogo-sliderack.pdf" target="_blank" rel="noopener noreferrer" className="rounded-lg border-2 border-white/40 px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:border-white transition-colors">
                {t("ctaCatalogue")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer hideCta />
    </>
  );
}
