import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  const navLinks = [
    { key: "models", href: "/sistemas" as const },
    { key: "accessories", href: "/accesorios" as const },
    { key: "whySliderack", href: "/por-que-sliderack" as const },
    { key: "company", href: "/compania" as const },
    { key: "contact", href: "/contacto" as const },
  ];

  const legalLinks = [
    { key: "legal", href: "/aviso-legal" as const },
    { key: "privacy", href: "/politica-de-privacidad" as const },
    { key: "cookies", href: "/politica-de-cookies" as const },
  ];

  return (
    <footer className="w-full">
      {/* CTA Bar */}
      {!hideCta && (
        <div className="bg-[#A52430] px-6 py-5">
          <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-[family-name:var(--font-heading)] text-[18px] md:text-[20px] font-bold uppercase text-white">
              {t("ctaTitle")}
            </p>
            <div className="flex gap-3">
              <Link
                href="/contacto"
                className="rounded-lg border-2 border-white px-6 py-2.5 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white hover:bg-white hover:text-[#A52430] transition-colors"
              >
                {t("ctaButton")}
              </Link>
              <a
                href="tel:+34985308980"
                className="rounded-lg border-2 border-white/30 px-6 py-2.5 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white hover:border-white transition-colors"
              >
                985 30 89 80
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <div className="bg-[#201F20] px-6 py-10">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Logo + description */}
          <div>
            <Image
              src="/images/sliderack/logo.webp"
              alt="Sliderack"
              width={180}
              height={45}
              className="mb-4"
            />
            <p
              className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed max-w-[350px]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {t("description")}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white mb-4 tracking-[1px]">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-[14px] hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {tn(link.key as "models" | "accessories" | "whySliderack" | "company" | "contact")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white mb-4 tracking-[1px]">
              {t("contact")}
            </h3>
            <div
              className="font-[family-name:var(--font-body)] text-[14px] space-y-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <p>
                <a
                  href="tel:+34985308980"
                  className="text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  985 30 89 80
                </a>
              </p>
              <p>{t("schedule")}</p>
              <p>{t("location")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#201F20] border-t border-white/10 px-6 py-5">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-[family-name:var(--font-body)] text-[13px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {t("copyright")}
          </span>
          <div className="flex flex-wrap items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[12px] hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {t(link.key as "legal" | "privacy" | "cookies")}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
