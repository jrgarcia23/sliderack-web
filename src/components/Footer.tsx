import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Sistemas", href: "/sistemas" },
  { label: "Accesorios", href: "/accesorios" },
  { label: "Por qu\u00e9 Sliderack", href: "/por-que-sliderack" },
  { label: "Compa\u00f1\u00eda", href: "/compania" },
  { label: "Contacto", href: "/contacto" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black" style={{ padding: "25px 0 26px" }}>
      {/* \u2500\u2500 Top Section: 3 columns \u2500\u2500 */}
      <div className="mx-auto max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 - Logo & Description */}
        <div>
          <Image
            src="/images/sliderack/logo.webp"
            alt="Sliderack"
            width={220}
            height={55}
            className="mb-4"
          />
          <p
            className="font-[family-name:var(--font-heebo)] text-[14px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Sliderack forma parte de Esnova Racks, empresa espa\u00f1ola con m\u00e1s de
            50 a\u00f1os de experiencia en el dise\u00f1o y fabricaci\u00f3n de sistemas de
            almacenaje industrial.
          </p>
        </div>

        {/* Column 2 - Contacto */}
        <div>
          <h3 className="font-[family-name:var(--font-rajdhani)] text-[20px] font-bold uppercase text-white mb-4">
            Contacto
          </h3>
          <div
            className="font-[family-name:var(--font-heebo)] text-[14px] space-y-2"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <p>
              Tel\u00e9fono Sliderack:{" "}
              <a
                href="tel:+34946003128"
                className="text-white hover:underline"
              >
                946 00 31 28
              </a>
            </p>
            <p>
              Tel\u00e9fono Esnova:{" "}
              <a
                href="tel:+34985308980"
                className="text-white hover:underline"
              >
                985 30 89 80
              </a>
            </p>
          </div>
        </div>

        {/* Column 3 - Navegaci\u00f3n */}
        <div>
          <h3 className="font-[family-name:var(--font-rajdhani)] text-[20px] font-bold uppercase text-white mb-4">
            Navegaci\u00f3n
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-[family-name:var(--font-heebo)] text-[14px] hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* \u2500\u2500 Bottom Bar \u2500\u2500 */}
      <div className="mx-auto max-w-[1200px] px-4 mt-8 pt-6 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <p
            className="font-[family-name:var(--font-heebo)] text-[14px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            &copy; 2026 Sliderack by Esnova Racks
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center size-8 rounded-full bg-[#A52430] text-white hover:opacity-80 transition-opacity"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {[
            { label: "Aviso Legal", href: "/aviso-legal" },
            { label: "Pol\u00edtica de Privacidad", href: "/politica-de-privacidad" },
            { label: "Pol\u00edtica de Cookies", href: "/politica-de-cookies" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-heebo)] text-[13px] hover:text-white transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
