"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Puesto de trabajo",
    slug: "puesto-trabajo",
    image: "/images/sliderack/products/acc-puesto-trabajo.webp",
    contain: false,
  },
  {
    name: "Panel perforado",
    slug: "panel-perforado",
    image: "/images/sliderack/products/acc-panel-perforado.webp",
    contain: false,
  },
  {
    name: "Kit 5 cajones",
    slug: "kit-5-cajones",
    image: "/images/sliderack/products/acc-kit-cajon.webp",
    contain: true,
  },
  {
    name: "Cerradura",
    slug: "cerradura",
    image: "/images/sliderack/photos/logo-cerradura.jpg",
    contain: false,
  },
  {
    name: "Kit balda",
    slug: "kit-balda",
    image: "/images/sliderack/products/acc-kit-balda.webp",
    contain: true,
  },
];

export default function ExploreWorkstations() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] md:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Accesorios que completan tu sistema
          </h2>
          <a
            href="/accesorios"
            className="whitespace-nowrap text-[15px] text-[#A52430] hover:underline"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ver todos →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 80} direction="up">
              <Link href={`/accesorios/${product.slug}`} className="group block overflow-hidden rounded-xl bg-[#f5f5f5]">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      product.contain ? "object-contain p-6" : "object-cover"
                    }`}
                  />
                </div>
                {/* Name */}
                <div className="px-4 py-3">
                  <p
                    className="text-center text-[14px] font-semibold uppercase text-[#201F20]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {product.name}
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
