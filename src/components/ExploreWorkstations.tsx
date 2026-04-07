"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Puesto de trabajo",
    image: "/images/sliderack/products/acc-puesto-trabajo.png",
    contain: false,
  },
  {
    name: "Panel perforado",
    image: "/images/sliderack/products/acc-panel-perforado.png",
    contain: false,
  },
  {
    name: "Kit cajón",
    image: "/images/sliderack/products/acc-kit-cajon.png",
    contain: true,
  },
  {
    name: "Cerradura",
    image: "/images/sliderack/photos/logo-cerradura.jpg",
    contain: false,
  },
  {
    name: "Kit balda",
    image: "/images/sliderack/products/acc-kit-balda.png",
    contain: true,
  },
];

export default function ExploreWorkstations() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] md:text-[34px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Accesorios que completan tu sistema
          </h2>
          <a
            href="/accesorios"
            className="whitespace-nowrap text-[15px] text-[#A52430] hover:underline"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Ver todos →
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 80} direction="up">
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-[#f5f5f5]">
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
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {product.name}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
