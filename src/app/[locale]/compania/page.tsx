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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.company" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    alternates: buildAlternates(locale, "/compania"),
  };
}

export default async function CompaniaPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.company" });

  const badges = [t("badge1"), t("badge2"), t("badge3"), t("badge4")];
  const certs = t.raw("certs") as Array<{ name: string; desc: string }>;
  const timeline = t.raw("timeline") as Array<{ year: string; text: string }>;

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[350px] md:h-[450px] flex items-center justify-center"
          style={{ backgroundImage: 'url("/images/sliderack/bg/instalacion-taller.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
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

        {/* Main story + timeline */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14">
            <ScrollReveal direction="left">
              <div className="relative overflow-hidden h-full min-h-[500px]">
                <Image src="/images/sliderack/photos/estanteria-esnova.jpg" alt="Sliderack shelving system by Esnova Racks" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase leading-[1.15] text-[#201F20] mb-6">
                  {t("mainTitle")}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">{t("mainPara1")}</p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-10">{t("mainPara2")}</p>

                <div className="relative">
                  <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gray-200" />
                  <div className="flex flex-col gap-5">
                    {timeline.map((m) => (
                      <div key={m.year} className="flex gap-4 items-start">
                        <div className="relative z-10 w-[36px] h-[36px] rounded-full bg-white border-2 border-[#A52430] flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-[#A52430]" />
                        </div>
                        <div className="pt-1">
                          <span className="font-[family-name:var(--font-heading)] text-[15px] font-bold text-[#A52430]">{m.year}</span>
                          <p className="font-[family-name:var(--font-body)] text-[13px] text-[#666] mt-0.5">{m.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Manufacturing */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                {t("mfgTitle")}
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("mfgPara1")}</p>
              <p
                className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]"
                dangerouslySetInnerHTML={{ __html: t("mfgPara2") }}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Design */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/sliderack/photos/sliderack-detalle.jpg" alt="Sliderack system detail" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase leading-[1.15] text-[#201F20] mb-6">
                  {t("designTitle")}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">{t("designPara1")}</p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">{t("designPara2")}</p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">{t("designPara3")}</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quality */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                {t("qualityTitle")}
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">{t("qualityPara1")}</p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">{t("qualityPara2")}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-[#201F20] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-white mb-4">
                {t("certsTitle")}
              </h2>
              <p className="text-center font-[family-name:var(--font-body)] text-[15px] text-white/50 mb-12 max-w-[500px] mx-auto">
                {t("certsSubtitle")}
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certs.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 80} direction="up">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#A52430]/40 transition-colors h-full">
                    <p className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-white">{c.name}</p>
                    <p className="mt-2 font-[family-name:var(--font-body)] text-[13px] text-white/50">{c.desc}</p>
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
