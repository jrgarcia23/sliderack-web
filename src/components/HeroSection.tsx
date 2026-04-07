import Link from "next/link";

const trustBadges = [
  "Fabricado en España",
  "+50 años de experiencia",
  "Certificado ISO",
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[85vh] max-md:min-h-[60vh] flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.15) 100%), url("/images/sliderack/bg/hero-garaje-premium.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-[1400px] px-8 lg:px-16 py-20">
        {/* Trust badges */}
        <div className="flex flex-wrap gap-3 mb-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[1px]"
              style={{
                fontFamily: "var(--font-rajdhani)",
                color: "rgba(255,255,255,0.9)",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* H1 */}
        <h1
          className="text-[44px] lg:text-[68px] xl:text-[80px] font-bold uppercase text-white mb-6 max-w-[700px]"
          style={{
            fontFamily: "var(--font-rajdhani)",
            lineHeight: 0.95,
          }}
        >
          SISTEMA
          <br />
          DESLIZANTE
          <br />
          DE ALTA
          <br />
          PRECISIÓN
        </h1>

        {/* Subtitle */}
        <p
          className="text-[18px] max-w-[480px] mb-10"
          style={{
            fontFamily: "var(--font-heebo)",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.6,
          }}
        >
          Diseñado por Esnova Racks para entornos que exigen orden, fiabilidad y
          rendimiento.
        </p>

        {/* CTA */}
        <Link
          href="/sistemas"
          className="inline-block rounded bg-[#A52430] px-8 py-4 text-[16px] font-bold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-[#8a1e28]"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          Ver modelos
        </Link>
      </div>
    </section>
  );
}
