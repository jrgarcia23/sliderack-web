"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/navigation";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<"sistemas" | "accesorios" | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<"modelos" | "accesorios" | null>(null);

  const sistemasColumns = [
    {
      title: t("megaCol1"),
      img: "/images/sliderack/products/sr-1825-370.webp",
      items: [
        { name: "Sliderack 1-1837", slug: "sliderack-1-1837" },
        { name: "Sliderack 1-2737", slug: "sliderack-1-2737" },
        { name: "Sliderack 1-3637", slug: "sliderack-1-3637" },
      ],
    },
    {
      title: t("megaCol2"),
      img: "/images/sliderack/products/sr-1825-470.webp",
      items: [
        { name: "Sliderack 1-1847", slug: "sliderack-1-1847" },
        { name: "Sliderack 1-2747", slug: "sliderack-1-2747" },
        { name: "Sliderack 1-3647", slug: "sliderack-1-3647" },
      ],
    },
    {
      title: t("megaCol3"),
      img: "/images/sliderack/products/sr-2n-1825-370.webp",
      items: [
        { name: "Sliderack 2-1837", slug: "sliderack-2-1837" },
        { name: "Sliderack 2-2737", slug: "sliderack-2-2737" },
        { name: "Sliderack 2-3637", slug: "sliderack-2-3637" },
      ],
    },
    {
      title: t("megaCol4"),
      img: "/images/sliderack/products/sr-2n-1825-470.webp",
      items: [
        { name: "Sliderack 2-1847", slug: "sliderack-2-1847" },
        { name: "Sliderack 2-2747", slug: "sliderack-2-2747" },
        { name: "Sliderack 2-3647", slug: "sliderack-2-3647" },
      ],
    },
  ];

  const accesoriosItems = [
    { key: "puesto", slug: "puesto-trabajo", img: "/images/sliderack/products/acc-puesto-trabajo.webp" },
    { key: "panel", slug: "panel-perforado", img: "/images/sliderack/products/acc-panel-perforado.webp" },
    { key: "cerradura", slug: "cerradura", img: "/images/sliderack/photos/logo-cerradura.jpg" },
    { key: "cajones", slug: "kit-5-cajones", img: "/images/sliderack/products/acc-kit-cajon.webp" },
    { key: "balda", slug: "kit-balda", img: "/images/sliderack/products/acc-kit-balda.webp" },
    { key: "armario", slug: "armario-movil-adicional", img: "/images/sliderack/products/acc-sistema-riveto.webp" },
    { key: "perchero", slug: "kit-perchero", img: "/images/sliderack/products/acc-perchero.webp" },
  ] as const;

  const otherLocale = locale === "es" ? "en" : "es";

  return (
    <header className="w-full relative z-50">
      {/* ── NavBar ── */}
      <div className="w-full bg-black">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 h-[84px]">
          {/* Logo */}
          <Link href="/" className="relative shrink-0">
            <Image src="/images/sliderack/logo.webp" alt="Sliderack" width={220} height={52} className="h-auto w-[220px] object-contain" priority />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Sistemas */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMega("sistemas")}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href="/sistemas"
                className={`flex items-center gap-1 px-4 py-6 font-heading text-[17px] font-bold uppercase text-white transition-all duration-300 ${openMega === "sistemas" ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                {t("models")}
                <ChevronDown className={`h-3 w-3 opacity-70 transition-transform duration-200 ${openMega === "sistemas" ? "rotate-180" : ""}`} />
              </Link>

              {openMega === "sistemas" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[min(1200px,calc(100vw-2rem))] bg-white shadow-2xl border-t-2 border-[#A52430] rounded-b-xl z-50">
                  <div className="px-8 py-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-heading text-[18px] font-bold uppercase text-[#201F20]">{t("megaSistemas")}</h3>
                      <Link href="/sistemas" className="font-body text-[13px] text-[#A52430] hover:underline" onClick={() => setOpenMega(null)}>{t("megaViewAll")}</Link>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                      {sistemasColumns.map((col) => (
                        <div key={col.title}>
                          <div className="mb-3 rounded-lg bg-[#f8f8f8] p-3 flex items-center justify-center">
                            <Image src={col.img} alt={col.title} width={160} height={120} className="object-contain h-[100px] w-auto" />
                          </div>
                          <p className="font-heading text-[11px] font-semibold uppercase tracking-[1.5px] text-[#A52430] mb-3 pb-2 border-b border-gray-200">{col.title}</p>
                          <ul className="flex flex-col gap-0.5">
                            {col.items.map((item) => (
                              <li key={item.slug}>
                                <Link
                                  href={{ pathname: "/sistemas/[slug]", params: { slug: item.slug } }}
                                  className="block py-2 px-3 rounded-lg font-body text-[14px] text-[#555] hover:bg-[#f8f8f8] hover:text-[#A52430] transition-colors"
                                  onClick={() => setOpenMega(null)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accesorios */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMega("accesorios")}
              onMouseLeave={() => setOpenMega(null)}
            >
              <Link
                href="/accesorios"
                className={`flex items-center gap-1 px-4 py-6 font-heading text-[17px] font-bold uppercase text-white transition-all duration-300 ${openMega === "accesorios" ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                {t("accessories")}
                <ChevronDown className={`h-3 w-3 opacity-70 transition-transform duration-200 ${openMega === "accesorios" ? "rotate-180" : ""}`} />
              </Link>

              {openMega === "accesorios" && (
                <div className="absolute top-full left-0 w-[520px] bg-white shadow-2xl border-t-2 border-[#A52430] rounded-b-xl z-50">
                  <div className="px-5 py-5">
                    <div className="grid grid-cols-2 gap-3">
                      {accesoriosItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={{ pathname: "/accesorios/[slug]", params: { slug: item.slug } }}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[#f8f8f8] transition-colors group"
                          onClick={() => setOpenMega(null)}
                        >
                          <div className="w-[48px] h-[48px] shrink-0 rounded-md bg-[#f8f8f8] group-hover:bg-white flex items-center justify-center overflow-hidden">
                            <Image src={item.img} alt={t(`acc_${item.key}`)} width={44} height={44} className="object-contain" />
                          </div>
                          <div>
                            <p className="font-body text-[13px] font-semibold text-[#333] group-hover:text-[#A52430] transition-colors">{t(`acc_${item.key}`)}</p>
                            <p className="font-body text-[11px] text-[#999] leading-tight">{t(`acc_${item.key}_desc`)}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link href="/accesorios" className="block text-center font-heading text-[13px] font-semibold text-[#A52430] uppercase tracking-[1px] hover:underline" onClick={() => setOpenMega(null)}>
                        {t("viewAllAccessories")}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            {[
              { key: "whySliderack", href: "/por-que-sliderack" as const },
              { key: "company", href: "/compania" as const },
              { key: "contact", href: "/contacto" as const },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-6 font-heading text-[17px] font-bold uppercase text-white transition-all duration-300 hover:bg-white/5"
                onMouseEnter={() => setOpenMega(null)}
              >
                {t(link.key as "whySliderack" | "company" | "contact")}
              </Link>
            ))}

            {/* Language switcher */}
            <Link
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              href={{ pathname, params } as any}
              locale={otherLocale}
              className="ml-2 px-3 py-1.5 border border-white/30 rounded font-heading text-[12px] font-bold uppercase text-white/70 hover:text-white hover:border-white/60 transition-colors"
              onMouseEnter={() => setOpenMega(null)}
            >
              {otherLocale.toUpperCase()}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <nav
          className={`lg:hidden border-t border-white/10 px-4 overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? "max-h-[80vh] overflow-y-auto pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
        >
          <div className="mx-auto max-w-[1200px] flex flex-col pt-2">
            {/* Modelos accordion */}
            <div className="border-b border-white/10">
              <button
                className="flex w-full items-center justify-between py-3 font-heading text-[17px] font-bold uppercase text-white"
                onClick={() => setMobileAccordion(mobileAccordion === "modelos" ? null : "modelos")}
              >
                {t("models")}
                <ChevronRight className={`h-4 w-4 opacity-70 transition-transform duration-200 ${mobileAccordion === "modelos" ? "rotate-90" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordion === "modelos" ? "max-h-[600px] opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
                <Link href="/sistemas" className="block pl-4 py-1.5 font-body text-[13px] text-[#A52430] font-semibold" onClick={() => setMobileOpen(false)}>
                  {t("viewAllModels")}
                </Link>
                <div className="pl-4 flex flex-col gap-0.5">
                  {sistemasColumns.map((col) => (
                    <div key={col.title} className="mb-2">
                      <p className="font-heading text-[11px] font-semibold uppercase tracking-[1px] text-[#A52430] mb-1">{col.title}</p>
                      {col.items.map((item) => (
                        <Link
                          key={item.slug}
                          href={{ pathname: "/sistemas/[slug]", params: { slug: item.slug } }}
                          className="block py-1.5 font-body text-[13px] text-white/70 hover:text-white transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accesorios accordion */}
            <div className="border-b border-white/10">
              <button
                className="flex w-full items-center justify-between py-3 font-heading text-[17px] font-bold uppercase text-white"
                onClick={() => setMobileAccordion(mobileAccordion === "accesorios" ? null : "accesorios")}
              >
                {t("accessories")}
                <ChevronRight className={`h-4 w-4 opacity-70 transition-transform duration-200 ${mobileAccordion === "accesorios" ? "rotate-90" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileAccordion === "accesorios" ? "max-h-[400px] opacity-100 pb-3" : "max-h-0 opacity-0"}`}>
                <Link href="/accesorios" className="block pl-4 py-1.5 font-body text-[13px] text-[#A52430] font-semibold" onClick={() => setMobileOpen(false)}>
                  {t("viewAllAccessories")}
                </Link>
                <div className="pl-4 flex flex-col gap-0.5">
                  {accesoriosItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={{ pathname: "/accesorios/[slug]", params: { slug: item.slug } }}
                      className="block py-1.5 font-body text-[13px] text-white/70 hover:text-white transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t(`acc_${item.key}`)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple links */}
            {[
              { key: "whySliderack", href: "/por-que-sliderack" as const },
              { key: "company", href: "/compania" as const },
              { key: "contact", href: "/contacto" as const },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block py-3 font-heading text-[17px] font-bold uppercase text-white" onClick={() => setMobileOpen(false)}>
                {t(link.key as "whySliderack" | "company" | "contact")}
              </Link>
            ))}

            {/* Mobile lang switcher */}
            <div className="border-t border-white/10 pt-3 mt-1">
              <Link
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                href={{ pathname, params } as any}
                locale={otherLocale}
                className="block py-2 font-heading text-[13px] font-bold uppercase text-white/50 hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {otherLocale.toUpperCase()} — {otherLocale === "en" ? "English" : "Español"}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
