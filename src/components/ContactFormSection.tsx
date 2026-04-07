"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
    catalogo: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, catalogo: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-[#f8f8f8] px-5 py-4 text-[15px] text-[#201F20] placeholder-[#aaa] outline-none ring-0 transition-[border-color] duration-200 focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20";

  return (
    <section className="border-t border-gray-100 bg-white px-6 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        {/* Left column */}
        <ScrollReveal direction="left">
          <div>
            <span
              className="mb-4 block text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              CONTACTO
            </span>
            <h2
              className="mb-6 text-[32px] font-bold uppercase leading-[1.1] text-[#201F20] sm:text-[36px]"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              ¿Hablamos de tu proyecto?
            </h2>
            <p
              className="mb-10 text-[16px] leading-[1.7] text-[#666]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              Nuestro equipo técnico está disponible para ayudarte a definir la
              solución más adecuada para tu espacio.
            </p>

            {/* Phone CTA block */}
            <div className="rounded-xl bg-[#f8f8f8] p-6">
              <p
                className="mb-2 text-[16px] font-semibold text-[#201F20]"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                ¿Prefieres llamarnos?
              </p>
              <a
                href="tel:985308980"
                className="block text-[28px] font-bold text-[#A52430] hover:underline"
                style={{ fontFamily: "var(--font-rajdhani)" }}
              >
                985 30 89 80
              </a>
              <p
                className="mt-1 text-[13px] text-[#999]"
                style={{ fontFamily: "var(--font-heebo)" }}
              >
                Lunes a viernes · 9:00–18:00
              </p>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-6">
              {["Respuesta en 24-48h", "Asesoramiento técnico", "Sin compromiso"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#A52430]" />
                    <span
                      className="text-[13px] text-[#999]"
                      style={{ fontFamily: "var(--font-heebo)" }}
                    >
                      {text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Right column — form */}
        <ScrollReveal direction="right">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre *"
              required
              value={form.nombre}
              onChange={handleChange}
              className={inputClasses}
              style={{ fontFamily: "var(--font-heebo)" }}
            />
            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={form.empresa}
              onChange={handleChange}
              className={inputClasses}
              style={{ fontFamily: "var(--font-heebo)" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClasses}
              style={{ fontFamily: "var(--font-heebo)" }}
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={form.telefono}
              onChange={handleChange}
              className={inputClasses}
              style={{ fontFamily: "var(--font-heebo)" }}
            />
            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              className={inputClasses}
              style={{ fontFamily: "var(--font-heebo)" }}
            />

            <label
              className="flex items-center gap-2 text-[14px] text-[#666]"
              style={{ fontFamily: "var(--font-heebo)" }}
            >
              <input
                type="checkbox"
                checked={form.catalogo}
                onChange={handleCheckbox}
                className="h-4 w-4 accent-[#A52430]"
              />
              Quiero recibir el catálogo técnico
            </label>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#A52430] py-4 text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-[#8a1e28]"
              style={{ fontFamily: "var(--font-rajdhani)" }}
            >
              Enviar consulta
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
