import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Blog de Almacenaje y Organizaci\u00f3n Industrial",
  description:
    "Art\u00edculos sobre almacenaje industrial, organizaci\u00f3n de talleres, estanter\u00edas deslizantes y soluciones de almacenamiento profesional. Por Sliderack.",
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog Sliderack",
  description:
    "Art\u00edculos sobre almacenaje industrial, organizaci\u00f3n de talleres y soluciones de almacenamiento profesional.",
  url: "https://sliderack.es/blog",
  publisher: {
    "@type": "Organization",
    name: "Sliderack",
    url: "https://sliderack.es",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
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
