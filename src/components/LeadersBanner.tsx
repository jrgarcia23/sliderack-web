import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { number: "4", label: "Certificaciones ISO" },
  { number: "46.600", label: "m² de planta" },
  { number: "+45", label: "Países" },
];

export default function LeadersBanner() {
  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left column — photo */}
        <ScrollReveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/images/sliderack/photos/esnova-fabrica.jpg"
              alt="Planta de fabricación de Esnova Racks — estanterías deslizantes Sliderack"
              fill
              className="object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Right column — content */}
        <ScrollReveal direction="right">
          <p
            className="mb-4 text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            SOBRE ESNOVA RACKS
          </p>

          <h2
            className="mb-6 text-[34px] font-bold uppercase leading-[1.15] text-[#201F20] max-md:text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Somos l&iacute;deres en la fabricaci&oacute;n de estanter&iacute;as
            industriales
          </h2>

          <p
            className="mb-8 text-[16px] leading-[1.7] text-[#666]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Con m&aacute;s de 50 a&ntilde;os de experiencia, Esnova Racks
            combina tecnolog&iacute;a de &uacute;ltima generaci&oacute;n con un
            equipo humano especializado.
          </p>

          {/* Mini stats */}
          <div className="flex gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-[28px] font-bold text-[#A52430]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-[12px] uppercase text-[#999]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/compania"
            className="mt-6 inline-block text-[15px] font-semibold uppercase tracking-[1px] text-[#A52430] transition hover:underline"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Conoce la compa&ntilde;&iacute;a &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
