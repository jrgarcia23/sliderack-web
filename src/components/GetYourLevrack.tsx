import Link from "next/link";

const cards = [
  {
    number: "01",
    title: "Estándar",
    description:
      "Configura tu Sliderack entre nuestros modelos disponibles en distintas alturas y profundidades.",
  },
  {
    number: "02",
    title: "A medida",
    description:
      "¿Necesitas algo especial? Nuestro equipo de ingeniería diseña soluciones adaptadas.",
  },
  {
    number: "03",
    title: "Asesoramiento",
    description:
      "¿Tienes dudas sobre qué sistema necesitas? Te ayudamos a definir la mejor solución.",
  },
];

export default function GetYourLevrack() {
  return (
    <section
      className="relative py-[72px]"
      style={{
        backgroundImage: "url(/images/sliderack/bg/vista-general.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 px-6 md:flex-row md:gap-16">
        {/* Left column */}
        <div className="md:w-[40%]">
          <h2
            className="text-[40px] font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Configura tu Sliderack
          </h2>
          <p
            className="mt-4 text-[18px] leading-relaxed text-white"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Nuestro equipo técnico te ayudará a encontrar la solución más
            adecuada para tu espacio. Cuéntanos qué necesitas.
          </p>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="inline-block rounded-[4px] bg-[#A52430] text-[18px] font-bold uppercase tracking-[2px] text-white transition-opacity duration-300 hover:opacity-80"
              style={{
                fontFamily: "var(--font-rajdhani)",
                padding: "5.4px 18px",
              }}
            >
              Contactar
            </Link>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 md:w-[60%]">
          {cards.map((card) => (
            <div
              key={card.number}
              className="flex gap-5 rounded-lg bg-black/50 p-5"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A52430] text-[14px] font-bold text-white"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                {card.number}
              </div>
              <div>
                <h3
                  className="text-[20px] font-bold uppercase text-white"
                  style={{ fontFamily: "var(--font-rajdhani)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-1 text-[15px] leading-relaxed text-gray-300"
                  style={{ fontFamily: "var(--font-heebo)" }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
