"use client";

import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    title: "Orden",
    description:
      "Cada elemento tiene su lugar, facilitando un acceso rápido y un entorno de trabajo más eficiente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1.5" fill="#A52430" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" fill="#A52430" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" fill="#A52430" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" fill="#A52430" />
      </svg>
    ),
  },
  {
    title: "Modularidad",
    description:
      "Un sistema flexible que se adapta al espacio y evoluciona según las necesidades de cada proyecto.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="10" rx="1.5" fill="#A52430" />
        <rect x="13" y="3" width="8" height="6" rx="1.5" fill="#A52430" />
        <rect x="13" y="11" width="8" height="10" rx="1.5" fill="#A52430" />
        <rect x="3" y="15" width="8" height="6" rx="1.5" fill="#A52430" />
      </svg>
    ),
  },
  {
    title: "Personalización",
    description:
      "Configurable con múltiples accesorios para responder a cada tipo de uso y material.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="2" height="16" rx="1" fill="#A52430" />
        <circle cx="5" cy="9" r="3" fill="#A52430" />
        <rect x="11" y="4" width="2" height="16" rx="1" fill="#A52430" />
        <circle cx="12" cy="15" r="3" fill="#A52430" />
        <rect x="18" y="4" width="2" height="16" rx="1" fill="#A52430" />
        <circle cx="19" cy="7" r="3" fill="#A52430" />
      </svg>
    ),
  },
  {
    title: "Alta precisión",
    description:
      "Movimiento suave y controlado gracias a un sistema deslizante de ingeniería avanzada.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#A52430" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="#A52430" strokeWidth="2" />
        <circle cx="12" cy="12" r="1.5" fill="#A52430" />
        <line x1="12" y1="1" x2="12" y2="5" stroke="#A52430" strokeWidth="2" />
        <line x1="12" y1="19" x2="12" y2="23" stroke="#A52430" strokeWidth="2" />
        <line x1="1" y1="12" x2="5" y2="12" stroke="#A52430" strokeWidth="2" />
        <line x1="19" y1="12" x2="23" y2="12" stroke="#A52430" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function WhoUsesLevrack() {
  return (
    <section className="bg-[#f8f8f8] py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="mb-3 text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            VENTAJAS DEL SISTEMA
          </p>
          <h2
            className="mx-auto max-w-[700px] text-[28px] font-bold uppercase text-[#201F20] md:text-[34px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Orden, seguridad y estética en un mismo sistema
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 100} direction="up">
              <div className="rounded-2xl bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg h-full">
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#A52430]/10">
                  {feature.icon}
                </div>
                {/* Title */}
                <h4
                  className="mb-3 text-[18px] font-bold uppercase text-[#201F20]"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {feature.title}
                </h4>
                {/* Description */}
                <p
                  className="text-[14px] leading-[1.7] text-[#666]"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
