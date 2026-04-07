import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const sectors = [
  {
    title: "Automoción e industria",
    description:
      "Almacenaje preciso para piezas, herramientas y componentes. Organización técnica que mejora la eficiencia del taller.",
    photo: "/images/sliderack/photos/taller-completo.jpg",
  },
  {
    title: "Garajes premium",
    description:
      "Estética cuidada y funcionalidad para espacios de alto nivel donde el orden es parte del diseño.",
    photo: "/images/sliderack/photos/garaje-bmw.jpg",
  },
  {
    title: "Servicios de emergencia",
    description:
      "EPIs, uniformes y material operativo siempre accesibles, visibles y protegidos en un sistema seguro.",
    photo: "/images/sliderack/photos/epis-chalecos.jpg",
  },
];

export default function LevrackAccessories() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <span
            className="mb-3 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            APLICACIONES
          </span>
          <h2
            className="text-[28px] font-bold uppercase text-[#201F20] sm:text-[34px]"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Sectores donde Sliderack funciona especialmente bien
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sectors.map((sector, index) => (
            <ScrollReveal
              key={sector.title}
              delay={index * 150}
              direction="up"
            >
              <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Image area */}
                <div className="relative h-[200px] overflow-hidden">
                  <Image
                    src={sector.photo}
                    alt={sector.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3
                    className="absolute bottom-4 left-5 text-[22px] font-bold uppercase text-white"
                    style={{ fontFamily: "var(--font-rajdhani)" }}
                  >
                    {sector.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <p
                    className="text-[15px] leading-[1.7] text-[#555]"
                    style={{ fontFamily: "var(--font-heebo)" }}
                  >
                    {sector.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
