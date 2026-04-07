import Link from "next/link";

export default function BecomeDistributor() {
  return (
    <section
      className="relative py-[50px]"
      style={{
        backgroundImage: "url(/images/sliderack/bg/foto-ambiente.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-6 text-center md:flex-row md:justify-between md:text-left">
        {/* Left text */}
        <div>
          <h3
            className="text-[29px] font-bold uppercase text-white"
            style={{ fontFamily: "var(--font-rajdhani)" }}
          >
            Solicita el catálogo técnico
          </h3>
          <p
            className="mt-2 max-w-[600px] text-[18px] leading-relaxed text-white"
            style={{ fontFamily: "var(--font-heebo)" }}
          >
            Descubre todas las configuraciones disponibles y las
            especificaciones técnicas del sistema Sliderack.
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <Link
            href="/contacto"
            className="inline-block rounded-[4px] bg-[#A52430] text-[18px] font-bold uppercase tracking-[2px] text-white transition-opacity duration-300 hover:opacity-80"
            style={{
              fontFamily: "var(--font-rajdhani)",
              padding: "5.4px 18px",
            }}
          >
            Solicitar catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
