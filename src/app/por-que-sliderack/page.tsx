import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Por qué Elegir Sliderack",
  description:
    "Descubre por qué Sliderack es el sistema de almacenaje deslizante elegido por talleres, garajes premium y servicios de emergencia en toda Europa.",
};

const diferencias = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Orden",
    desc: "Sliderack está fabricado en España bajo los estándares de calidad de Esnova Racks, con procesos certificados y controlados en todas las fases de producción.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.22a.993.993 0 01-.534-.872V6.073a1 1 0 01.534-.872l5.58-3.22a1 1 0 01.96 0l5.58 3.22a1 1 0 01.534.872v5.005a1 1 0 01-.534.872l-5.58 3.22a1 1 0 01-.96 0z" />
      </svg>
    ),
    title: "Ingeniería de precisión",
    desc: "La ingeniería aplicada al diseño permite ofrecer un sistema preciso, fiable y preparado para un uso continuado en entornos exigentes.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    title: "Eficiencia operativa",
    desc: "A diferencia de soluciones convencionales, Sliderack no solo organiza el espacio, sino que mejora la operativa diaria y la eficiencia del trabajo.",
  },
];

const sectors = [
  {
    name: "Automoción, industria y mantenimiento técnico",
    desc: "Llaves, vasos, herramientas eléctricas y recambios organizados por tipo y tamaño. Acceso inmediato a cada pieza sin mover otras estanterías. El sistema deslizante reduce los tiempos muertos y mejora la productividad del equipo.",
  },
  {
    name: "Garajes premium y viviendas de alto standing",
    desc: "Almacenaje que combina estética y funcionalidad en espacios donde el diseño importa. Acabado Negro Mate RAL-9005, movimiento silencioso y módulos que se integran como mobiliario de alta gama.",
  },
  {
    name: "Servicios de emergencia y bomberos",
    desc: "EPIs, equipos de intervención y material operativo siempre localizable y protegido con cerradura. En situaciones de emergencia, cada segundo cuenta: Sliderack garantiza acceso rápido y seguro al equipamiento crítico.",
  },
  {
    name: "Industria y mantenimiento técnico",
    desc: "Componentes, repuestos y utillaje de producción clasificados por línea o turno. El almacenaje compacto deslizante libera superficie en planta sin sacrificar capacidad de almacenamiento.",
  },
  {
    name: "Centros logísticos y almacenes",
    desc: "Maximiza la capacidad de almacenaje eliminando pasillos fijos entre estanterías. Ideal para espacios donde cada metro cuadrado tiene un coste elevado y la organización impacta directamente en la eficiencia operativa.",
  },
  {
    name: "Laboratorios y centros de investigación",
    desc: "Almacenaje de precisión para muestras, reactivos, instrumentación y documentación técnica. El sistema deslizante protege materiales sensibles y facilita el control de inventario en entornos con protocolos estrictos.",
  },
];

export default function PorQueSliderack() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative h-[350px] md:h-[450px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/bg/vista-general.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center px-6">
            <h1 className="font-[family-name:var(--font-heading)] text-[36px] md:text-[52px] font-bold uppercase text-white">
              Por qué elegir Sliderack
            </h1>
            <p className="mt-4 max-w-[550px] mx-auto font-[family-name:var(--font-body)] text-[17px] text-white/70">
              La fortaleza de la sencillez. Un sistema que combina ingeniería de precisión con la robustez del acero español.
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

        {/* Intro: Qué es Sliderack */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/sliderack/photos/taller-completo.jpg"
                  alt="Sistema de estanterías deslizantes Sliderack instalado en un taller profesional"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                  Diseñado para entornos que exigen precisión, orden y fiabilidad
                </h2>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666] mb-4">
                  Desarrollado por Esnova Racks, Sliderack combina la experiencia industrial con un enfoque funcional, ofreciendo una solución robusta y eficiente para la organización de espacios técnicos y profesionales.
                </p>
                <p className="font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
                  Su diseño responde a una lógica clara: optimizar el espacio disponible, mejorar el acceso a los materiales y garantizar un entorno de trabajo más ordenado y seguro.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ventajas técnicas del sistema */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-14">
                Ventajas técnicas del sistema
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <ScrollReveal direction="left">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                    El sistema Sliderack permite aprovechar al máximo cada metro cuadrado, reduciendo espacios muertos y facilitando la organización del material.
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                    Su estructura metálica garantiza estabilidad y resistencia en entornos de uso intensivo, mientras que el sistema deslizante proporciona un acceso cómodo y controlado a cada módulo.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                    La modularidad del sistema permite adaptar la configuración según el uso, incorporando bandejas y accesorios en función de las necesidades específicas.
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                    Además, su diseño facilita el mantenimiento, asegurando durabilidad y rendimiento a largo plazo.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Diferencias del sistema */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] md:text-[40px] font-bold uppercase text-[#201F20] mb-14">
                Diferencias del sistema
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {diferencias.map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 100} direction="up">
                  <div className="text-center h-full">
                    <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-[#A52430]/10 flex items-center justify-center text-[#A52430]">
                      {d.icon}
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-[20px] font-bold uppercase text-[#201F20] mb-3">
                      {d.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-[#777]">
                      {d.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Configuración y evolución */}
        <section className="bg-[#f8f8f8] px-6 py-20">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20] mb-6 leading-[1.15]">
                Configuración por altura y evolución del sistema
              </h2>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                Sliderack no es un sistema a medida, sino una solución configurable que permite adaptarse a diferentes necesidades sin perder coherencia estructural.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555] mb-4">
                El sistema ofrece una configuración clara y definida, pensada para facilitar la instalación y garantizar un rendimiento óptimo.
              </p>
              <p className="font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#555]">
                Su diseño modular permite incorporar mejoras o ampliaciones con el tiempo, acompañando la evolución del espacio y del uso.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Photo break */}
        <section
          className="relative h-[300px] md:h-[400px] flex items-center justify-center"
          style={{
            backgroundImage: 'url("/images/sliderack/photos/garaje-bmw.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center px-6">
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[40px] font-bold uppercase text-white max-w-[700px]">
              Orden que se ve. Rendimiento que se nota.
            </h2>
          </div>
        </section>

        {/* Sectores */}
        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-[1100px]">
            <ScrollReveal>
              <h2 className="text-center font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase text-[#201F20] mb-4">
                Dónde se usa Sliderack
              </h2>
              <p className="text-center max-w-[500px] mx-auto font-[family-name:var(--font-body)] text-[16px] text-[#888] mb-12">
                Soluciones adaptadas a cada sector profesional.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {sectors.map((s, i) => (
                <ScrollReveal key={s.name} delay={i * 60} direction="up">
                  <div className="rounded-xl bg-[#f8f8f8] border border-gray-100 p-6 h-full">
                    <h3 className="font-[family-name:var(--font-heading)] text-[18px] font-bold uppercase text-[#201F20] mb-3">
                      {s.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed text-[#777]">
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
            <h2 className="font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-white mb-4">
              ¿Listo para optimizar tu espacio?
            </h2>
            <p className="font-[family-name:var(--font-body)] text-[16px] text-white/60 mb-8">
              Solicita información sin compromiso. Nuestro equipo te asesorará sobre la configuración perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contacto"
                className="rounded-lg bg-[#A52430] px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
              >
                Solicitar información
              </Link>
              <Link
                href="/sistemas"
                className="rounded-lg border-2 border-white/20 px-10 py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase text-white hover:border-white/40 transition-colors"
              >
                Ver catálogo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
