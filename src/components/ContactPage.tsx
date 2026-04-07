"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory } from "@/data/products";

const sistemas = getProductsByCategory("sistemas");
const accesorios = getProductsByCategory("accesorios");

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [selectedModel, setSelectedModel] = useState("");

  useEffect(() => {
    const modelo = searchParams.get("modelo");
    if (modelo) setSelectedModel(modelo);
  }, [searchParams]);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([""]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [privacidad, setPrivacidad] = useState(false);

  const addAccessory = () => setSelectedAccessories([...selectedAccessories, ""]);
  const removeAccessory = (index: number) => {
    if (selectedAccessories.length <= 1) return;
    setSelectedAccessories(selectedAccessories.filter((_, i) => i !== index));
  };
  const updateAccessory = (index: number, value: string) => {
    const updated = [...selectedAccessories];
    updated[index] = value;
    setSelectedAccessories(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to backend
  };

  const inputClass =
    "w-full bg-[#f8f8f8] border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-[#201F20] placeholder-[#aaa] focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20 outline-none transition-colors";

  const selectClass =
    "w-full bg-[#f8f8f8] border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-[#201F20] focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20 outline-none transition-colors appearance-none cursor-pointer";

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[300px] md:h-[350px] flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/sliderack/bg/hero-garaje-premium.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <h1
            className="text-white uppercase"
            style={{ fontFamily: "var(--font-rajdhani)", fontSize: 48, fontWeight: 700 }}
          >
            Solicitar información
          </h1>
          <p
            className="text-white/70 mt-4 max-w-[500px] mx-auto"
            style={{ fontFamily: "var(--font-heebo)", fontSize: 17 }}
          >
            Configura tu consulta y nuestro equipo técnico te responderá en 24-48h.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Left: Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Producto */}
                <div>
                  <label
                    className="block mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#A52430" }}
                  >
                    Modelo de producto
                  </label>
                  <div className="relative">
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Selecciona un modelo</option>
                      <optgroup label="1 Nivel · Prof. 370">
                        {sistemas.filter(p => p.badge === "1 Nivel").filter(p => p.shortDesc.includes("370")).map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="1 Nivel · Prof. 470">
                        {sistemas.filter(p => p.badge.includes("470")).map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="2 Niveles · Prof. 370">
                        {sistemas.filter(p => p.badge === "2 Niveles" && p.shortDesc.includes("370")).map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label="2 Niveles · Prof. 470">
                        {sistemas.filter(p => p.badge.includes("2 Niveles") && p.shortDesc.includes("470")).map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Accesorios */}
                <div>
                  <label
                    className="block mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#A52430" }}
                  >
                    Accesorios
                  </label>
                  <div className="flex flex-col gap-3">
                    {selectedAccessories.map((acc, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="relative flex-1">
                          <select
                            value={acc}
                            onChange={(e) => updateAccessory(i, e.target.value)}
                            className={selectClass}
                          >
                            <option value="">Selecciona un accesorio</option>
                            {accesorios.map(a => (
                              <option key={a.slug} value={a.slug}>{a.name}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {selectedAccessories.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeAccessory(i)}
                            className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 text-[#999] hover:text-[#A52430] hover:border-[#A52430] transition-colors flex-shrink-0"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addAccessory}
                      className="self-start flex items-center gap-2 py-2 px-4 rounded-lg border border-dashed border-gray-300 text-[#A52430] hover:border-[#A52430] hover:bg-[#A52430]/5 transition-colors"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600 }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      Añadir otro accesorio
                    </button>
                  </div>
                </div>

                {/* Separator */}
                <div className="border-t border-gray-200 my-1" />

                {/* Contact fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-2 uppercase tracking-[1px]"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Tu nombre"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 uppercase tracking-[1px]"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block mb-2 uppercase tracking-[1px]"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+34 600 000 000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-2 uppercase tracking-[1px]"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      placeholder="Nombre de tu empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                  >
                    País
                  </label>
                  <input
                    type="text"
                    value={pais}
                    onChange={(e) => setPais(e.target.value)}
                    placeholder="España"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    className="block mb-2 uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-rajdhani)", fontSize: 13, fontWeight: 600, color: "#201F20" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Cuéntanos qué necesitas..."
                    rows={4}
                    className={inputClass + " resize-y"}
                  />
                </div>

                {/* Privacy */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={privacidad}
                    onChange={(e) => setPrivacidad(e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#A52430] cursor-pointer"
                  />
                  <span className="text-[#666]" style={{ fontFamily: "var(--font-heebo)", fontSize: 13, lineHeight: 1.5 }}>
                    He leído y acepto la{" "}
                    <a href="/politica-de-privacidad" className="text-[#A52430] hover:underline">
                      política de privacidad
                    </a>
                    . Autorizo el tratamiento de mis datos para gestionar mi consulta.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-[#A52430] text-white py-4 rounded-lg hover:bg-[#8a1e28] transition-colors uppercase tracking-[2px] mt-2"
                  style={{ fontFamily: "var(--font-rajdhani)", fontSize: 16, fontWeight: 700 }}
                >
                  Enviar solicitud
                </button>
              </form>
            </ScrollReveal>

            {/* Right: Info sidebar */}
            <ScrollReveal direction="right">
              <div className="lg:pt-8">
                <div className="bg-[#f8f8f8] rounded-xl p-6 mb-6">
                  <Image
                    src="/images/sliderack/logo.png"
                    alt="Sliderack"
                    width={160}
                    height={40}
                    className="mb-4"
                  />
                  <p
                    className="text-[#666] mb-4"
                    style={{ fontFamily: "var(--font-heebo)", fontSize: 14, lineHeight: 1.6 }}
                  >
                    Nuestro equipo técnico te asesorará sobre la configuración más adecuada para tu espacio.
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p
                      className="uppercase tracking-[1px] mb-2"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 12, fontWeight: 600, color: "#201F20" }}
                    >
                      ¿Prefieres llamarnos?
                    </p>
                    <a
                      href="tel:+34946003128"
                      className="text-[#A52430] hover:underline"
                      style={{ fontFamily: "var(--font-rajdhani)", fontSize: 24, fontWeight: 700 }}
                    >
                      946 00 31 28
                    </a>
                    <p className="text-[#999] mt-1" style={{ fontFamily: "var(--font-heebo)", fontSize: 12 }}>
                      Lunes a viernes · 9:00–18:00
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    "Respuesta en 24-48h",
                    "Asesoramiento técnico",
                    "Sin compromiso",
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#A52430] rounded-full" />
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-heebo)", fontSize: 13 }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
