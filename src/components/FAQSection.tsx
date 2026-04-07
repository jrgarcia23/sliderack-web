"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "¿Qué medidas de Sliderack están disponibles?",
    answer:
      "Sliderack se ofrece en tres anchos principales: 1825 mm, 2700 mm y 3600 mm, con profundidades de 370 mm y 470 mm. Disponible en configuraciones de uno o dos niveles. La altura estándar es de 2255 mm y la profundidad de 1160 mm. Acabado en Negro Mate RAL-9005.",
  },
  {
    question: "¿Cuánto peso soporta cada módulo deslizante?",
    answer:
      "Cada módulo deslizante está diseñado para soportar hasta 150 kg de carga, y puede deslizarse con un solo dedo gracias al sistema de guías de alta precisión.",
  },
  {
    question: "¿Cuántos módulos puede incorporar cada sistema?",
    answer:
      "Depende del ancho: el sistema de 1825 mm incluye 3 módulos deslizantes (9 baldas), el de 2700 mm incluye 5 módulos (15 baldas) y el de 3600 mm incluye 7 módulos (21 baldas). Los modelos de 2 niveles duplican la capacidad.",
  },
  {
    question: "¿Sliderack se adapta a garajes, talleres y espacios técnicos?",
    answer:
      "Sí. Sliderack está diseñado para talleres mecánicos, garajes premium, servicios de emergencia, laboratorios, centros logísticos y cualquier entorno profesional que requiera almacenaje organizado y accesible.",
  },
  {
    question: "¿Qué accesorios están disponibles?",
    answer:
      "Puestos de trabajo con mesa integrada, paneles perforados para herramientas, kit de cajones divisorios, cerraduras con llave, baldas adicionales ajustables en altura, módulos de ampliación y kit de perchero para EPIs y uniformes.",
  },
  {
    question: "¿Es posible ampliar la configuración en el futuro?",
    answer:
      "Sí. El diseño modular permite incorporar módulos y accesorios adicionales en cualquier momento. Todos los accesorios son compatibles entre sí y con cualquier modelo del sistema.",
  },
  {
    question: "¿Qué certificaciones tiene Sliderack?",
    answer:
      "Sliderack está fabricado por Esnova Racks, empresa certificada con ISO 9001 (calidad), ISO 14001 (medioambiente), ISO 45001 (seguridad laboral) y UNE EN 1090 (Marcado CE para estructuras metálicas).",
  },
  {
    question: "¿Dónde se fabrica Sliderack?",
    answer:
      "Sliderack se diseña y fabrica íntegramente en España, en la planta de producción de Esnova Racks en Gijón (Asturias), con 46.600 m² de instalaciones y tecnología de última generación.",
  },
  {
    question: "¿Cómo solicito información o presupuesto?",
    answer:
      "Puedes rellenar el formulario de contacto en nuestra web o llamarnos al 985 30 89 80. Nuestro equipo técnico te asesorará sin compromiso y te responderá en 24-48 horas.",
  },
  {
    question: "¿Sliderack necesita mantenimiento?",
    answer:
      "El sistema está diseñado para un uso intensivo con mínimo mantenimiento. La estructura de acero con tratamiento anticorrosión y las guías de precisión garantizan durabilidad a largo plazo sin intervenciones frecuentes.",
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
