"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "¿Qué medidas de Sliderack están disponibles?",
    answer:
      "Sliderack se ofrece en tres anchos principales: 1825 mm, 2700 mm y 3600 mm, con profundidades de 370 mm y 470 mm. Disponible en configuraciones de uno o dos niveles.",
  },
  {
    question: "¿Cuántos módulos puede incorporar cada sistema?",
    answer:
      "El número de módulos depende del ancho del sistema. Consulta con nuestro equipo técnico para una configuración adaptada a tu espacio.",
  },
  {
    question: "¿Puedo elegir la configuración según el espacio disponible?",
    answer:
      "Sí. El sistema es modular y permite adaptarse a distintas dimensiones y necesidades de almacenaje.",
  },
  {
    question: "¿Sliderack se adapta a garajes, talleres y espacios técnicos?",
    answer:
      "Absolutamente. Sliderack está diseñado para entornos industriales, talleres, garajes de alto nivel y servicios técnicos.",
  },
  {
    question: "¿Es posible ampliar la configuración en el futuro?",
    answer:
      "Sí. El diseño modular permite incorporar módulos y accesorios adicionales en cualquier momento.",
  },
  {
    question: "¿Qué accesorios están disponibles para Sliderack?",
    answer:
      "Cajones, paneles perforados, puestos de trabajo, cerraduras, baldas adicionales, tiradores y colgadores.",
  },
  {
    question: "¿Se pueden incorporar cajones en cualquier módulo?",
    answer:
      "Sí. Los cajones son compatibles con todos los módulos del sistema Sliderack.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f8f8] px-6 py-24">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            PREGUNTAS FRECUENTES
          </span>
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] sm:text-[34px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Todo lo que debes saber sobre nuestro sistema
          </h2>
        </div>

        {/* FAQ items */}
        <div>
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="mb-3 overflow-hidden rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span
                    className="text-[18px] font-semibold text-[#201F20]"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-[#A52430] transition-transform duration-300"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {openIndex === index && (
                  <div
                    className="border-t border-gray-100 px-6 pb-5 pt-4 text-[15px] leading-[1.7] text-[#666]"
                    style={{ fontFamily: "var(--font-heebo)" }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
