"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  { key: "puesto" as const, slug: "puesto-trabajo", image: "/images/sliderack/products/acc-puesto-trabajo.webp" },
  { key: "panel" as const, slug: "panel-perforado", image: "/images/sliderack/products/acc-panel-perforado.webp" },
  { key: "cajones" as const, slug: "kit-5-cajones", image: "/images/sliderack/products/acc-kit-cajon-detalle.webp" },
  { key: "cerradura" as const, slug: "cerradura", image: "/images/sliderack/photos/logo-cerradura.jpg" },
  { key: "balda" as const, slug: "kit-balda", image: "/images/sliderack/products/acc-kit-balda.webp" },
];

export default function ExploreWorkstations() {
  const t = useTranslations("accessoriesSection");
  const tn = useTranslations("nav");

  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] md:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h2>
          <Link
            href="/accesorios"
            className="whitespace-nowrap text-[15px] text-[#A52430] hover:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 80} direction="up">
              <Link href={{ pathname: "/accesorios/[slug]", params: { slug: product.slug } }} className="group block overflow-hidden bg-[#f5f5f5]">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={tn(`acc_${product.key}`)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3">
                  <p
                    className="text-center text-[14px] font-semibold uppercase text-[#201F20]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {tn(`acc_${product.key}`)}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
