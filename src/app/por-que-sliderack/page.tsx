import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Por qu\u00e9 Elegir Sliderack",
  description:
    "Descubre por qu\u00e9 Sliderack es el sistema de almacenaje deslizante elegido por talleres, garajes premium y servicios de emergencia en toda Europa.",
};

const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Fabricaci\u00f3n espa\u00f1ola certificada",
    desc: "Dise\u00f1ado y fabricado en Espa\u00f1a por Esnova Racks, empresa con m\u00e1s de 50 a\u00f1os de experiencia. Certificaciones ISO 9001, ISO 14001, ISO 45001 y UNE EN 1090 (Marcado CE).",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Mecanismo deslizante de precisi\u00f3n",
    desc: "Gu\u00edas de alta precisi\u00f3n que permiten deslizar m\u00f3dulos de hasta 150 kg con un solo dedo. Movimiento suave, silencioso y sin esfuerzo, incluso a plena carga.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 01-2.25-2.25v-2.25z" />
      </svg>
    ),
    title: "Modular y configurable",
    desc: "Tres anchos (1825, 2700 y 3600 mm), dos profundidades (370 y 470 mm) y configuraciones de uno o dos niveles. Accesorios compatibles entre todos los modelos.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Aprovecha el 100% del espacio",
    desc: "El sistema deslizante elimina los pasillos fijos entre estanter\u00edas. Accede a cualquier m\u00f3dulo deslizando lateralmente. Mismo almacenaje en la mitad de espacio.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.22a.993.993 0 01-.534-.872V6.073a1 1 0 01.534-.872l5.58-3.22a1 1 0 01.96 0l5.58 3.22a1 1 0 01.534.872v5.005a1 1 0 01-.534.872l-5.58 3.22a1 1 0 01-.96 0z" />
      </svg>
    ),
    title: "Estructura de acero de alta resistencia",
    desc: "Estructura met\u00e1lica con tratamiento anticorrosi\u00f3n, dise\u00f1ada para soportar cargas pesadas en entornos industriales exigentes. Durabilidad garantizada.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Dise\u00f1o que cuida cada detalle",
    desc: "Acabados premium, tiradores ergon\u00f3micos en rojo caracter\u00edstico, paneles perforados opcionales y cierre con llave. Un sistema que se integra en cualquier entorno.",
  },
];

const sectors = [
  { name: "Talleres mec\u00e1nicos", desc: "Herramientas organizadas y accesibles" },
  { name: "Garajes premium", desc: "Almacenaje elegante y funcional" },
  { name: "Servicios de emergencia", desc: "Equipamiento siempre localizable" },
  { name: "Industria", desc: "Componentes y recambios en orden" },
  { name: "Centros log\u00edsticos", desc: "Optimizaci\u00f3n del espacio disponible" },
  { name: "Laboratorios", desc: "Precisi\u00f3n en el almacenaje de materiales" },
];

export default function PorQueSliderack() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[300px] md:h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/bg/vista-general.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[family-name:var(--font-rajdhani)] text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]">
              La diferencia
            </span>
            <h1 className="font-[family-name:var(--font-rajdhani)] text-[36px] md:text-[52px] font-bold uppercase text-white">
              Por qu&eacute; Sliderack
            </h1>
            <p className="mt-4 max-w-[550px] mx-auto font-[family-name:var(--font-heebo)] text-[17px] text-white/70">
              La fortaleza de la sencillez. Un sistema que combina ingenier&iacute;a de precisi&oacute;n con la robustez del acero espa&ntilde;ol.
            </p>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-rajdhani)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-4">
                6 razones para elegir Sliderack
              </h2>
              <p className="text-center max-w-[600px] mx-auto font-[family-name:var(--font-heebo)] text-[16px] text-[#888] mb-16">
                Cada detalle est&aacute; pensado para que tu espacio funcione mejor.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((r, i) => (
                <ScrollReveal key={r.title} delay={i * 80} direction="up">
                  <div className="group rounded-xl border border-gray-100 bg-white p-7 hover:border-[#A52430]/20 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="mb-4 text-[#A52430]">{r.icon}</div>
                    <h3 className="font-[family-name:var(--font-rajdhani)] text-[20px] font-bold uppercase text-[#201F20] mb-3">
                      {r.title}
                    </h3>
                    <p className="font-[family-name:var(--font-heebo)] text-[14px] leading-relaxed text-[#777]">
                      {r.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Photo break */}
        <section
          className="relative h-[300px] md:h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/photos/taller-completo.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-6">
            <h2 className="font-[family-name:var(--font-rajdhani)] text-[28px] md:text-[40px] font-bold uppercase text-white">
              Orden que se ve. Rendimiento que se nota.
            </h2>
          </div>
        </section>

        {/* Sectors */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-rajdhani)] text-[32px] font-bold uppercase text-[#201F20] mb-4">
                D&oacute;nde se usa Sliderack
              </h2>
              <p className="text-center max-w-[500px] mx-auto font-[family-name:var(--font-heebo)] text-[16px] text-[#888] mb-12">
                Soluciones adaptadas a cada sector profesional.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((s, i) => (
                <ScrollReveal key={s.name} delay={i * 60} direction="up">
                  <div className="rounded-xl bg-white border border-gray-100 p-6 h-full">
                    <h3 className="font-[family-name:var(--font-rajdhani)] text-[18px] font-bold uppercase text-[#201F20]">
                      {s.name}
                    </h3>
                    <p className="mt-2 font-[family-name:var(--font-heebo)] text-[14px] text-[#999]">
                      {s.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#201F20] px-6 py-20">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="font-[family-name:var(--font-rajdhani)] text-[28px] md:text-[36px] font-bold uppercase text-white mb-4">
              &iquest;Listo para optimizar tu espacio?
            </h2>
            <p className="font-[family-name:var(--font-heebo)] text-[16px] text-white/60 mb-8">
              Solicita informaci&oacute;n sin compromiso. Nuestro equipo te asesorar&aacute; sobre la configuraci&oacute;n perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="rounded-lg bg-[#A52430] px-10 py-4 font-[family-name:var(--font-rajdhani)] text-[16px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
              >
                Solicitar informaci&oacute;n
              </Link>
              <Link
                href="/sistemas"
                className="rounded-lg border-2 border-white/20 px-10 py-4 font-[family-name:var(--font-rajdhani)] text-[16px] font-bold uppercase text-white hover:border-white/40 transition-colors"
              >
                Ver cat&aacute;logo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
