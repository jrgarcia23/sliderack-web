import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Sobre Esnova Racks — Fabricante Español",
  description:
    "Sliderack es una marca de Esnova Racks, empresa española con más de +50 años diseñando y fabricando sistemas de almacenaje industrial.",
};

const certs = [
  { name: "ISO 9001", desc: "Gestión de calidad" },
  { name: "ISO 14001", desc: "Gestión ambiental" },
  { name: "ISO 45001", desc: "Seguridad y salud laboral" },
  { name: "UNE EN 1090", desc: "Marcado CE — Estructuras metálicas" },
];

export default function CompaniaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[350px] md:h-[450px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/bg/instalacion-taller.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[52px] font-bold uppercase text-white">
              Sobre nosotros
            </h1>
            <p className="mt-4 max-w-[550px] mx-auto font-[family-name:var(--font-body)] text-[17px] text-white/70">
              Más de +50 años fabricando soluciones de almacenaje que funcionan.
            </p>
          </div>
          {/* Badges bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/10">
            <div className="mx-auto max-w-[1200px] px-6 py-3 flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {["Fabricado por Esnova Racks", "+50 años", "Producción propia certificada", "Tecnología industrial a medida"].map((badge) => (
                <span key={badge} className="font-[family-name:var(--font-heading)] text-[12px] font-semibold uppercase tracking-[1.5px] text-white/80">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Ingeniería, fabricación y experiencia */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sliderack/photos/taller-completo.jpg"
                  alt="Instalación de estanterías deslizantes Sliderack en un entorno industrial"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase leading-[1.15] text-[#201F20] mb-6">
                  Ingeniería, fabricación y experiencia al servicio del almacenaje
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Sliderack forma parte de Esnova Racks, empresa española con más de +50 años de experiencia en el diseño y fabricación de sistemas de almacenaje industrial.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
                  A lo largo de su trayectoria, Esnova ha desarrollado soluciones para múltiples sectores, consolidando un modelo de trabajo basado en la calidad, la innovación y la eficiencia operativa.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Fabricación propia */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                Fabricación propia con enfoque industrial
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                La capacidad productiva de Esnova permite controlar todo el proceso, desde el diseño hasta la fabricación final. Esto garantiza sistemas robustos, precisos y adaptados a las exigencias de entornos profesionales.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                El uso de tecnología avanzada y procesos optimizados permite ofrecer soluciones fiables, pensadas para un uso intensivo y duradero. Nuestra planta de <strong className="text-[#201F20]">46.600 m²</strong> en Gijón (Asturias) opera con presencia en <strong className="text-[#201F20]">+45 países</strong>.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Diseño funcional */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sliderack/photos/garaje-bmw.jpg"
                  alt="Sistema Sliderack instalado en un garaje premium con vehículo de alta gama"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase leading-[1.15] text-[#201F20] mb-6">
                  Diseño funcional orientado al rendimiento
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Sliderack nace como una evolución del conocimiento industrial aplicado a espacios donde el orden y la accesibilidad son clave.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Cada sistema está diseñado para optimizar el espacio disponible, facilitar el acceso a los materiales y mejorar la organización del entorno de trabajo.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
                  El resultado es una solución que combina estructura, funcionalidad y una estética técnica cuidada.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Compromiso con la calidad */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                Compromiso con la calidad y la mejora continua
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                La actividad de Esnova se desarrolla bajo estándares de calidad certificados, garantizando el cumplimiento de las normativas más exigentes.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                El enfoque de mejora continua permite evolucionar tanto en producto como en procesos, adaptándose a las necesidades de cada cliente y sector.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="bg-[#201F20] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-white mb-4">
                Certificaciones
              </h2>
              <p className="text-center font-[family-name:var(--font-body)] text-[15px] text-white/50 mb-12 max-w-[500px] mx-auto">
                Todos nuestros procesos están certificados bajo los estándares internacionales más exigentes.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certs.map((c, i) => (
                <ScrollReveal key={c.name} delay={i * 80} direction="up">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#A52430]/40 transition-colors h-full">
                    <p className="font-[family-name:var(--font-heading)] text-[22px] font-bold text-white">
                      {c.name}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-body)] text-[13px] text-white/50">
                      {c.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Base sólida */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                Una base sólida para soluciones fiables
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                Sliderack representa la aplicación de una experiencia industrial consolidada en un sistema de almacenaje pensado para entornos técnicos y profesionales.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                Una solución que responde a una necesidad clara: organizar mejor, trabajar con mayor eficiencia y mantener el control del espacio.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#A52430] px-6 py-14">
          <div className="mx-auto max-w-[900px] text-center">
            <p className="font-[family-name:var(--font-body)] text-[17px] text-white/90 mb-6">
              Descubre cómo Sliderack puede adaptarse a tu espacio o solicita información a nuestro equipo técnico.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="rounded-lg border-2 border-white px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:bg-white hover:text-[#A52430] transition-colors"
              >
                Contactar
              </Link>
              <Link
                href="/sistemas"
                className="rounded-lg border-2 border-white/30 px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:border-white transition-colors"
              >
                Ver modelos
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
