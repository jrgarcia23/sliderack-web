"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Sliderack 1-1837",
    slug: "sliderack-1-1837",
    image: "/images/sliderack/products/sr-1825-370.webp",
    dims: { es: "2090 × 1160 mm · 3 armarios móviles", en: "2090 × 1160 mm · 3 mobile bays" },
  },
  {
    name: "Sliderack 1-2737",
    slug: "sliderack-1-2737",
    image: "/images/sliderack/products/sr-2700-370.webp",
    dims: { es: "2965 × 1160 mm · 5 armarios móviles", en: "2965 × 1160 mm · 5 mobile bays" },
  },
  {
    name: "Sliderack 1-3637",
    slug: "sliderack-1-3637",
    image: "/images/sliderack/products/sr-3600-370.webp",
    dims: { es: "3865 × 1160 mm · 7 armarios móviles", en: "3865 × 1160 mm · 7 mobile bays" },
  },
  {
    name: "Sliderack 2-2737",
    slug: "sliderack-2-2737",
    image: "/images/sliderack/products/sr-2n-2700-370.webp",
    dims: { es: "2965 × 1160 mm · 5 armarios móviles", en: "2965 × 1160 mm · 5 mobile bays" },
  },
];

export default function ExploreLevrack() {
  const t = useTranslations("exploreModels");
  const locale = useLocale();

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-4">
          <h2
            className="text-[34px] font-bold uppercase text-[#201F20] max-md:text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h2>
          <Link
            href="/sistemas"
            className="text-[14px] text-[#A52430] transition hover:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => {
            const dims = locale === "en" ? product.dims.en : product.dims.es;
            return (
              <ScrollReveal key={product.name} delay={i * 100}>
                <Link href={{ pathname: "/sistemas/[slug]", params: { slug: product.slug } }} className="group block transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span
                        className="text-[13px] uppercase tracking-[0.5px] text-white"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {dims}
                      </span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <p
                      className="text-[22px] font-semibold uppercase text-[#201F20]"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {product.name}
                    </p>
                    <p
                      className="mt-1 text-[13px] text-[#999]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {dims}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
