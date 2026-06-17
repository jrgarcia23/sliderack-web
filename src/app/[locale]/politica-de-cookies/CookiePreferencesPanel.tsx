"use client";

import { useState, useEffect } from "react";
import { getCookiePreferences, saveCookiePreferences } from "@/components/CookieBanner";

export default function CookiePreferencesPanel() {
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const prefs = getCookiePreferences();
    setAnalytics(prefs.analytics);
  }, []);

  function save() {
    saveCookiePreferences({ necessary: true, analytics });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-[#f8f8f8] p-6 mb-10">
      <h2 className="font-[family-name:var(--font-heading)] text-[20px] font-bold uppercase text-[#201F20] mb-4">
        Tus preferencias de cookies
      </h2>

      <div className="space-y-4">
        {/* Necesarias */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[#201F20]">
              Cookies necesarias
            </p>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-[#888]">
              Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.
            </p>
          </div>
          <div className="w-11 h-6 bg-[#A52430] rounded-full relative cursor-not-allowed opacity-60 shrink-0 ml-4">
            <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
          </div>
        </div>

        {/* Anal&iacute;tica */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[#201F20]">
              Cookies de anal&iacute;tica
            </p>
            <p className="font-[family-name:var(--font-body)] text-[13px] text-[#888]">
              Google Analytics &mdash; nos ayudan a entender c&oacute;mo se usa el sitio de forma an&oacute;nima.
            </p>
          </div>
          <button
            type="button"
            onClick={() => { setAnalytics(!analytics); setSaved(false); }}
            className={`w-11 h-6 rounded-full relative transition-colors shrink-0 ml-4 ${analytics ? "bg-[#A52430]" : "bg-gray-300"}`}
          >
            <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${analytics ? "right-0.5" : "left-0.5"}`} />
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={save}
          className="rounded-lg bg-[#A52430] px-6 py-2.5 font-[family-name:var(--font-heading)] text-[14px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
        >
          Guardar preferencias
        </button>
        {saved && (
          <span className="font-[family-name:var(--font-body)] text-[14px] text-green-600">
            Preferencias guardadas
          </span>
        )}
      </div>
    </div>
  );
}
