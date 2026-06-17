"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, Link } from "@/i18n/navigation";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactFormSection() {
  const t = useTranslations("contact");
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
    catalogo: false,
    privacidad: false,
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [name]: e.target.checked }));
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
          nombre: form.nombre,
          email: form.email,
          telefono: form.telefono,
          empresa: form.empresa,
          mensaje: form.mensaje + (form.catalogo ? `\n\n${t("catalogue_append")}` : ""),
          privacidadAceptada: form.privacidad,
          consentTimestamp: new Date().toISOString(),
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

  const inputClasses =
    "w-full rounded-lg border border-gray-200 bg-[#f8f8f8] px-5 py-4 font-[family-name:var(--font-body)] text-[15px] text-[#201F20] placeholder-[#aaa] outline-none ring-0 transition-[border-color] duration-200 focus:border-[#A52430] focus:ring-1 focus:ring-[#A52430]/20";

  return (
    <section className="border-t border-gray-100 bg-white px-6 py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
        {/* Left column */}
        <ScrollReveal direction="left">
          <div>
            <span className="mb-4 block font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase tracking-[2px] text-[#A52430]">
              {t("eyebrow")}
            </span>
            <h2 className="mb-6 font-[family-name:var(--font-heading)] text-[32px] font-bold uppercase leading-[1.1] text-[#201F20] sm:text-[36px]">
              {t("title")}
            </h2>
            <p className="mb-10 font-[family-name:var(--font-body)] text-[16px] leading-[1.7] text-[#666]">
              {t("body")}
            </p>

            <div className="rounded-xl bg-[#f8f8f8] p-6">
              <p className="mb-2 font-[family-name:var(--font-heading)] text-[16px] font-semibold text-[#201F20]">
                {t("preferCall")}
              </p>
              <a
                href="tel:+34985308980"
                className="block font-[family-name:var(--font-heading)] text-[28px] font-bold text-[#A52430] hover:underline"
              >
                985 30 89 80
              </a>
              <p className="mt-1 font-[family-name:var(--font-body)] text-[13px] text-[#999]">
                {t("schedule")}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {([t("trust_response"), t("trust_advice"), t("trust_nocommit")] as string[]).map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#A52430]" />
                  <span className="font-[family-name:var(--font-body)] text-[13px] text-[#999]">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Right column — form */}
        <ScrollReveal direction="right">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="nombre" placeholder={`${t("field_name")} *`} required value={form.nombre} onChange={handleChange} className={inputClasses} />
            <input type="text" name="empresa" placeholder={t("field_company")} value={form.empresa} onChange={handleChange} className={inputClasses} />
            <input type="email" name="email" placeholder={`${t("field_email")} *`} required value={form.email} onChange={handleChange} className={inputClasses} />
            <input type="tel" name="telefono" placeholder={t("field_phone")} value={form.telefono} onChange={handleChange} className={inputClasses} />
            <textarea name="mensaje" placeholder={t("field_message")} rows={4} value={form.mensaje} onChange={handleChange} className={inputClasses} />

            <label className="flex items-center gap-2 font-[family-name:var(--font-body)] text-[14px] text-[#666] cursor-pointer">
              <input type="checkbox" checked={form.catalogo} onChange={handleCheckbox("catalogo")} className="h-4 w-4 accent-[#A52430]" />
              {t("check_catalogue")}
            </label>

            <label className="flex items-start gap-2 font-[family-name:var(--font-body)] text-[13px] text-[#666] cursor-pointer">
              <input type="checkbox" required checked={form.privacidad} onChange={handleCheckbox("privacidad")} className="h-4 w-4 accent-[#A52430] mt-0.5" />
              <span>
                {t("check_privacy")}{" "}
                <Link href="/politica-de-privacidad" className="text-[#A52430] hover:underline">
                  {t("privacy_link")}
                </Link>
              </span>
            </label>

            {error && (
              <p className="font-[family-name:var(--font-body)] text-[14px] text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="mt-2 w-full rounded-lg bg-[#A52430] py-4 font-[family-name:var(--font-heading)] text-[16px] font-bold uppercase tracking-[2px] text-white transition-colors duration-300 hover:bg-[#8a1e28] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? t("sending") : t("submit")}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
