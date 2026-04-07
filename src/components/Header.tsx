"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, Search } from "lucide-react";

const sistemasMenu = {
  columns: [
    {
      title: "1 Nivel · Prof. 370",
      items: [
        { name: "Sliderack 1825 × 370", href: "/sistemas/sliderack-1825-370" },
        { name: "Sliderack 2700 × 370", href: "/sistemas/sliderack-2700-370" },
        { name: "Sliderack 3600 × 370", href: "/sistemas/sliderack-3600-370" },
      ],
    },
    {
      title: "1 Nivel · Prof. 470",
      items: [
        { name: "Sliderack 1825 × 470", href: "/sistemas/sliderack-1825-470" },
        { name: "Sliderack 2700 × 470", href: "/sistemas/sliderack-2700-470" },
        { name: "Sliderack 3600 × 470", href: "/sistemas/sliderack-3600-470" },
      ],
    },
    {
      title: "2 Niveles · Prof. 370",
      items: [
        { name: "Sliderack 2N 1825 × 370", href: "/sistemas/sliderack-2n-1825-370" },
        { name: "Sliderack 2N 2700 × 370", href: "/sistemas/sliderack-2n-2700-370" },
        { name: "Sliderack 2N 3600 × 370", href: "/sistemas/sliderack-2n-3600-370" },
      ],
    },
    {
      title: "2 Niveles · Prof. 470",
      items: [
        { name: "Sliderack 2N 1825 × 470", href: "/sistemas/sliderack-2n-1825-470" },
        { name: "Sliderack 2N 2700 × 470", href: "/sistemas/sliderack-2n-2700-470" },
        { name: "Sliderack 2N 3600 × 470", href: "/sistemas/sliderack-2n-3600-470" },
      ],
    },
  ],
};

const accesoriosMenu = [
  { name: "Puesto de Trabajo", desc: "Mesa de trabajo integrada con panel perforado", href: "/accesorios/puesto-trabajo", img: "/images/sliderack/products/acc-puesto-trabajo.webp" },
  { name: "Panel Perforado", desc: "Organización vertical de herramientas", href: "/accesorios/panel-perforado", img: "/images/sliderack/products/acc-panel-perforado.webp" },
  { name: "Cerradura", desc: "Seguridad con llave para módulos", href: "/accesorios/cerradura", img: "/images/sliderack/photos/logo-cerradura.jpg" },
  { name: "Kit Cajón", desc: "Cajones divisorios para piezas pequeñas", href: "/accesorios/kit-cajon", img: "/images/sliderack/products/acc-kit-cajon.webp" },
  { name: "Kit Balda", desc: "Baldas adicionales ajustables en altura", href: "/accesorios/kit-balda", img: "/images/sliderack/products/acc-kit-balda.webp" },
  { name: "Módulo Adicional", desc: "Amplía la capacidad de tu sistema", href: "/accesorios/modulo", img: "/images/sliderack/products/acc-sistema-riveto.webp" },
  { name: "Kit Perchero", desc: "Almacenaje de EPIs, uniformes y prendas", href: "/accesorios/kit-perchero", img: "/images/sliderack/products/acc-perchero.webp" },
];

const simpleLinks = [
  { label: "Por qué Sliderack", href: "/por-que-sliderack" },
  { label: "Compañía", href: "/compania" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<"sistemas" | "accesorios" | null>(null);

  return (
    <header className="w-full relative z-50">
      {/* ── Row 1: TopBar ── */}
      <div className="w-full bg-levrack-red">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-4 py-[11px]">
          <div className="flex items-center gap-4 font-rajdhani text-[14px] font-bold text-white">
            <Link href="tel:+34985308980" className="transition-opacity duration-300 hover:opacity-75">
              985 30 89 80
            </Link>
            <span className="opacity-60">|</span>
            <Link href="tel:+34985308980" className="transition-opacity duration-300 hover:opacity-75">
              985 30 89 80
            </Link>
          </div>
          <button className="text-white transition-opacity duration-300 hover:opacity-75" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ── Row 2: NavBar ── */}
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
                className={`flex items-center gap-1 px-4 py-6 font-rajdhani text-[14px] font-bold uppercase text-white transition-all duration-300 ${openMega === "sistemas" ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                Modelos
                <ChevronDown className={`h-3 w-3 opacity-70 transition-transform duration-200 ${openMega === "sistemas" ? "rotate-180" : ""}`} />
              </Link>

              {/* Mega dropdown — inside the same div so hover stays connected */}
              {openMega === "sistemas" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1200px] bg-white shadow-2xl border-t-2 border-[#A52430] rounded-b-xl z-50">
                  <div className="px-8 py-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-rajdhani text-[18px] font-bold uppercase text-[#201F20]">Sistemas de estanterías deslizantes</h3>
                      <Link href="/sistemas" className="font-heebo text-[13px] text-[#A52430] hover:underline" onClick={() => setOpenMega(null)}>Ver todos →</Link>
                    </div>
                    <div className="grid grid-cols-4 gap-8">
                      {sistemasMenu.columns.map((col) => (
                        <div key={col.title}>
                          <p className="font-rajdhani text-[11px] font-semibold uppercase tracking-[1.5px] text-[#A52430] mb-3 pb-2 border-b border-gray-200">{col.title}</p>
                          <ul className="flex flex-col gap-0.5">
                            {col.items.map((item) => (
                              <li key={item.href}>
                                <Link href={item.href} className="block py-2 px-3 rounded-lg font-heebo text-[14px] text-[#555] hover:bg-[#f8f8f8] hover:text-[#A52430] transition-colors" onClick={() => setOpenMega(null)}>{item.name}</Link>
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
                className={`flex items-center gap-1 px-4 py-6 font-rajdhani text-[14px] font-bold uppercase text-white transition-all duration-300 ${openMega === "accesorios" ? "bg-white/10" : "hover:bg-white/5"}`}
              >
                Accesorios
                <ChevronDown className={`h-3 w-3 opacity-70 transition-transform duration-200 ${openMega === "accesorios" ? "rotate-180" : ""}`} />
              </Link>

              {openMega === "accesorios" && (
                <div className="absolute top-full left-0 w-[380px] bg-white shadow-2xl border-t-2 border-[#A52430] rounded-b-xl z-50">
                  <div className="px-5 py-5">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                      {accesoriosMenu.map((item) => (
                        <Link key={item.href} href={item.href} className="block py-2 px-3 rounded-lg font-heebo text-[13px] text-[#555] hover:bg-[#f8f8f8] hover:text-[#A52430] transition-colors whitespace-nowrap" onClick={() => setOpenMega(null)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <Link href="/accesorios" className="block text-center font-rajdhani text-[13px] font-semibold text-[#A52430] uppercase tracking-[1px] hover:underline" onClick={() => setOpenMega(null)}>Ver todos los accesorios →</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Simple links */}
            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-4 py-6 font-rajdhani text-[14px] font-bold uppercase text-white transition-all duration-300 hover:bg-white/5"
                onMouseEnter={() => setOpenMega(null)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-white/10 px-4 pb-6 max-h-[80vh] overflow-y-auto">
            <div className="mx-auto max-w-[1200px] flex flex-col pt-2">
              {/* Sistemas group */}
              <div className="border-b border-white/10 pb-3 mb-3">
                <Link href="/sistemas" className="block py-3 font-rajdhani text-[14px] font-bold uppercase text-white" onClick={() => setMobileOpen(false)}>
                  Modelos
                </Link>
                <div className="pl-4 flex flex-col gap-0.5">
                  {sistemasMenu.columns.map((col) => (
                    <div key={col.title} className="mb-2">
                      <p className="font-rajdhani text-[11px] font-semibold uppercase tracking-[1px] text-[#A52430] mb-1">{col.title}</p>
                      {col.items.map((item) => (
                        <Link key={item.href} href={item.href} className="block py-1.5 font-heebo text-[13px] text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accesorios group */}
              <div className="border-b border-white/10 pb-3 mb-3">
                <Link href="/accesorios" className="block py-3 font-rajdhani text-[14px] font-bold uppercase text-white" onClick={() => setMobileOpen(false)}>
                  Accesorios
                </Link>
                <div className="pl-4 flex flex-col gap-0.5">
                  {accesoriosMenu.map((item) => (
                    <Link key={item.href} href={item.href} className="block py-1.5 font-heebo text-[13px] text-white/70 hover:text-white" onClick={() => setMobileOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Simple links */}
              {simpleLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block py-3 font-rajdhani text-[14px] font-bold uppercase text-white" onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
