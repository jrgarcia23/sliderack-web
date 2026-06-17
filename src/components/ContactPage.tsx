"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductsByCategory, getBadgeLabel } from "@/data/products";

const sistemas = getProductsByCategory("sistemas");
const accesorios = getProductsByCategory("accesorios");

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedModel, setSelectedModel] = useState("");
  const [gclid, setGclid] = useState("");

  useEffect(() => {
    const modelo = searchParams.get("modelo");
    if (modelo) setSelectedModel(modelo);
    const gclidParam = searchParams.get("gclid");
    if (gclidParam) {
      setGclid(gclidParam);
      sessionStorage.setItem("gclid", gclidParam);
    } else {
      const stored = sessionStorage.getItem("gclid");
      if (stored) setGclid(stored);
    }
  }, [searchParams]);

  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([""]);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [pais, setPais] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [privacidad, setPrivacidad] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          email,
          telefono,
          empresa,
          pais,
          mensaje,
          modelo: selectedModel,
          accesorios: selectedAccessories.filter(Boolean),
          privacidadAceptada: privacidad,
          consentTimestamp: new Date().toISOString(),
          gclid: gclid || undefined,
          source: document.referrer || undefined,
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error("Error");
      router.push("/gracias");
    } catch {
      setError(t("error"));
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full bg-[#f8f8f8] border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-[#201F20] placeholder-[#aaa] focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20 outline-none transition-colors";
  const selectClass = "w-full bg-[#f8f8f8] border border-gray-200 rounded-lg px-5 py-4 text-[15px] text-[#201F20] focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20 outline-none transition-colors appearance-none cursor-pointer";

  const group1 = getBadgeLabel("1 Nivel", locale);
  const group2 = getBadgeLabel("1 Nivel · Prof. 470", locale);
  const group3 = getBadgeLabel("2 Niveles", locale);
  const group4 = getBadgeLabel("2 Niveles · Prof. 470", locale);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative h-[300px] md:h-[350px] flex items-center justify-center"
        style={{ backgroundImage: 'url("/images/sliderack/bg/hero-garaje-premium.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-white uppercase" style={{ fontFamily: "var(--font-heading)", fontSize: 48, fontWeight: 700 }}>
            {t("title")}
          </h1>
          <p className="text-white/70 mt-4 max-w-[500px] mx-auto" style={{ fontFamily: "var(--font-body)", fontSize: 17 }}>
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-16">
            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Product */}
                <div>
                  <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#A52430" }}>
                    {t("productLabel")}
                  </label>
                  <div className="relative">
                    <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} className={selectClass}>
                      <option value="">{t("productPlaceholder")}</option>
                      <optgroup label={group1}>
                        {sistemas.filter(p => p.badge === "1 Nivel").map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label={group2}>
                        {sistemas.filter(p => p.badge === "1 Nivel · Prof. 470").map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label={group3}>
                        {sistemas.filter(p => p.badge === "2 Niveles").map(p => (
                          <option key={p.slug} value={p.slug}>{p.name}</option>
                        ))}
                      </optgroup>
                      <optgroup label={group4}>
                        {sistemas.filter(p => p.badge === "2 Niveles · Prof. 470").map(p => (
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

                {/* Accessories */}
                <div>
                  <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#A52430" }}>
                    {t("accessoriesLabel")}
                  </label>
                  <div className="flex flex-col gap-3">
                    {selectedAccessories.map((acc, i) => (
                      <div key={i} className="flex gap-2">
                        <div className="relative flex-1">
                          <select value={acc} onChange={(e) => updateAccessory(i, e.target.value)} className={selectClass}>
                            <option value="">{t("accPlaceholder")}</option>
                            {accesorios.map(a => {
                              const name = locale === "en" && a.nameEn ? a.nameEn : a.name;
                              return <option key={a.slug} value={a.slug}>{name}</option>;
                            })}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-[#999]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        {selectedAccessories.length > 1 && (
                          <button type="button" onClick={() => removeAccessory(i)} className="w-12 h-12 flex items-center justify-center rounded-lg border border-gray-200 text-[#999] hover:text-[#A52430] hover:border-[#A52430] transition-colors flex-shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ))}
                    <button type="button" onClick={addAccessory} className="self-start flex items-center gap-2 py-2 px-4 rounded-lg border border-dashed border-gray-300 text-[#A52430] hover:border-[#A52430] hover:bg-[#A52430]/5 transition-colors" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600 }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                      {t("addAccessory")}
                    </button>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-1" />

                {/* Contact fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                      {t("field_name")}
                    </label>
                    <input type="text" required value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder={t("namePlaceholder")} className={inputClass} />
                  </div>
                  <div>
                    <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                      {t("field_email")}
                    </label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("emailPlaceholder")} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                      {t("field_phone")}
                    </label>
                    <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder={t("phonePlaceholder")} className={inputClass} />
                  </div>
                  <div>
                    <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                      {t("field_company")}
                    </label>
                    <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder={t("companyPlaceholder")} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                    {t("countryLabel")}
                  </label>
                  <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} placeholder={t("countryPlaceholder")} className={inputClass} />
                </div>

                <div>
                  <label className="block mb-2 uppercase tracking-[1px]" style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 600, color: "#201F20" }}>
                    {t("field_message")}
                  </label>
                  <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} placeholder={t("messagePlaceholder")} rows={4} className={inputClass + " resize-y"} />
                </div>

                {/* Privacy */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required checked={privacidad} onChange={(e) => setPrivacidad(e.target.checked)} className="mt-1 w-4 h-4 accent-[#A52430] cursor-pointer" />
                  <span className="text-[#666]" style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5 }}>
                    {t("check_privacy")}{" "}
                    <Link href="/politica-de-privacidad" className="text-[#A52430] hover:underline">
                      {t("privacy_link")}
                    </Link>
                    {t("privacySuffix")}
                  </span>
                </label>

                {error && <p className="text-red-600 text-[14px]" style={{ fontFamily: "var(--font-body)" }}>{error}</p>}

                {sent ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <p className="text-green-800 font-semibold" style={{ fontFamily: "var(--font-heading)", fontSize: 18 }}>{t("successTitle")}</p>
                    <p className="text-green-700 mt-2" style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{t("successBody")}</p>
                  </div>
                ) : (
                  <button type="submit" disabled={sending} className="bg-[#A52430] text-white py-4 rounded-lg hover:bg-[#8a1e28] transition-colors uppercase tracking-[2px] mt-2 disabled:opacity-50 disabled:cursor-not-allowed" style={{ fontFamily: "var(--font-heading)", fontSize: 16, fontWeight: 700 }}>
                    {sending ? t("sending") : t("submitRequest")}
                  </button>
                )}
              </form>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal direction="right">
              <div className="lg:pt-8">
                <div className="bg-[#f8f8f8] rounded-xl p-6 mb-6">
                  <Image src="/images/sliderack/logo.webp" alt="Sliderack" width={160} height={40} className="mb-4" />
                  <p className="text-[#666] mb-4" style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6 }}>
                    {t("sidebarText")}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="uppercase tracking-[1px] mb-2" style={{ fontFamily: "var(--font-heading)", fontSize: 12, fontWeight: 600, color: "#201F20" }}>
                      {t("preferCall")}
                    </p>
                    <a href="tel:+34985308980" className="text-[#A52430] hover:underline" style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700 }}>
                      985 30 89 80
                    </a>
                    <p className="text-[#999] mt-1" style={{ fontFamily: "var(--font-body)", fontSize: 12 }}>
                      {t("schedule")}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[t("trust_response"), t("trust_advice"), t("trust_nocommit")].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#A52430] rounded-full" />
                      <span className="text-[#999]" style={{ fontFamily: "var(--font-body)", fontSize: 13 }}>{item}</span>
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
