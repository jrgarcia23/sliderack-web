"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "\u00bfQu\u00e9 medidas de Sliderack est\u00e1n disponibles?",
    answer:
      "Sliderack se ofrece en tres anchos principales: 1825 mm, 2700 mm y 3600 mm, con profundidades de 370 mm y 470 mm. Disponible en configuraciones de uno o dos niveles. La altura est\u00e1ndar es de 2255 mm y la profundidad de 1160 mm. Acabado en Negro Mate RAL-9005.",
  },
  {
    question: "\u00bfCu\u00e1nto peso soporta cada m\u00f3dulo deslizante?",
    answer:
      "Cada m\u00f3dulo deslizante est\u00e1 dise\u00f1ado para soportar hasta 150 kg de carga, y puede deslizarse con un solo dedo gracias al sistema de gu\u00edas de alta precisi\u00f3n.",
  },
  {
    question: "\u00bfCu\u00e1ntos m\u00f3dulos puede incorporar cada sistema?",
    answer:
      "Depende del ancho: el sistema de 1825 mm incluye 3 m\u00f3dulos deslizantes (9 baldas), el de 2700 mm incluye 5 m\u00f3dulos (15 baldas) y el de 3600 mm incluye 7 m\u00f3dulos (21 baldas). Los modelos de 2 niveles duplican la capacidad.",
  },
  {
    question: "\u00bfSliderack se adapta a garajes, talleres y espacios t\u00e9cnicos?",
    answer:
      "S\u00ed. Sliderack est\u00e1 dise\u00f1ado para talleres mec\u00e1nicos, garajes premium, servicios de emergencia, laboratorios, centros log\u00edsticos y cualquier entorno profesional que requiera almacenaje organizado y accesible.",
  },
  {
    question: "\u00bfQu\u00e9 accesorios est\u00e1n disponibles?",
    answer:
      "Puestos de trabajo con mesa integrada, paneles perforados para herramientas, kit de cajones divisorios, cerraduras con llave, baldas adicionales ajustables en altura, m\u00f3dulos de ampliaci\u00f3n y kit de perchero para EPIs y uniformes.",
  },
  {
    question: "\u00bfEs posible ampliar la configuraci\u00f3n en el futuro?",
    answer:
      "S\u00ed. El dise\u00f1o modular permite incorporar m\u00f3dulos y accesorios adicionales en cualquier momento. Todos los accesorios son compatibles entre s\u00ed y con cualquier modelo del sistema.",
  },
  {
    question: "\u00bfQu\u00e9 certificaciones tiene Sliderack?",
    answer:
      "Sliderack est\u00e1 fabricado por Esnova Racks, empresa certificada con ISO 9001 (calidad), ISO 14001 (medioambiente), ISO 45001 (seguridad laboral) y UNE EN 1090 (Marcado CE para estructuras met\u00e1licas).",
  },
  {
    question: "\u00bfD\u00f3nde se fabrica Sliderack?",
    answer:
      "Sliderack se dise\u00f1a y fabrica \u00edntegramente en Espa\u00f1a, en la planta de producci\u00f3n de Esnova Racks en Gij\u00f3n (Asturias), con 46.600 m\u00b2 de instalaciones y tecnolog\u00eda de \u00faltima generaci\u00f3n.",
  },
  {
    question: "\u00bfC\u00f3mo solicito informaci\u00f3n o presupuesto?",
    answer:
      "Puedes rellenar el formulario de contacto en nuestra web o llamarnos al 985 30 89 80. Nuestro equipo t\u00e9cnico te asesorar\u00e1 sin compromiso y te responder\u00e1 en 24-48 horas.",
  },
  {
    question: "\u00bfSliderack necesita mantenimiento?",
    answer:
      "El sistema est\u00e1 dise\u00f1ado para un uso intensivo con m\u00ednimo mantenimiento. La estructura de acero con tratamiento anticorrosi\u00f3n y las gu\u00edas de precisi\u00f3n garantizan durabilidad a largo plazo sin intervenciones frecuentes.",
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
