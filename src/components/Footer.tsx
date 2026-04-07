import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Modelos", href: "/sistemas" },
  { label: "Accesorios", href: "/accesorios" },
  { label: "Por qué Sliderack", href: "/por-que-sliderack" },
  { label: "Compañía", href: "/compania" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <footer className="w-full">
      {/* CTA Bar */}
      {!hideCta && <div className="bg-[#A52430] px-6 py-5">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-[family-name:var(--font-heading)] text-[18px] md:text-[20px] font-bold uppercase text-white">
            ¿Necesitas asesoramiento técnico?
          </p>
          <div className="flex gap-3">
            <Link
              href="/contacto"
              className="rounded-lg border-2 border-white px-6 py-2.5 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white hover:bg-white hover:text-[#A52430] transition-colors"
            >
              Contactar
            </Link>
            <a
              href="tel:+34985308980"
              className="rounded-lg border-2 border-white/30 px-6 py-2.5 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white hover:border-white transition-colors"
            >
              985 30 89 80
            </a>
          </div>
        </div>
      </div>}

      {/* Main Footer */}
      <div className="bg-[#201F20] px-6 py-10">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1 — Logo + description */}
          <div>
            <Image
              src="/images/sliderack/logo.webp"
              alt="Sliderack"
              width={180}
              height={45}
              className="mb-4"
            />
            <p
              className="font-[family-name:var(--font-body)] text-[14px] leading-relaxed max-w-[350px]"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Sistema de almacenaje deslizante de alta precisión. Diseñado y fabricado en España por Esnova Racks.
            </p>
          </div>

          {/* Col 2 — Navegación */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white mb-4 tracking-[1px]">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-body)] text-[14px] hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white mb-4 tracking-[1px]">
              Contacto
            </h3>
            <div
              className="font-[family-name:var(--font-body)] text-[14px] space-y-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              <p>
                <a
                  href="tel:+34985308980"
                  className="text-white font-semibold hover:opacity-80 transition-opacity"
                >
                  985 30 89 80
                </a>
              </p>
              <p>L-V · 9:00–18:00</p>
              <p>Gijón, Asturias</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#201F20] border-t border-white/10 px-6 py-5">
        <div className="mx-auto max-w-[1200px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-[family-name:var(--font-body)] text-[13px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            &copy; 2026 Sliderack by Esnova Racks
          </span>
          <div className="flex flex-wrap items-center gap-5">
            {[
              { label: "Aviso Legal", href: "/aviso-legal" },
              { label: "Política de Privacidad", href: "/politica-de-privacidad" },
              { label: "Política de Cookies", href: "/politica-de-cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-body)] text-[12px] hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
