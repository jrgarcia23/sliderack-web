import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory, l } from "@/data/products";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { buildAlternates } from "@/lib/seo";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.accesorios" });
  return {
    title: `${t("title")}`,
    description: t("subtitle"),
    alternates: buildAlternates(locale, "/accesorios"),
  };
}

export default async function AccesoriosPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.accesorios" });
  const products = getProductsByCategory("accesorios");
  const systems = getProductsByCategory("sistemas").slice(0, 4);

  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section
          className="relative h-[250px] md:h-[350px] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/sliderack/bg/detalle-paneles.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]">
              {t("eyebrow")}
            </span>
            <h1 className="font-[family-name:var(--font-heading)] text-[32px] md:text-[48px] font-bold uppercase text-white">
              {t("title")}
            </h1>
            <p className="mt-4 max-w-[600px] font-[family-name:var(--font-body)] text-[18px] text-white/70">
              {t("heroSubtitle")}
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-white pt-20 pb-6 px-6">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="text-center uppercase mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 700, color: "#201F20", lineHeight: 1.1 }}>
                {t("introH2")}
              </h2>
              <p className="text-center mx-auto max-w-[750px]" style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "#666" }}>
                {t("introText")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Product Grid */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => {
              const name = locale === "en" && product.nameEn ? product.nameEn : product.name;
              return (
                <ScrollReveal key={product.slug} delay={i * 100} direction="up">
                  <Link href={{ pathname: "/accesorios/[slug]", params: { slug: product.slug } }} className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <Image src={product.image} alt={name} fill className="object-cover" />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase text-[#201F20]">{name}</h3>
                      <p className="mt-1 font-[family-name:var(--font-body)] text-[14px] text-[#999]">
                        {l(product.shortDesc, locale)}
                      </p>
                      <span className="mt-3 inline-block font-[family-name:var(--font-heading)] text-[13px] uppercase tracking-[1px] text-[#A52430] opacity-0 transition-opacity group-hover:opacity-100">
                        {t("viewDetails")}
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Photo Break */}
        <section
          className="relative h-[250px] md:h-[400px] flex items-center justify-center"
          style={{ backgroundImage: "url('/images/sliderack/photos/herramientas-panel.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <h2 className="font-[family-name:var(--font-heading)] text-[24px] md:text-[36px] font-bold uppercase text-white text-center">
              {t("photoTitle")}
            </h2>
            <p className="mt-4 max-w-[600px] font-[family-name:var(--font-body)] text-[16px] text-white/70 text-center">
              {t("photoSubtitle")}
            </p>
          </div>
        </section>

        {/* Compatible Systems */}
        <section className="bg-[#f8f8f8] px-6 py-16">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20]">
                {t("compatibleTitle")}
              </h2>
              <Link href="/sistemas" className="font-[family-name:var(--font-body)] text-[15px] text-[#A52430] hover:underline">
                {t("relatedLink")}
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {systems.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 100} direction="up">
                  <Link href={{ pathname: "/sistemas/[slug]", params: { slug: p.slug } }} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                      <Image src={p.image} alt={p.name} fill className="object-cover" />
                    </div>
                    <div className="pt-4">
                      <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-semibold uppercase text-[#201F20]">
                        Sliderack {p.name}
                      </h3>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="border-t border-gray-100 bg-white px-6 py-20">
          <div className="mx-auto grid max-w-[900px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase leading-[1.15] text-[#201F20]">
                {t("ctaTitle")}
              </h2>
              <p className="mt-4 font-[family-name:var(--font-body)] text-[16px] leading-[1.7] text-[#666]">
                {t("ctaBody")}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contacto" className="rounded-lg bg-[#A52430] px-10 py-4 text-center font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors">
                {t("ctaContact")}
              </Link>
              <a href="tel:+34985308980" className="rounded-lg border-2 border-gray-300 px-10 py-4 text-center font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition-colors">
                985 30 89 80
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
