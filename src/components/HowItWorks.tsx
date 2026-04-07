"use client";

import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      className="w-full py-[115px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.61) 0%, rgba(176,176,176,0) 63%, rgba(255,255,255,0) 100%), url(/images/sliderack/bg/instalacion-taller.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 md:flex-row md:items-start">
        {/* Left column - Heading */}
        <div className="w-full md:w-1/2">
          <h2
            className="text-[36px] font-[700] uppercase leading-[55px] text-white md:text-[50px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Cómo funciona Sliderack
          </h2>
        </div>

        {/* Right column - Photo + text + CTA */}
        <div className="flex w-full flex-col items-start gap-6 md:w-1/2">
          <div className="relative h-[300px] w-full overflow-hidden rounded-[8px]">
            <Image
              src="/images/sliderack/bg/paneles-numerados.jpg"
              alt="Paneles numerados Sliderack"
              fill
              className="object-cover"
            />
          </div>
          <p
            className="text-[18px] leading-relaxed text-white"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Gracias a su estructura metálica y a sus armarios móviles que se
            deslizan sobre guías de alta precisión, Sliderack permite crear
            pasillos de acceso fluidos y seguros, sin necesidad de reconfigurar
            el sistema.
          </p>
          <a
            href="/contacto"
            className="inline-block rounded-[4px] bg-white text-[18px] font-[700] uppercase tracking-[2px] text-[#A52430] transition-opacity duration-300 hover:opacity-80"
            style={{
              fontFamily: "var(--font-rajdhani)",
              padding: "5.4px 18px",
            }}
          >
            Solicitar catálogo
          </a>
        </div>
      </div>
    </section>
  );
}
