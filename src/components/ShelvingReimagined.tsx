"use client";

import Image from "next/image";

export default function ShelvingReimagined() {
  return (
    <section className="w-full bg-white py-[100px]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 md:flex-row">
        {/* Left column - Image */}
        <div className="flex w-full justify-center md:w-1/2">
          <Image
            src="/images/sliderack/bg/detalle-paneles.jpg"
            alt="Detalle paneles Sliderack"
            width={400}
            height={400}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>

        {/* Right column - Copy */}
        <div className="flex w-full flex-col items-start gap-5 md:w-1/2">
          <h2
            className="text-[34px] font-[700] uppercase text-[#A52430]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Almacenaje de alta precisión
          </h2>
          <p
            className="text-[18px] leading-relaxed text-[#201F20]"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Un sistema flexible que se adapta al espacio y evoluciona según las
            necesidades de cada proyecto. Diseñado con ingeniería de alta
            precisión para un movimiento suave y controlado.
          </p>
          <a
            href="/por-que-sliderack"
            className="inline-block rounded-[4px] bg-[#A52430] text-[18px] font-[700] uppercase tracking-[2px] text-white transition-opacity duration-300 hover:opacity-80"
            style={{
              fontFamily: "var(--font-rajdhani)",
              padding: "5.4px 18px",
            }}
          >
            Por qué Sliderack
          </a>
        </div>
      </div>
    </section>
  );
}
