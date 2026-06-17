import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory, getBadgeLabel } from "@/data/products";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const problemIcons = [
  <svg key="0" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>,
  <svg key="1" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>,
  <svg key="2" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.workshops" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    robots: { index: false, follow: false },
  };
}

export default async function TalleresPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.workshops" });

  const problems = t.raw("problems") as Array<{ title: string; desc: string }>;
  const solutions = t.raw("solutions") as Array<{ stat: string; label: string; desc: string }>;
  const useCases = t.raw("useCases") as Array<{ title: string; items: string[] }>;

  const sistemas = getProductsByCategory("sistemas").slice(0, 4);
  const accesorios = getProductsByCategory("accesorios").slice(0, 4);

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[400px] md:h-[500px] flex items-center"
          style={{ backgroundImage: 'url("/images/sliderack/photos/taller-completo.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 mx-auto max-w-[1200px] px-6 w-full">
            <span className="mb-4 inline-block rounded-full bg-[#A52430] px-4 py-1.5 font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-[2px] text-white">
              {t("subtitle")}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[52px] font-bold uppercase text-white leading-[1.1] max-w-[700px]">
              {t("title")}
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="rounded-lg bg-[#A52430] px-8 py-4 text-center font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors">
                {t("ctaContact")}
              </Link>
              <Link href="/sistemas" className="rounded-lg border-2 border-white/30 px-8 py-4 text-center font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white hover:border-white transition-colors">
                {locale === "en" ? "View models" : "Ver modelos"}
              </Link>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-14">
                {t("problemsTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problems.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100} direction="up">
                  <div className="rounded-xl border border-gray-100 p-7 h-full">
                    <div className="mb-4 text-[#A52430]">{problemIcons[i]}</div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-bold uppercase text-[#201F20] mb-3">{p.title}</h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-[#777]">{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions (numbers) */}
        <section className="bg-[#201F20] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-white mb-14">
                {t("solutionsTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {solutions.map((s, i) => (
                <ScrollReveal key={s.label} delay={i * 80} direction="up">
                  <div className="text-center">
                    <span className="font-[family-name:var(--font-heading)] text-[48px] md:text-[56px] font-bold text-[#A52430] leading-none">
                      {s.stat}
                    </span>
                    <p className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[1px] text-white mt-2 mb-2">
                      {s.label}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-[13px] text-white/50 leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
              {locale === "en" ? "Every tool in its place. Every minute used." : "Cada herramienta en su sitio. Cada minuto aprovechado."}
            </h2>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20] mb-12">
                {t("useCasesTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((uc, i) => (
                <ScrollReveal key={uc.title} delay={i * 100} direction="up">
                  <div className="rounded-xl bg-white border border-gray-100 p-7 h-full">
                    <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-bold uppercase text-[#A52430] mb-4">{uc.title}</h3>
                    <ul className="space-y-3">
                      {uc.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#A52430] mt-2 shrink-0" />
                          <span className="font-[family-name:var(--font-body)] text-[14px] text-[#666] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended systems */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20] mb-12">
                {t("systemsTitle")}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sistemas.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 80} direction="up">
                  <Link href={{ pathname: "/sistemas/[slug]", params: { slug: p.slug } }} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <Image src={p.image} alt={p.name} fill className="object-contain p-6" />
                      <span className="absolute left-3 top-3 rounded bg-[#A52430] px-2.5 py-1 font-[family-name:var(--font-heading)] text-[11px] font-semibold uppercase text-white">
                        {getBadgeLabel(p.badge, locale)}
                      </span>
                    </div>
                    <div className="pt-3">
                      <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-semibold uppercase text-[#201F20]">
                        Sliderack {p.name}
                      </h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/sistemas" className="font-[family-name:var(--font-heading)] text-[14px] font-semibold uppercase tracking-[1px] text-[#A52430] hover:underline">
                {locale === "en" ? "View all models →" : "Ver todos los modelos →"}
              </Link>
            </div>
          </div>
        </section>

        {/* Accessories */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1200px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20] mb-12">
                {locale === "en" ? "Essential accessories for the workshop" : "Accesorios imprescindibles para el taller"}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {accesorios.map((p, i) => {
                const name = locale === "en" && p.nameEn ? p.nameEn : p.name;
                return (
                  <ScrollReveal key={p.slug} delay={i * 80} direction="up">
                    <Link href={{ pathname: "/accesorios/[slug]", params: { slug: p.slug } }} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                        <Image src={p.image} alt={name} fill className="object-contain p-6" />
                      </div>
                      <div className="pt-3">
                        <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-semibold uppercase text-[#201F20]">{name}</h3>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Trust stats + CTA */}
        <section className="bg-white px-6 py-20 border-t border-gray-100">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
                {[
                  { stat: "50+", label: locale === "en" ? "Years experience" : "Años de experiencia" },
                  { stat: "+45", label: locale === "en" ? "Countries" : "Países" },
                  { stat: "46.600", label: "m² " + (locale === "en" ? "factory" : "de planta") },
                  { stat: "4", label: locale === "en" ? "ISO certifications" : "Certificaciones ISO" },
                ].map((item) => (
                  <div key={item.label}>
                    <span className="font-[family-name:var(--font-heading)] text-[36px] font-bold text-[#A52430]">{item.stat}</span>
                    <p className="font-[family-name:var(--font-body)] text-[13px] text-[#999] mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="text-center">
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-4">
                  {t("ctaTitle")}
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] text-[#888] mb-8 max-w-[500px] mx-auto">{t("ctaBody")}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contacto" className="rounded-lg bg-[#A52430] px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors">
                    {t("ctaContact")}
                  </Link>
                  <a href="tel:+34985308980" className="rounded-lg border-2 border-gray-300 px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition-colors">
                    985 30 89 80
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
