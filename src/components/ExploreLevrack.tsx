"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    name: "Sliderack 1825",
    slug: "sliderack-1825-370",
    image: "/images/sliderack/products/sr-1825-370.webp",
    badge: "1 Nivel",
    dims: "1825 × 370 mm",
  },
  {
    name: "Sliderack 2700",
    slug: "sliderack-2700-370",
    image: "/images/sliderack/products/sr-2700-370.webp",
    badge: "1 Nivel",
    dims: "2700 × 370 mm",
  },
  {
    name: "Sliderack 3600",
    slug: "sliderack-3600-370",
    image: "/images/sliderack/products/sr-3600-370.webp",
    badge: "1 Nivel",
    dims: "3600 × 370 mm",
  },
  {
    name: "Sliderack 2 Niveles",
    slug: "sliderack-2n-2700-370",
    image: "/images/sliderack/products/sr-2n-2700-370.webp",
    badge: "2 Niveles",
    dims: "2700 × 370 mm",
  },
];

export default function ExploreLevrack() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between max-md:flex-col max-md:items-start max-md:gap-4">
          <h2
            className="text-[34px] font-bold uppercase text-[#201F20] max-md:text-[28px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Modelos principales
          </h2>
          <Link
            href="/sistemas"
            className="text-[14px] text-[#A52430] transition hover:underline"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Ver cat&aacute;logo completo &rarr;
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={i * 100}>
              <Link href={`/sistemas/${product.slug}`} className="group block transition-all duration-300">
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden rounded-xl bg-[#f5f5f5] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                  {/* Badge */}
                  <span
                    className="absolute left-3 top-3 rounded bg-[#A52430] px-2.5 py-1 text-[11px] font-semibold uppercase text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {product.badge}
                  </span>
                  {/* Dimensions overlay on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className="text-[13px] uppercase tracking-[0.5px] text-white"
                      style={{ fontFamily: "var(--font-rajdhani)" }}
                    >
                      {product.dims}
                    </span>
                  </div>
                </div>

                {/* Text below image */}
                <div className="pt-4">
                  <p
                    className="text-[22px] font-semibold uppercase text-[#201F20]"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {product.name}
                  </p>
                  <p
                    className="mt-1 text-[13px] text-[#999]"
                    style={{ fontFamily: "var(--font-heebo)" }}
                  >
                    {product.dims}
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
