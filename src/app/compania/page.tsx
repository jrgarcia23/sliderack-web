import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sobre Esnova Racks \u2014 Fabricante Espa\u00f1ol",
  description:
    "Sliderack es una marca de Esnova Racks, empresa espa\u00f1ola con m\u00e1s de 50 a\u00f1os dise\u00f1ando y fabricando sistemas de almacenaje industrial.",
};

const milestones = [
  { year: "1969", text: "Fundaci\u00f3n de Esnova en Gij\u00f3n, Asturias" },
  { year: "1980s", text: "Expansi\u00f3n nacional en almacenaje industrial" },
  { year: "2000s", text: "Certificaciones ISO 9001, 14001 y 45001" },
  { year: "2010s", text: "Marcado CE (UNE EN 1090) y exportaci\u00f3n europea" },
  { year: "2024", text: "Lanzamiento de Sliderack: almacenaje deslizante de precisi\u00f3n" },
];

const certs = [
  {
    name: "ISO 9001",
    desc: "Gesti\u00f3n de calidad",
  },
  {
    name: "ISO 14001",
    desc: "Gesti\u00f3n ambiental",
  },
  {
    name: "ISO 45001",
    desc: "Seguridad y salud laboral",
  },
  {
    name: "UNE EN 1090",
    desc: "Marcado CE \u2014 Estructuras met\u00e1licas",
  },
];

const values = [
  {
    title: "Precisi\u00f3n",
    desc: "Cada componente fabricado con tolerancias m\u00ednimas. El mecanismo deslizante es el resultado de d\u00e9cadas de ingenier\u00eda aplicada.",
  },
  {
    title: "Robustez",
    desc: "Acero de alta resistencia con tratamiento anticorrosi\u00f3n. Nuestros sistemas est\u00e1n dise\u00f1ados para entornos industriales exigentes.",
  },
  {
    title: "Sencillez",
    desc: "La fortaleza de la sencillez. Un sistema intuitivo que no necesita formaci\u00f3n ni mantenimiento complejo.",
  },
];

export default function CompaniaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[300px] md:h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/bg/instalacion-taller.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-[family-name:var(--font-rajdhani)] text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]">
              Sobre nosotros
            </span>
            <h1 className="font-[family-name:var(--font-rajdhani)] text-[36px] md:text-[52px] font-bold uppercase text-white">
              Compa&ntilde;&iacute;a
            </h1>
            <p className="mt-4 max-w-[550px] mx-auto font-[family-name:var(--font-heebo)] text-[17px] text-white/70">
              M&aacute;s de 50 a&ntilde;os fabricando soluciones de almacenaje que funcionan.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-[family-name:var(--font-rajdhani)] text-[32px] md:text-[40px] font-bold uppercase leading-[1.1] text-[#201F20] mb-6">
                  Esnova Racks: ingenier&iacute;a espa&ntilde;ola desde 1969
                </h2>
                <p className="font-[family-name:var(--font-heebo)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Esnova Racks naci&oacute; en Gij&oacute;n (Asturias) con una misi&oacute;n clara: dise&ntilde;ar y fabricar sistemas de almacenaje que resuelvan problemas reales en entornos industriales.
                </p>
                <p className="font-[family-name:var(--font-heebo)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Tras m&aacute;s de cinco d&eacute;cadas de experiencia, hemos canalizado toda esa ingenier&iacute;a en <strong className="text-[#201F20]">Sliderack</strong>: un sistema de almacenaje deslizante que combina la robustez del acero con la precisi&oacute;n de un mecanismo que funciona con un solo dedo.
                </p>
                <p className="font-[family-name:var(--font-heebo)] text-[16px] leading-relaxed text-[#666]">
                  Todo nuestro proceso &mdash; desde el dise&ntilde;o hasta el montaje final &mdash; se realiza en Espa&ntilde;a, con materiales europeos y bajo los est&aacute;ndares de calidad m&aacute;s exigentes del sector.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sliderack/photos/taller-completo.jpg"
                  alt="Instalaci\u00f3n Sliderack en taller"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-rajdhani)] text-[32px] font-bold uppercase text-[#201F20] mb-12">
                Nuestros valores
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 100} direction="up">
                  <div className="text-center">
                    <h3 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#A52430] mb-3">
                      {v.title}
                    </h3>
                    <p className="font-[family-name:var(--font-heebo)] text-[15px] leading-relaxed text-[#777]">
                      {v.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[700px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-rajdhani)] text-[32px] font-bold uppercase text-[#201F20] mb-12">
                Nuestra historia
              </h2>
            </ScrollReveal>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] top-0 bottom-0 w-px bg-gray-200" />

              <div className="flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <ScrollReveal key={m.year} delay={i * 80}>
                    <div className="flex gap-6 items-start">
                      <div className="relative z-10 w-[45px] h-[45px] rounded-full bg-white border-2 border-[#A52430] flex items-center justify-center shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#A52430]" />
                      </div>
                      <div className="pt-2">
                        <span className="font-[family-name:var(--font-rajdhani)] text-[18px] font-bold text-[#A52430]">
                          {m.year}
                        </span>
                        <p className="font-[family-name:var(--font-heebo)] text-[15px] text-[#666] mt-1">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-[#201F20] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-rajdhani)] text-[32px] font-bold uppercase text-white mb-4">
                Certificaciones
              </h2>
              <p className="text-center font-[family-name:var(--font-heebo)] text-[15px] text-white/50 mb-12 max-w-[500px] mx-auto">
                Todos nuestros procesos est&aacute;n certificados bajo los est&aacute;ndares internacionales m&aacute;s exigentes.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certs.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 80} direction="up">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#A52430]/40 transition-colors">
                    <p className="font-[family-name:var(--font-rajdhani)] text-[22px] font-bold text-white">
                      {c.name}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-heebo)] text-[13px] text-white/50">
                      {c.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-100 bg-white px-6 py-20">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="font-[family-name:var(--font-rajdhani)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-4">
              &iquest;Trabajamos juntos?
            </h2>
            <p className="font-[family-name:var(--font-heebo)] text-[16px] text-[#888] mb-8">
              Cont&aacute;ctanos y descubre c&oacute;mo Sliderack puede transformar tu espacio de trabajo.
            </p>
            <Link
              href="/contacto"
              className="inline-block rounded-lg bg-[#A52430] px-10 py-4 font-[family-name:var(--font-rajdhani)] text-[16px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
            >
              Contactar
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
