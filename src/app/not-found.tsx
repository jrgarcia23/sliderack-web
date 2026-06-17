// Global fallback for routes outside the [locale] segment. It renders within the
// root layout, which has NO NextIntlClientProvider — so it must stay i18n-free
// (no Header/Footer, no useTranslations, no localized Link). Locale-aware 404s are
// handled by src/app/[locale]/not-found.tsx.
export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-28 text-center">
      <span className="font-[family-name:var(--font-heading)] text-[100px] md:text-[140px] font-bold leading-none text-[#A52430]/12">
        404
      </span>
      <h1 className="mt-2 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20]">
        Este armario está vacío
      </h1>
      <p className="mt-4 max-w-[500px] font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
        Parece que esta página se ha deslizado fuera de su sitio. El resto de nuestro sistema de almacenaje sigue en orden.
      </p>
      <a
        href="/"
        className="mt-8 rounded-lg bg-[#A52430] px-8 py-3 font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
      >
        Volver al inicio
      </a>
    </main>
  );
}
