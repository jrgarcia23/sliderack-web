import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HeroSection() {
  const t = useTranslations("hero");
  const headlineLines = t("headline").split("\n");

  return (
    <section className="relative w-full min-h-[85vh] max-md:min-h-[60vh] flex items-center">
      <Image
        src="/images/sliderack/bg/hero-garaje-premium.jpg"
        alt="Sliderack sliding shelving system installed in a premium garage"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/15" />
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-8 lg:px-16 py-20">
        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {(["badge_origin", "badge_experience", "badge_iso"] as const).map((key) => (
            <span
              key={key}
              className="rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[1px]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "rgba(255,255,255,0.9)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              {t(key)}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1
          className="text-[44px] lg:text-[68px] xl:text-[80px] font-bold uppercase text-white mb-6 max-w-[700px]"
          style={{ fontFamily: "var(--font-heading)", lineHeight: 0.95 }}
        >
          {headlineLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < headlineLines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className="text-[18px] max-w-[480px] mb-10"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}
        >
          {t("subtitle")}
        </p>

        {/* CTA */}
        <Link
          href="/sistemas"
          className="inline-block rounded bg-[#A52430] px-8 py-4 text-[16px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#8a1e28]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
