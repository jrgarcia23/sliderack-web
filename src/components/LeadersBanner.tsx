import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function LeadersBanner() {
  const t = useTranslations("leadersBanner");

  const stats = [
    { number: "4", labelKey: "stat_certs" as const },
    { number: "46.600", labelKey: "stat_sqm" as const },
    { number: "+45", labelKey: "stat_countries" as const },
  ];

  return (
    <section className="bg-[#f8f8f8] py-20 px-6">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left column — photo */}
        <ScrollReveal direction="left">
          <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
            <Image
              src="/images/sliderack/photos/esnova-fabrica.jpg"
              alt="Esnova Racks production facility — Sliderack sliding shelving systems"
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
            {t("eyebrow")}
          </p>

          <h2
            className="mb-6 text-[34px] font-bold uppercase leading-[1.15] text-[#201F20] max-md:text-[28px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h2>

          <p
            className="mb-8 text-[16px] leading-[1.7] text-[#666]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("body")}
          </p>

          {/* Mini stats */}
          <div className="flex gap-8">
            {stats.map((stat) => (
              <div key={stat.labelKey}>
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
                  {t(stat.labelKey)}
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
            {t("cta")}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
