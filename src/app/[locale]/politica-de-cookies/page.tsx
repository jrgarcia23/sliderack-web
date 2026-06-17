import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiePreferencesPanel from "./CookiePreferencesPanel";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const alternates = buildAlternates(locale, "/politica-de-cookies");
  return locale === "en"
    ? {
        title: "Cookie Policy",
        description: "Cookie policy for the Sliderack website (Esnova Racks). Find out which cookies we use and configure your preferences.",
        alternates,
      }
    : {
        title: "Política de Cookies",
        description: "Política de cookies del sitio web Sliderack (Esnova Racks). Consulta qué cookies utilizamos y configura tus preferencias.",
        alternates,
      };
}

const h1Class = "font-[family-name:var(--font-heading)] text-[36px] font-bold uppercase text-[#201F20] mb-8";
const h2Class = "font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4";
const h3Class = "font-[family-name:var(--font-heading)] text-[20px] font-bold text-[#201F20] mt-8 mb-3";
const thClass = "py-3 pr-4 text-left font-[family-name:var(--font-heading)] font-bold uppercase text-[#201F20]";

function ContentES() {
  return (
    <>
      <h1 className={h1Class}>Política de Cookies</h1>
      <CookiePreferencesPanel />
      <h2 className={h2Class}>¿Qué son las cookies?</h2>
      <p className="mb-6">
        Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de la sociedad de la información.
      </p>
      <h2 className={h2Class}>Tipos de cookies</h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Cookies propias:</strong> enviadas desde un dominio gestionado por el editor.</li>
        <li><strong>Cookies de terceros:</strong> enviadas desde un dominio no gestionado por el editor.</li>
        <li><strong>Cookies de sesión:</strong> recaban datos mientras el usuario accede a la web.</li>
        <li><strong>Cookies persistentes:</strong> datos almacenados durante un periodo definido por el responsable.</li>
      </ul>
      <h3 className={h3Class}>Clasificación por finalidad</h3>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Técnicas:</strong> permiten la navegación y el uso de funciones del sitio.</li>
        <li><strong>De personalización:</strong> permiten acceder al servicio con características predefinidas (idioma, navegador, etc.).</li>
        <li><strong>De análisis:</strong> permiten medir y analizar el comportamiento de los usuarios.</li>
        <li><strong>Publicitarias:</strong> permiten gestionar los espacios publicitarios del sitio web.</li>
      </ul>
      <h2 className={h2Class}>Cookies utilizadas en este portal</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b-2 border-[#A52430]">
              <th className={thClass}>Cookie</th>
              <th className={thClass}>Duración</th>
              <th className={thClass}>Tipo</th>
              <th className="py-3 text-left font-[family-name:var(--font-heading)] font-bold uppercase text-[#201F20]">Finalidad</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="py-2 pr-4">cookie-consent</td><td className="py-2 pr-4">Permanente</td><td className="py-2 pr-4">Propia (localStorage)</td><td className="py-2">Técnica — Almacena tu elección de cookies</td></tr>
            <tr><td className="py-2 pr-4">cookie-preferences</td><td className="py-2 pr-4">Permanente</td><td className="py-2 pr-4">Propia (localStorage)</td><td className="py-2">Técnica — Guarda tus preferencias de cookies</td></tr>
            <tr><td className="py-2 pr-4">_ga</td><td className="py-2 pr-4">2 años</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Analítica — Distingue usuarios únicos</td></tr>
            <tr><td className="py-2 pr-4">_ga_*</td><td className="py-2 pr-4">2 años</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Analítica — Mantiene el estado de la sesión</td></tr>
            <tr><td className="py-2 pr-4">_gid</td><td className="py-2 pr-4">24 horas</td><td className="py-2 pr-4">Tercero (Google)</td><td className="py-2">Analítica — Distingue usuarios</td></tr>
          </tbody>
        </table>
      </div>
      <h2 className={h2Class}>¿Cómo desactivar las cookies?</h2>
      <p className="mb-6">
        Además del panel de preferencias de arriba, puede configurar su navegador para aceptar o rechazar cookies:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies</li>
        <li>Mozilla Firefox: Opciones → Privacidad &amp; Seguridad</li>
        <li>Safari: Preferencias → Privacidad</li>
        <li>Microsoft Edge: Configuración → Privacidad</li>
      </ul>
      <h2 className={h2Class}>Contacto</h2>
      <p className="mb-6">
        Para cualquier consulta sobre esta política de cookies, puede contactarnos en{" "}
        <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>.
      </p>
    </>
  );
}

function ContentEN() {
  return (
    <>
      <h1 className={h1Class}>Cookie Policy</h1>
      <CookiePreferencesPanel />
      <h2 className={h2Class}>What are cookies?</h2>
      <p className="mb-6">
        Cookies are files that can be downloaded to your device through web pages. They are tools that play an essential role in the provision of many information society services.
      </p>
      <h2 className={h2Class}>Types of cookies</h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>First-party cookies:</strong> sent from a domain managed by the publisher.</li>
        <li><strong>Third-party cookies:</strong> sent from a domain not managed by the publisher.</li>
        <li><strong>Session cookies:</strong> collect data while the user is browsing the website.</li>
        <li><strong>Persistent cookies:</strong> data stored for a period defined by the data controller.</li>
      </ul>
      <h3 className={h3Class}>Classification by purpose</h3>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li><strong>Technical:</strong> enable navigation and use of website features.</li>
        <li><strong>Personalisation:</strong> allow access to the service with predefined settings (language, browser, etc.).</li>
        <li><strong>Analytics:</strong> allow measurement and analysis of user behaviour.</li>
        <li><strong>Advertising:</strong> allow management of advertising spaces on the website.</li>
      </ul>
      <h2 className={h2Class}>Cookies used on this website</h2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse text-[14px]">
          <thead>
            <tr className="border-b-2 border-[#A52430]">
              <th className={thClass}>Cookie</th>
              <th className={thClass}>Duration</th>
              <th className={thClass}>Type</th>
              <th className="py-3 text-left font-[family-name:var(--font-heading)] font-bold uppercase text-[#201F20]">Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr><td className="py-2 pr-4">cookie-consent</td><td className="py-2 pr-4">Persistent</td><td className="py-2 pr-4">Own (localStorage)</td><td className="py-2">Technical — Stores your cookie choice</td></tr>
            <tr><td className="py-2 pr-4">cookie-preferences</td><td className="py-2 pr-4">Persistent</td><td className="py-2 pr-4">Own (localStorage)</td><td className="py-2">Technical — Saves your cookie preferences</td></tr>
            <tr><td className="py-2 pr-4">_ga</td><td className="py-2 pr-4">2 years</td><td className="py-2 pr-4">Third-party (Google)</td><td className="py-2">Analytics — Distinguishes unique users</td></tr>
            <tr><td className="py-2 pr-4">_ga_*</td><td className="py-2 pr-4">2 years</td><td className="py-2 pr-4">Third-party (Google)</td><td className="py-2">Analytics — Maintains session state</td></tr>
            <tr><td className="py-2 pr-4">_gid</td><td className="py-2 pr-4">24 hours</td><td className="py-2 pr-4">Third-party (Google)</td><td className="py-2">Analytics — Distinguishes users</td></tr>
          </tbody>
        </table>
      </div>
      <h2 className={h2Class}>How to disable cookies?</h2>
      <p className="mb-6">
        In addition to the preferences panel above, you can configure your browser to accept or reject cookies:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li>Google Chrome: Settings → Privacy and security → Cookies</li>
        <li>Mozilla Firefox: Options → Privacy &amp; Security</li>
        <li>Safari: Preferences → Privacy</li>
        <li>Microsoft Edge: Settings → Privacy</li>
      </ul>
      <h2 className={h2Class}>Contact</h2>
      <p className="mb-6">
        For any questions about this cookie policy, please contact us at{" "}
        <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>.
      </p>
    </>
  );
}

export default async function PoliticaCookies() {
  const locale = await getLocale();
  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <article className="mx-auto max-w-[800px] font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#444]">
          {locale === "en" ? <ContentEN /> : <ContentES />}
        </article>
      </main>
      <Footer />
    </>
  );
}
