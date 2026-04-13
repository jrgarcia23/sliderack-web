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
    a: "El sistema incluye la estructura metálica, los armarios móviles deslizantes con guías de precisión y el manual de instalación. Los accesorios se adquieren por separado.",
  },
  {
    q: "¿Puedo ampliar la configuración en el futuro?",
    a: "Sí. El diseño modular permite incorporar armarios móviles y accesorios adicionales en cualquier momento sin modificar la estructura existente.",
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
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const accessories = getProductsByCategory("accesorios").slice(0, 4);
  const allImages = product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <main>
      {/* ── Lightbox ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Backdrop — only covers area around the image */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Lightbox container */}
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-[860px] w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute -top-3 -right-3 bg-[#201F20] text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#A52430] transition z-10"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src={allImages[activeImage]}
                alt={`${product.name} - vista ${activeImage + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Navigation arrows */}
            {allImages.length > 1 && (
              <div className="flex items-center justify-between mt-4">
                <button
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition"
                  onClick={() => setActiveImage((activeImage - 1 + allImages.length) % allImages.length)}
                  aria-label="Anterior"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-[family-name:var(--font-heading)] text-[13px] text-[#999]">
                  {activeImage + 1} / {allImages.length}
                </span>
                <button
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition"
                  onClick={() => setActiveImage((activeImage + 1) % allImages.length)}
                  aria-label="Siguiente"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Back link ── */}
      <div className="bg-white pt-6 px-6">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href={categoryPath}
            className="inline-flex items-center gap-2 text-[#A52430] hover:underline transition"
            style={{ fontFamily: "var(--font-body)", fontSize: 14 }}
          >
            ← Ver más {categoryLabel}
          </Link>
        </div>
      </div>

      {/* ── Product Section: Gallery + Info ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-10 lg:gap-14 items-start">
          {/* Left: Gallery — main image + thumbnails */}
          <div>
            {/* Main image — click to open lightbox */}
            <div
              className="bg-[#f5f5f5] rounded-2xl overflow-hidden aspect-[4/3] relative p-8 cursor-zoom-in"
              onClick={() => setLightboxOpen(true)}
            >
              <Image
                src={allImages[activeImage]}
                alt={product.name}
                fill
                className="object-contain"
              />
              {/* Zoom icon */}
              <div className="absolute bottom-4 right-4 bg-white/80 rounded-full p-2">
                <svg className="w-5 h-5 text-[#201F20]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {/* Thumbnails row */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-3">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`bg-[#f5f5f5] rounded-xl overflow-hidden aspect-square relative p-3 transition ${
                      activeImage === i
                        ? "ring-2 ring-[#A52430]"
                        : "hover:ring-2 hover:ring-gray-300"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} - vista ${i + 1}`} fill className="object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info — compact */}
          <ScrollReveal direction="right">
            <div>
              <p
                className="mb-2 text-[#A52430] uppercase tracking-[2px]"
                style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
              >
                {product.badge}
              </p>
              <h1
                className="mb-4 text-[#201F20] uppercase"
                style={{ fontFamily: "var(--font-heading)", fontSize: 45, fontWeight: 700, lineHeight: 1.1 }}
              >
                {product.name}
              </h1>

              <p
                className="mb-6 text-[#555]"
                style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7 }}
              >
                {product.description}
              </p>

              {/* Quick dimensions — 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 mb-6 bg-[#f8f8f8] rounded-xl p-4">
                {product.specs.slice(0, 4).map((s, i) => (
                  <div key={i}>
                    <p className="text-[#999] mb-0.5" style={{ fontFamily: "var(--font-body)", fontSize: 11 }}>{s.label}</p>
                    <p className="text-[#201F20]" style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700 }}>{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Features compact */}
              <ul className="flex flex-col gap-2 mb-6">
                {product.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-[#555]" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA buttons — side by side */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={`/contacto?modelo=${product.slug}`}
                  className="bg-[#A52430] text-white text-center px-4 py-3.5 rounded-lg hover:bg-[#8a1e28] transition-colors uppercase tracking-[1px]"
                  style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700 }}
                >
                  Solicitar información
                </Link>
                <Link
                  href={`/contacto?modelo=${product.slug}`}
                  className="border-2 border-[#A52430] text-[#A52430] text-center px-4 py-3.5 rounded-lg hover:bg-[#A52430] hover:text-white transition-colors uppercase tracking-[1px]"
                  style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700 }}
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
            style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700 }}
          >
            Ficha técnica
          </h2>
          <p
            className="text-[#999] mb-8"
            style={{ fontFamily: "var(--font-body)", fontSize: 15 }}
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
                  style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
                >
                  Dimensiones
                </p>
                <div className="bg-white rounded-xl overflow-hidden">
                  {product.specs.map((s, i) => (
                    <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.specs.length - 1 ? "border-b border-gray-100" : ""}`}>
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{s.label}</span>
                      <span className="text-[#201F20]" style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
                    </div>
                  ))}
                  {product.finish && (
                    <div className="flex justify-between px-5 py-3.5 border-t border-gray-100">
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>Acabado</span>
                      <span className="text-[#201F20]" style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600 }}>{product.finish}</span>
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
                      style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
                    >
                      Qué incluye
                    </p>
                    <div className="bg-white rounded-xl overflow-hidden mb-6">
                      {product.includes.map((s, i) => (
                        <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.includes!.length - 1 ? "border-b border-gray-100" : ""}`}>
                          <span className="text-[#999]" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{s.label}</span>
                          <span className="text-[#201F20]" style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {product.capacity && (
                  <>
                    <p
                      className="text-[#A52430] uppercase tracking-[2px] mb-4"
                      style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
                    >
                      Capacidad de carga
                    </p>
                    <div className="bg-white rounded-xl overflow-hidden">
                      {product.capacity.map((s, i) => (
                        <div key={i} className={`flex justify-between px-5 py-3.5 ${i < product.capacity!.length - 1 ? "border-b border-gray-100" : ""}`}>
                          <span className="text-[#999]" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{s.label}</span>
                          <span className="text-[#201F20]" style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 600 }}>{s.value}</span>
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
                style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
              >
                Fabricación y calidad
              </p>
              <h2
                className="text-[#201F20] uppercase mb-6"
                style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, lineHeight: 1.15 }}
              >
                Ingeniería española de precisión
              </h2>
              <p
                className="text-[#555] mb-5"
                style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8 }}
              >
                Cada armario móvil de este sistema está construido con acero laminado en frío y tratamiento anticorrosión, diseñado para soportar hasta 150 kg de carga con un deslizamiento suave y silencioso. Las guías de alta precisión están fabricadas para millones de ciclos de apertura y cierre sin degradación del rendimiento.
              </p>
              <p
                className="text-[#555]"
                style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.8 }}
              >
                Diseñado y fabricado íntegramente en España por Esnova Racks en su planta de 46.600 m² en Gijón (Asturias). Certificaciones ISO 9001 (calidad), ISO 14001 (medioambiente), ISO 45001 (seguridad laboral) y UNE EN 1090 (Marcado CE para estructuras metálicas).
              </p>
            </div>
          </ScrollReveal>

          {/* Right: Sectores */}
          <ScrollReveal direction="right">
            <div>
              <p
                className="text-[#A52430] uppercase tracking-[2px] mb-3"
                style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}
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
                        style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700 }}
                      >
                        {sector.title}
                      </h4>
                      <p className="text-[#666]" style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}>
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
                fontFamily: "var(--font-heading)",
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              La solución perfecta para tu espacio
            </h2>
            <p
              className="text-white/70"
              style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7 }}
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
                fontFamily: "var(--font-heading)",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              Accesorios para tu {product.name.split(" ").slice(0, 2).join(" ")}
            </h2>
            <Link
              href="/accesorios"
              className="text-[#A52430] hover:underline transition"
              style={{ fontFamily: "var(--font-body)", fontSize: 15 }}
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
                        fontFamily: "var(--font-heading)",
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
                      fontFamily: "var(--font-heading)",
                      fontSize: 16,
                      fontWeight: 700,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-[#999] mt-1"
                    style={{ fontFamily: "var(--font-body)", fontSize: 13 }}
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
              fontFamily: "var(--font-heading)",
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
                        fontFamily: "var(--font-heading)",
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
                        fontFamily: "var(--font-body)",
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
      <section className="bg-[#A52430] py-20 px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <ScrollReveal>
            <h2
              className="mb-4 text-white uppercase"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              ¿Necesitas ayuda para elegir?
            </h2>
            <p
              className="mb-8 text-white/80"
              style={{ fontFamily: "var(--font-body)", fontSize: 16 }}
            >
              Nuestro equipo técnico te asesora sin compromiso.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contacto"
                className="border-2 border-white bg-white text-[#A52430] px-10 py-4 rounded-lg hover:bg-transparent hover:text-white transition uppercase tracking-[1px]"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Contactar
              </Link>
              <a
                href="tel:+34985308980"
                className="border-2 border-white/40 text-white px-10 py-4 rounded-lg hover:border-white transition uppercase tracking-[1px]"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                985 30 89 80
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
