import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function LocaleNotFound() {
  const t = await getTranslations("pages.notFound");
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-28 text-center">
        <span className="font-[family-name:var(--font-heading)] text-[100px] md:text-[140px] font-bold leading-none text-[#A52430]/12">
          404
        </span>
        <h1 className="mt-2 font-[family-name:var(--font-heading)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20]">
          {t("heading")}
        </h1>
        <p className="mt-4 max-w-[500px] font-[family-name:var(--font-body)] text-[16px] leading-relaxed text-[#666]">
          {t("lead")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="rounded-lg bg-[#A52430] px-8 py-3 font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
          >
            {t("cta")}
          </Link>
          <Link
            href="/sistemas"
            className="rounded-lg border-2 border-gray-300 px-8 py-3 font-[family-name:var(--font-heading)] text-[15px] font-bold uppercase text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition-colors"
          >
            {t("ctaModels")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
