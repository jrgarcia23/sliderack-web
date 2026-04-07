import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog",
  description: "Art\u00edculos sobre almacenaje, organizaci\u00f3n de talleres y soluciones Sliderack.",
  robots: { index: false, follow: false },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="font-[family-name:var(--font-rajdhani)] text-[36px] md:text-[48px] font-bold uppercase text-[#201F20] mb-6">
            Blog
          </h1>
          <p className="font-[family-name:var(--font-heebo)] text-[17px] text-[#888] mb-12">
            Pr&oacute;ximamente publicaremos art&iacute;culos sobre almacenaje, organizaci&oacute;n de espacios de trabajo y novedades Sliderack.
          </p>
          <div className="inline-block rounded-full bg-[#f5f5f5] px-6 py-3">
            <span className="font-[family-name:var(--font-rajdhani)] text-[14px] font-semibold uppercase tracking-[2px] text-[#999]">
              Pr&oacute;ximamente
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
