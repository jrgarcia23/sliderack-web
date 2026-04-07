"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
};

const DEFAULT_PREFS: CookiePreferences = { necessary: true, analytics: false };

export function getCookiePreferences(): CookiePreferences {
  if (typeof window === "undefined") return DEFAULT_PREFS;
  try {
    const stored = localStorage.getItem("cookie-preferences");
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return DEFAULT_PREFS;
}

export function saveCookiePreferences(prefs: CookiePreferences) {
  localStorage.setItem("cookie-consent", "configured");
  localStorage.setItem("cookie-preferences", JSON.stringify(prefs));
  window.dispatchEvent(new Event("cookie-consent-update"));
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function acceptAll() {
    saveCookiePreferences({ necessary: true, analytics: true });
    setVisible(false);
  }

  function rejectAll() {
    saveCookiePreferences({ necessary: true, analytics: false });
    setVisible(false);
  }

  function saveConfig() {
    saveCookiePreferences({ necessary: true, analytics });
    setVisible(false);
    setShowConfig(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[9999] mx-auto max-w-[580px] rounded-2xl bg-[#201F20] shadow-2xl shadow-black/30 border border-white/10 overflow-hidden">
      {/* Main banner */}
      <div className="px-6 pt-5 pb-4">
        <p className="font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white mb-2">
          Cookies
        </p>
        <p className="font-[family-name:var(--font-body)] text-[13px] leading-relaxed text-white/70">
          Usamos cookies propias (necesarias) y de terceros (anal&iacute;tica) para mejorar tu experiencia.{" "}
          <Link href="/politica-de-cookies" className="text-[#A52430] underline hover:text-white">
            M&aacute;s info
          </Link>
        </p>
      </div>

      {/* Config panel */}
      {showConfig && (
        <div className="px-6 pb-4 border-t border-white/10 pt-4 space-y-3">
          <label className="flex items-center justify-between">
            <div>
              <span className="font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase text-white">Necesarias</span>
              <p className="font-[family-name:var(--font-body)] text-[12px] text-white/50">Funcionamiento b&aacute;sico del sitio</p>
            </div>
            <div className="w-10 h-5 bg-[#A52430] rounded-full relative cursor-not-allowed opacity-60">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full" />
            </div>
          </label>
          <label className="flex items-center justify-between cursor-pointer">
            <div>
              <span className="font-[family-name:var(--font-heading)] text-[13px] font-semibold uppercase text-white">Anal&iacute;tica</span>
              <p className="font-[family-name:var(--font-body)] text-[12px] text-white/50">Google Analytics &mdash; uso an&oacute;nimo del sitio</p>
            </div>
            <button
              type="button"
              onClick={() => setAnalytics(!analytics)}
              className={`w-10 h-5 rounded-full relative transition-colors ${analytics ? "bg-[#A52430]" : "bg-white/20"}`}
            >
              <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all ${analytics ? "right-0.5" : "left-0.5"}`} />
            </button>
          </label>
        </div>
      )}

      {/* Buttons */}
      <div className="px-6 pb-5 flex gap-2">
        {showConfig ? (
          <button
            onClick={saveConfig}
            className="flex-1 rounded-lg bg-[#A52430] py-2.5 font-[family-name:var(--font-heading)] text-[13px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
          >
            Guardar preferencias
          </button>
        ) : (
          <>
            <button
              onClick={rejectAll}
              className="flex-1 rounded-lg border border-white/20 py-2.5 font-[family-name:var(--font-heading)] text-[13px] font-bold uppercase text-white hover:border-white/40 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => setShowConfig(true)}
              className="flex-1 rounded-lg border border-white/20 py-2.5 font-[family-name:var(--font-heading)] text-[13px] font-bold uppercase text-white hover:border-white/40 transition-colors"
            >
              Configurar
            </button>
            <button
              onClick={acceptAll}
              className="flex-1 rounded-lg bg-[#A52430] py-2.5 font-[family-name:var(--font-heading)] text-[13px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
            >
              Aceptar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
