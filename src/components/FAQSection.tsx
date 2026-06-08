"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    question: "¿Qué es Sliderack y en qué se diferencia de una estantería convencional?",
    answer:
      "Sliderack es un sistema de estanterías deslizantes fabricado en España por Esnova Racks. A diferencia de las estanterías convencionales, los armarios móviles de Sliderack se deslizan lateralmente sobre guías de alta precisión, eliminando los pasillos fijos entre estanterías. Esto permite almacenar el mismo volumen de herramientas, piezas o materiales en aproximadamente la mitad de espacio. Cada armario móvil soporta hasta 150 kg y puede moverse con un solo dedo.",
  },
  {
    question: "¿Qué medidas y configuraciones están disponibles?",
    answer:
      "Sliderack se ofrece en tres anchos (2090 mm, 2965 mm y 3865 mm) y con dos profundidades de armario móvil (370 mm y 470 mm). Cada modelo está disponible en configuración de uno o dos niveles. La altura estándar es de 2255 mm y la profundidad total de 1160 mm. El acabado es Negro Mate Texturizado RAL-9005. En total, hay 12 configuraciones de sistema que cubren desde talleres pequeños hasta instalaciones industriales de gran capacidad.",
  },
  {
    question: "¿Cuánto peso soporta cada armario móvil?",
    answer:
      "Cada armario móvil deslizante de Sliderack está diseñado para soportar hasta 150 kg de carga distribuida en sus baldas. A pesar de este peso, el mecanismo de guías de precisión permite deslizar el armario completo con un solo dedo, sin esfuerzo y sin ruido. La estructura de acero laminado en frío con tratamiento anticorrosión garantiza que esta capacidad se mantenga a lo largo del tiempo, incluso en entornos industriales de uso intensivo.",
  },
  {
    question: "¿Para qué tipo de espacios está diseñado Sliderack?",
    answer:
      "Sliderack está diseñado para cualquier entorno profesional que necesite almacenaje organizado y accesible: talleres mecánicos y de automoción, garajes premium y viviendas de alto standing, servicios de emergencia y parques de bomberos (para almacenar EPIs y equipamiento de intervención), centros logísticos, laboratorios y centros de investigación, e instalaciones industriales de mantenimiento técnico. El sistema se adapta tanto a espacios reducidos como a grandes superficies.",
  },
  {
    question: "¿Qué accesorios se pueden añadir al sistema?",
    answer:
      "Sliderack dispone de siete familias de accesorios compatibles con todos los modelos del sistema: puestos de trabajo con mesa integrada y panel perforado, paneles perforados independientes para organización vertical de herramientas, kits de 5 cajones divisorios para piezas pequeñas, cerraduras con llave para armarios móviles que requieran seguridad, kits de baldas adicionales ajustables en altura, armarios móviles adicionales para aumentar la capacidad, y kits de perchero para almacenaje de EPIs, uniformes y prendas de trabajo.",
  },
  {
    question: "¿Es posible ampliar o modificar la configuración en el futuro?",
    answer:
      "Sí. El diseño modular de Sliderack permite incorporar armarios móviles adicionales, accesorios o cambiar la distribución interna en cualquier momento, sin necesidad de modificar la estructura existente. Todos los accesorios son compatibles entre sí y con cualquier modelo del sistema, lo que permite que la inversión crezca con las necesidades del espacio.",
  },
  {
    question: "¿Qué certificaciones de calidad tiene Sliderack?",
    answer:
      "Sliderack está fabricado por Esnova Racks, empresa española con más de 50 años de experiencia certificada con ISO 9001 (gestión de calidad y mejora continua), ISO 14001 (gestión ambiental y uso responsable de recursos), ISO 45001 (seguridad y salud laboral) y UNE EN 1090 (Marcado CE para estructuras metálicas). Estas certificaciones garantizan que cada componente del sistema cumple los estándares europeos más exigentes en calidad, seguridad y sostenibilidad.",
  },
  {
    question: "¿Dónde se fabrica Sliderack?",
    answer:
      "Sliderack se diseña y fabrica íntegramente en España, en la planta de producción de Esnova Racks ubicada en Gijón (Asturias). La planta cuenta con 46.600 m² de instalaciones equipadas con tecnología de última generación. Todo el proceso — desde el diseño hasta el montaje final — se realiza en España con materiales europeos, lo que garantiza control total sobre la calidad del producto y tiempos de entrega competitivos.",
  },
  {
    question: "¿Cuánto espacio puedo ahorrar con estanterías deslizantes frente a estanterías fijas?",
    answer:
      "El sistema deslizante de Sliderack elimina los pasillos fijos entre estanterías. En una configuración típica con estanterías fijas, aproximadamente el 50% de la superficie se dedica a pasillos de acceso. Con Sliderack, solo se necesita un pasillo de acceso que se abre deslizando lateralmente los armarios móviles, lo que permite duplicar la capacidad de almacenaje en la misma superficie o liberar la mitad del espacio para otras funciones del taller o garaje.",
  },
  {
    question: "¿Sliderack necesita mantenimiento?",
    answer:
      "El sistema está diseñado para un uso intensivo diario con mínimo mantenimiento. La estructura de acero laminado en frío con tratamiento anticorrosión resiste entornos industriales exigentes. Las guías de precisión están fabricadas para millones de ciclos de apertura y cierre sin degradación. No requiere lubricación ni intervenciones periódicas. Basta con una limpieza ocasional de los raíles para mantener el rendimiento óptimo del sistema a largo plazo.",
  },
  {
    question: "¿Cómo puedo solicitar información o presupuesto?",
    answer:
      "Puedes solicitar información de dos formas: rellenando el formulario de contacto en nuestra web (recibirás respuesta de nuestro equipo técnico en 24-48 horas) o llamándonos directamente al 985 30 89 80 (lunes a viernes de 9:00 a 18:00). El asesoramiento es gratuito y sin compromiso. Nuestro equipo te ayudará a definir la configuración más adecuada para tu espacio.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f8f8f8] px-6 py-20">
      <div className="mx-auto max-w-[800px]">
        {/* Header */}
        <div className="mb-12 text-center">
          <span
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PREGUNTAS FRECUENTES
          </span>
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] sm:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
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
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span
                    className="text-[18px] font-semibold text-[#201F20]"
                    style={{ fontFamily: "var(--font-heading)" }}
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
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="border-t border-gray-100 px-6 pb-5 pt-4 text-[15px] leading-[1.7] text-[#666]"
                    style={{ fontFamily: "var(--font-body)" }}
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
