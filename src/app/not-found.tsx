import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center">
        {/* Ilustraci&oacute;n: estanter&iacute;a vac&iacute;a con cajones abiertos */}
        <div className="relative mb-8">
          <div className="flex gap-2 items-end">
            {/* M&oacute;dulo izquierdo */}
            <div className="flex flex-col gap-1">
              <div className="w-16 h-10 border-2 border-[#A52430]/20 rounded bg-[#A52430]/5" />
              <div className="w-16 h-10 border-2 border-[#A52430]/20 rounded bg-[#A52430]/5" />
              <div className="w-16 h-10 border-2 border-[#A52430]/30 rounded bg-[#A52430]/10 translate-x-4 shadow-md" />
            </div>
            {/* M&oacute;dulo central - vac&iacute;o */}
            <div className="flex flex-col gap-1 items-center">
              <div className="w-20 h-10 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-300 text-[11px] font-[family-name:var(--font-rajdhani)] uppercase">vac&iacute;o</span>
              </div>
              <div className="w-20 h-10 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-300 text-[11px] font-[family-name:var(--font-rajdhani)] uppercase">vac&iacute;o</span>
              </div>
              <div className="w-20 h-10 border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-300 text-[20px]">?</span>
              </div>
            </div>
            {/* M&oacute;dulo derecho */}
            <div className="flex flex-col gap-1">
              <div className="w-16 h-10 border-2 border-[#A52430]/20 rounded bg-[#A52430]/5" />
              <div className="w-16 h-10 border-2 border-[#A52430]/30 rounded bg-[#A52430]/10 -translate-x-3 shadow-md" />
              <div className="w-16 h-10 border-2 border-[#A52430]/20 rounded bg-[#A52430]/5" />
            </div>
          </div>
        </div>

        <span className="font-[family-name:var(--font-rajdhani)] text-[80px] md:text-[120px] font-bold leading-none text-[#A52430]/15">
          404
        </span>
        <h1 className="mt-2 font-[family-name:var(--font-rajdhani)] text-[28px] md:text-[36px] font-bold uppercase text-[#201F20]">
          Este m&oacute;dulo est&aacute; vac&iacute;o
        </h1>
        <p className="mt-4 max-w-[500px] font-[family-name:var(--font-heebo)] text-[16px] leading-relaxed text-[#666]">
          Parece que esta p&aacute;gina se ha deslizado fuera de su sitio. No te preocupes, el resto de nuestro sistema de almacenaje sigue en orden.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="rounded-lg bg-[#A52430] px-8 py-3 font-[family-name:var(--font-rajdhani)] text-[15px] font-bold uppercase text-white hover:bg-[#8a1e28] transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/sistemas"
            className="rounded-lg border-2 border-gray-300 px-8 py-3 font-[family-name:var(--font-rajdhani)] text-[15px] font-bold uppercase text-[#201F20] hover:border-[#A52430] hover:text-[#A52430] transition-colors"
          >
            Ver sistemas
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
