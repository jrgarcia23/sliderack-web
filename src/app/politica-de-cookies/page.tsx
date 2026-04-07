import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiePreferencesPanel from "./CookiePreferencesPanel";

export const metadata = {
  title: "Pol\u00edtica de Cookies",
  description: "Pol\u00edtica de cookies del sitio web Sliderack (Esnova Racks).",
};

export default function PoliticaCookies() {
  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <article className="mx-auto max-w-[800px] font-[family-name:var(--font-heebo)] text-[16px] leading-[1.8] text-[#444]">
          <h1 className="font-[family-name:var(--font-rajdhani)] text-[36px] font-bold uppercase text-[#201F20] mb-8">
            Pol&iacute;tica de Cookies
          </h1>

          {/* Panel de preferencias */}
          <CookiePreferencesPanel />

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            &iquest;Qu&eacute; son las cookies?
          </h2>
          <p className="mb-6">
            Las cookies son archivos que se pueden descargar en su equipo a trav&eacute;s de las p&aacute;ginas web. Son herramientas que tienen un papel esencial para la prestaci&oacute;n de numerosos servicios de la sociedad de la informaci&oacute;n.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Tipos de cookies
          </h2>
          <ul className="mb-6 list-disc pl-6 space-y-2">
            <li><strong>Cookies propias:</strong> enviadas desde un dominio gestionado por el editor.</li>
            <li><strong>Cookies de terceros:</strong> enviadas desde un dominio no gestionado por el editor.</li>
            <li><strong>Cookies de sesi&oacute;n:</strong> recaban datos mientras el usuario accede a la web.</li>
            <li><strong>Cookies persistentes:</strong> datos almacenados durante un periodo definido por el responsable.</li>
          </ul>

          <h3 className="font-[family-name:var(--font-rajdhani)] text-[20px] font-bold text-[#201F20] mt-8 mb-3">
            Clasificaci&oacute;n por finalidad
          </h3>
          <ul className="mb-6 list-disc pl-6 space-y-2">
            <li><strong>T&eacute;cnicas:</strong> permiten la navegaci&oacute;n y el uso de funciones del sitio.</li>
            <li><strong>De personalizaci&oacute;n:</strong> permiten acceder al servicio con caracter&iacute;sticas predefinidas (idioma, navegador, etc.).</li>
            <li><strong>De an&aacute;lisis:</strong> permiten medir y analizar el comportamiento de los usuarios.</li>
            <li><strong>Publicitarias:</strong> permiten gestionar los espacios publicitarios del sitio web.</li>
          </ul>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Cookies utilizadas en este portal
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-[14px]">
              <thead>
                <tr className="border-b-2 border-[#A52430]">
                  <th className="py-3 pr-4 text-left font-[family-name:var(--font-rajdhani)] font-bold uppercase text-[#201F20]">Cookie</th>
                  <th className="py-3 pr-4 text-left font-[family-name:var(--font-rajdhani)] font-bold uppercase text-[#201F20]">Duraci&oacute;n</th>
                  <th className="py-3 pr-4 text-left font-[family-name:var(--font-rajdhani)] font-bold uppercase text-[#201F20]">Tipo</th>
                  <th className="py-3 text-left font-[family-name:var(--font-rajdhani)] font-bold uppercase text-[#201F20]">Finalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="py-2 pr-4">cookie-consent</td><td className="py-2 pr-4">Permanente</td><td className="py-2 pr-4">Propia</td><td className="py-2">T&eacute;cnica &mdash; Almacena tu elecci&oacute;n de cookies</td></tr>
                <tr><td className="py-2 pr-4">cookie-preferences</td><td className="py-2 pr-4">Permanente</td><td className="py-2 pr-4">Propia</td><td className="py-2">T&eacute;cnica &mdash; Guarda tus preferencias de cookies</td></tr>
                <tr><td className="py-2 pr-4">_ga</td><td className="py-2 pr-4">2 a&ntilde;os</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Anal&iacute;tica &mdash; Distingue usuarios &uacute;nicos</td></tr>
                <tr><td className="py-2 pr-4">_gid</td><td className="py-2 pr-4">24 horas</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Anal&iacute;tica &mdash; Distingue usuarios</td></tr>
                <tr><td className="py-2 pr-4">_gat</td><td className="py-2 pr-4">1 minuto</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Anal&iacute;tica &mdash; Limita el porcentaje de solicitudes</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            &iquest;C&oacute;mo desactivar las cookies?
          </h2>
          <p className="mb-6">
            Adem&aacute;s del panel de preferencias de arriba, puede configurar su navegador para aceptar o rechazar cookies. Los procedimientos pueden diferir entre navegadores:
          </p>
          <ul className="mb-6 list-disc pl-6 space-y-1">
            <li>Google Chrome: Configuraci&oacute;n &rarr; Privacidad y seguridad &rarr; Cookies</li>
            <li>Mozilla Firefox: Opciones &rarr; Privacidad &amp; Seguridad</li>
            <li>Safari: Preferencias &rarr; Privacidad</li>
            <li>Microsoft Edge: Configuraci&oacute;n &rarr; Privacidad</li>
          </ul>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Contacto
          </h2>
          <p className="mb-6">
            Para cualquier consulta sobre esta pol&iacute;tica de cookies, puede contactarnos en{" "}
            <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
