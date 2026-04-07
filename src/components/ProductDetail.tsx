"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Product, getProductsByCategory } from "@/data/products";

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-[#A52430] flex-shrink-0 mt-0.5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-[#A52430] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const faqItems = [
  {
    q: "¿Qué incluye el sistema?",
    a: "El sistema incluye la estructura metálica, los módulos deslizantes con guías de precisión y el manual de instalación. Los accesorios se adquieren por separado.",
  },
  {
    q: "¿Puedo ampliar la configuración en el futuro?",
    a: "Sí. El diseño modular permite incorporar módulos y accesorios adicionales en cualquier momento sin modificar la estructura existente.",
  },
  {
    q: "¿Se adapta a garajes, talleres y espacios técnicos?",
    a: "Absolutamente. Sliderack está diseñado para entornos industriales, talleres, garajes de alto nivel y servicios técnicos.",
  },
  {
    q: "¿Ofrecen servicio de instalación?",
    a: "Consulta con nuestro equipo técnico. Podemos asesorarte sobre la instalación o recomendarte un instalador en tu zona.",
  },
  {
    q: "¿Cuál es el plazo de entrega?",
    a: "Los plazos varían según el modelo y la configuración. Contacta con nosotros para obtener una estimación personalizada.",
  },
];

interface ProductDetailProps {
  product: Product;
  categoryLabel: string;
  categoryPath: string;
}

export default function ProductDetail({
  product,
  categoryLabel,
  categoryPath,
}: ProductDetailProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const accessories = getProductsByCategory("accesorios").slice(0, 4);

  return (
    <main>
      {/* ── Back link (like Levrack) ── */}
      <div className="bg-white pt-6 px-6">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href={categoryPath}
            className="inline-flex items-center gap-2 text-[#A52430] hover:underline transition"
            style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}
          >
            ← Ver más {categoryLabel}
          </Link>
        </div>
      </div>

      {/* ── Product Section: Gallery + Info ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-10 lg:gap-14">
          {/* Left: Gallery — large image + 2 thumbnails */}
          <div>
            <div className="bg-[#f5f5f5] rounded-2xl overflow-hidden aspect-[4/3] relative p-8">
              <Image
                src={product.gallery[0] || product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
              {product.badge && (
                <span
                  className="absolute top-4 left-4 bg-[#A52430] text-white px-3 py-1.5 rounded uppercase"
                  style={{
                    fontFamily: "var(--font-rajdhani)",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>
            {/* Thumbnail row: vistas 2-4 */}
            {product.gallery.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {product.gallery.slice(1).map((img, i) => (
                  <div key={i} className="bg-[#f5f5f5] rounded-xl overflow-hidden aspect-square relative p-3 cursor-pointer hover:ring-2 hover:ring-[#A52430] transition">
                    <Image src={img} alt={`${product.name} - vista ${i + 2}`} fill className="object-contain" />
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right: Product Info — compact */}
          <ScrollReveal direction="right">
            <div>
              <p
                className="mb-2 text-[#A52430] uppercase tracking-[2px]"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
              >
                {product.badge}
              </p>
              <h1
                className="mb-4 text-[#201F20] uppercase"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: 45, fontWeight: 700, lineHeight: 1.1 }}
              >
                {product.name}
              </h1>

              <p
                className="mb-6 text-[#555]"
                style={{ fontFamily: "var(--font-heebo)", fontSize: 16, lineHeight: 1.7 }}
              >
                {product.description}
              </p>

              {/* Quick dimensions — 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-[#f8f8f8] rounded-xl p-4">
                {product.specs.slice(0, 4).map((s, i) => (
                  <div key={i}>
                    <p className="text-[#999] mb-0.5" style={{ fontFamily: "var(--font-heebo)", fontSize: 11 }}>{s.label}</p>
                    <p className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontSize: 16, fontWeight: 700 }}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Features compact */}
              <ul className="flex flex-col gap-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-[#555]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Finish badge */}
              {product.finish && (
                <p className="mb-6 text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 13 }}>
                  <span className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontWeight: 600, textTransform: "uppercase" as const, fontSize: 12, letterSpacing: "1px" }}>Acabado: </span>
                  {product.finish}
                </p>
              )}

              {/* CTA buttons — side by side */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <Link
                  href={`/contacto?modelo=${product.slug}`}
                  className="bg-[#A52430] text-white text-center px-4 py-3.5 rounded-lg hover:bg-[#8a1e28] transition-colors uppercase tracking-[1px]"
                  style={{ fontFamily: "var(--font-rajdhani)", fontSize: 14, fontWeight: 700 }}
                >
                  Solicitar información
                </Link>
                <Link
                  href={`/contacto?modelo=${product.slug}`}
                  className="border-2 border-[#A52430] text-[#A52430] text-center px-4 py-3.5 rounded-lg hover:bg-[#A52430] hover:text-white transition-colors uppercase tracking-[1px]"
                  style={{ fontFamily: "var(--font-rajdhani)", fontSize: 14, fontWeight: 700 }}
                >
                  Descargar catálogo
                </Link>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Ficha técnica: Dimensiones (izq) + Qué incluye (der) ── */}
      <section className="bg-[#f8f8f8] py-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="text-[#201F20] uppercase mb-2"
            style={{ fontFamily: "var(--font-rajdhani)", fontSize: 28, fontWeight: 700 }}
          >
            Ficha técnica
          </h2>
          <p
            className="text-[#999] mb-8"
            style={{ fontFamily: "var(--font-heebo)", fontSize: 15 }}
          >
            Especificaciones detalladas del modelo {product.name}.
          </p>

          {/* Top row: Dimensiones left + Qué incluye right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-0">
            {/* Left: Dimensiones */}
            <ScrollReveal direction="left">
              <div>
                <p
                  className="text-[#A52430] uppercase tracking-[2px] mb-4"
                  style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
                >
                  Dimensiones
                </p>
                <div className="bg-white rounded-xl overflow-hidden">
                  {product.specs.map((s, i) => (
                    <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.specs.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}>{s.label}</span>
                      <span className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
                    </div>
                  ))}
                  {product.finish && (
                    <div className="flex justify-between px-5 py-3.5 border-t border-gray-100">
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}>Acabado</span>
                      <span className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontSize: 15, fontWeight: 600 }}>{product.finish}</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Qué incluye + Capacidad */}
            <ScrollReveal direction="right">
              <div>
                {product.includes && (
                  <>
                    <p
                      className="text-[#A52430] uppercase tracking-[2px] mb-4"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
                    >
                      Qué incluye
                    </p>
                    <div className="bg-white rounded-xl overflow-hidden mb-6">
                      {product.includes.map((s, i) => (
                        <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.includes!.length - 1 ? "border-b border-gray-100" : ""}`}>
                          <span className="text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}>{s.label}</span>
                          <span className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {product.capacity && (
                  <>
                    <p
                      className="text-[#A52430] uppercase tracking-[2px] mb-4"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
                    >
                      Capacidad de carga
                    </p>
                    <div className="bg-white rounded-xl overflow-hidden">
                      {product.capacity.map((s, i) => (
                        <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.capacity!.length - 1 ? "border-b border-gray-100" : ""}`}>
                          <span className="text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14 }}>{s.label}</span>
                          <span className="text-[#201F20]" style={{ fontFamily: "var(--font-rajdhani)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* ── Descripción SEO + Sectores ── */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Texto descriptivo largo (SEO) */}
          <ScrollReveal direction="left">
            <div>
              <p
                className="text-[#A52430] uppercase tracking-[2px] mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
              >
                Sobre este modelo
              </p>
              <h2
                className="text-[#201F20] uppercase mb-6"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: 28, fontWeight: 700, lineHeight: 1.15 }}
              >
                {product.name}
              </h2>
              <p
                className="text-[#555] mb-5"
                style={{ fontFamily: "var(--font-heebo)", fontSize: 16, lineHeight: 1.8 }}
              >
                {product.description}
              </p>
              <p
                className="text-[#555] mb-5"
                style={{ fontFamily: "var(--font-heebo)", fontSize: 16, lineHeight: 1.8 }}
              >
                Su estructura metálica de acero laminado en frío garantiza estabilidad y resistencia en entornos de uso intensivo. El sistema deslizante proporciona un acceso cómodo y controlado a cada módulo, mientras que la modularidad permite adaptar la configuración según las necesidades específicas de cada proyecto.
              </p>
              <p
                className="text-[#555]"
                style={{ fontFamily: "var(--font-heebo)", fontSize: 16, lineHeight: 1.8 }}
              >
                Diseñado y fabricado en España por Esnova Racks, bajo certificaciones ISO 9001, ISO 14001 e ISO 45001. Cada sistema cumple con la normativa europea UNE EN 1090 de marcado CE, garantizando los más altos estándares de calidad y seguridad.
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Sectores */}
          <ScrollReveal direction="right">
            <div>
              <p
                className="text-[#A52430] uppercase tracking-[2px] mb-3"
                style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
              >
                Ideal para
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { title: "Talleres e industria", desc: "Organización de piezas, herramientas y componentes con acceso rápido y controlado. Almacenaje preciso para entornos de producción y mantenimiento técnico." },
                  { title: "Garajes premium y viviendas de alto standing", desc: "Estética cuidada y funcionalidad para espacios de alto nivel donde el orden es parte del diseño. Acceso rápido y organización impecable." },
                  { title: "Servicios de emergencia y organismos públicos", desc: "EPIs, uniformes y material operativo siempre visibles, protegidos y accesibles. Sistema seguro con cerradura opcional para materiales sensibles." },
                ].map((sector) => (
                  <div key={sector.title} className="bg-[#f8f8f8] rounded-xl p-5 flex gap-4 items-start">
                    <div className="w-2 h-2 bg-[#A52430] rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4
                        className="text-[#201F20] uppercase mb-1"
                        style={{ fontFamily: "var(--font-rajdhani)", fontSize: 16, fontWeight: 700 }}
                      >
                        {sector.title}
                      </h4>
                      <p className="text-[#666]" style={{ fontFamily: "var(--font-heebo)", fontSize: 14, lineHeight: 1.6 }}>
                        {sector.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Banner separator: "La solución perfecta" ── */}
      <section
        className="relative py-20 px-6"
        style={{
          backgroundImage: 'url("/images/sliderack/bg/instalacion-taller.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <h2
              className="text-white uppercase mb-4"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              La solución perfecta para tu espacio
            </h2>
            <p
              className="text-white/70"
              style={{ fontFamily: "var(--font-heebo)", fontSize: 16, lineHeight: 1.7 }}
            >
              Con distintas configuraciones de altura, profundidad y accesorios,
              Sliderack se adapta a cualquier entorno profesional. Desde talleres
              industriales hasta garajes premium.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Accesorios para tu Sliderack ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
            <h2
              className="text-[#201F20] uppercase"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Accesorios para tu {product.name.split(" ").slice(0, 2).join(" ")}
            </h2>
            <Link
              href="/accesorios"
              className="text-[#A52430] hover:underline transition"
              style={{ fontFamily: "var(--font-heebo)", fontSize: 15 }}
            >
              Ver todos los accesorios →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessories.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 100}>
                <Link href={`/accesorios/${p.slug}`} className="group block">
                  <div className="bg-[#f5f5f5] rounded-xl overflow-hidden aspect-[4/3] relative p-6 group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span
                      className="absolute top-3 left-3 bg-[#A52430] text-white px-2.5 py-1 rounded uppercase"
                      style={{
                        fontFamily: "var(--font-rajdhani)",
                        fontSize: 11,
                        fontWeight: 600,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <h3
                    className="mt-3 text-[#201F20] uppercase group-hover:text-[#A52430] transition-colors"
                    style={{
                      fontFamily: "var(--font-rajdhani)",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-[#999] mt-1"
                    style={{ fontFamily: "var(--font-heebo)", fontSize: 13 }}
                  >
                    {p.shortDesc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f8f8f8] py-16 px-6">
        <div className="max-w-[800px] mx-auto">
          <h2
            className="text-[#201F20] uppercase text-center mb-10"
            style={{
              fontFamily: "var(--font-rajdhani)",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            Preguntas frecuentes
          </h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-5 cursor-pointer hover:bg-gray-50 transition text-left"
                  >
                    <span
                      className="text-[#201F20]"
                      style={{
                        fontFamily: "var(--font-rajdhani)",
                        fontSize: 18,
                        fontWeight: 600,
                      }}
                    >
                      {item.q}
                    </span>
                    <ChevronIcon open={openFaq === i} />
                  </button>
                  {openFaq === i && (
                    <div
                      className="px-6 pb-5 border-t border-gray-100 pt-4 text-[#666]"
                      style={{
                        fontFamily: "var(--font-heebo)",
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
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

      {/* ── Contact CTA ── */}
      <section className="bg-white py-16 px-6 border-t border-gray-100">
        <div className="max-w-[800px] mx-auto text-center">
          <ScrollReveal>
            <h2
              className="mb-4 text-[#201F20] uppercase"
              style={{
                fontFamily: "var(--font-rajdhani)",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              ¿Necesitas ayuda para elegir?
            </h2>
            <p
              className="mb-8 text-[#666]"
              style={{ fontFamily: "var(--font-heebo)", fontSize: 16 }}
            >
              Nuestro equipo técnico te asesora sin compromiso.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contacto"
                className="bg-[#A52430] text-white px-10 py-4 rounded-lg hover:bg-[#8a1e28] transition uppercase tracking-[1px]"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Contactar
              </Link>
              <a
                href="tel:+34946003128"
                className="border-2 border-gray-300 text-[#201F20] px-10 py-4 rounded-lg hover:border-[#A52430] hover:text-[#A52430] transition uppercase tracking-[1px]"
                style={{
                  fontFamily: "var(--font-rajdhani)",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                946 00 31 28
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
