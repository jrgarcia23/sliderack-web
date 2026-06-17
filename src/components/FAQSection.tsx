"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQSection() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Array<{ q: string; a: string }>;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f8f8f8] px-6 py-20">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-12 text-center">
          <span
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("eyebrow")}
          </span>
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] sm:text-[34px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h2>
        </div>

        <div>
          {items.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="mb-3 overflow-hidden rounded-xl bg-white shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
                >
                  <span
                    className="text-[18px] font-semibold text-[#201F20]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.q}
                  </span>
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-[#A52430] transition-transform duration-300"
                    style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
                    {item.a}
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
