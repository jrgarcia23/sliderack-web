"use client";

import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { number: "+50", label: "Años de experiencia" },
  { number: "+45", label: "Países de exportación" },
  { number: "46.600 m²", label: "Planta productiva" },
];

export default function TaglineSection() {
  return (
    <section className="bg-[#f8f8f8] py-16 border-y border-gray-200">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-center items-center gap-16 max-md:flex-col max-md:gap-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="contents">
            {/* Vertical divider (desktop only, not before first) */}
            {i > 0 && (
              <div className="w-px h-12 bg-gray-300 max-md:hidden" />
            )}

            <ScrollReveal delay={i * 150} direction="up">
              <div className="text-center">
                <div
                  className="text-[36px] lg:text-[48px] font-extrabold text-[#A52430] leading-none"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-[14px] text-[#666] uppercase tracking-[1px] mt-1"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {stat.label}
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
