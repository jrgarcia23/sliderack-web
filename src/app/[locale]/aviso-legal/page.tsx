import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const alternates = buildAlternates(locale, "/aviso-legal");
  return locale === "en"
    ? {
        title: "Legal Notice",
        description: "Legal notice and corporate information for Sliderack, a brand of Esnova Racks.",
        alternates,
      }
    : {
        title: "Aviso Legal",
        description: "Aviso legal e información corporativa de Sliderack, marca de Esnova Racks.",
        alternates,
      };
}

const h1Class = "font-[family-name:var(--font-heading)] text-[36px] font-bold uppercase text-[#201F20] mb-8";
const h2Class = "font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4";

function ContentES() {
  return (
    <>
      <h1 className={h1Class}>Aviso Legal</h1>
      <p className="mb-6">
        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), el propietario de la web le informa de lo siguiente:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li><strong>Denominación social:</strong> Esnova Racks</li>
        <li><strong>Marca comercial:</strong> Sliderack</li>
        <li><strong>NIF:</strong> A33880931</li>
        <li><strong>Domicilio:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias)</li>
        <li><strong>Teléfono:</strong> 985 30 89 80</li>
        <li><strong>Email:</strong> <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a></li>
      </ul>
      <p className="mb-6">
        Inscrita en el Registro Mercantil de Asturias al Tomo 3416, folio 80, sección 8, hoja número A-25765, inscripción 53.
      </p>
      <h2 className={h2Class}>Condiciones de uso</h2>
      <p className="mb-6">
        Con los límites establecidos en la ley, Esnova Racks no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que contienen sus páginas web.
      </p>
      <p className="mb-6">
        Los contenidos e información no vinculan a Esnova Racks ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo, pues se trata meramente de un servicio ofrecido con carácter informativo y divulgativo.
      </p>
      <h2 className={h2Class}>Enlaces externos</h2>
      <p className="mb-6">
        Las páginas de Internet de Sliderack pueden contener enlaces (links) a otras páginas de terceras partes que Esnova Racks no puede controlar. Por lo tanto, Esnova Racks no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.
      </p>
      <h2 className={h2Class}>Propiedad intelectual</h2>
      <p className="mb-6">
        Los textos, imágenes, sonidos, animaciones, software y el resto de los contenidos incluidos en este website son propiedad exclusiva de Esnova Racks o sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, deberá contar con el consentimiento expreso de Esnova Racks.
      </p>
      <h2 className={h2Class}>Protección de datos</h2>
      <p className="mb-6">
        Para acceder a algunos de los servicios que Sliderack ofrece a través del sitio web, deberá proporcionar algunos datos de carácter personal. En cumplimiento del Reglamento (UE) 2016/679 (RGPD), le informamos que sus datos personales serán tratados por Esnova Racks con el fin de prestarle y ofrecerle nuestros servicios, así como para informarle de las mejoras del sitio web.
      </p>
      <p className="mb-6">
        Podrá ejercer en todo momento sus derechos de acceso, rectificación, cancelación, oposición, limitación y portabilidad de sus datos de carácter personal, de manera gratuita, mediante email a{" "}
        <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>{" "}
        o en la dirección: C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias).
      </p>
    </>
  );
}

function ContentEN() {
  return (
    <>
      <h1 className={h1Class}>Legal Notice</h1>
      <p className="mb-6">
        In compliance with the information duty set out in Article 10 of Law 34/2002 of 11 July on Information Society Services and Electronic Commerce (LSSICE), the website owner provides the following information:
      </p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li><strong>Company name:</strong> Esnova Racks</li>
        <li><strong>Trade brand:</strong> Sliderack</li>
        <li><strong>Tax ID (NIF):</strong> A33880931</li>
        <li><strong>Registered address:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias), Spain</li>
        <li><strong>Phone:</strong> +34 985 30 89 80</li>
        <li><strong>Email:</strong> <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a></li>
      </ul>
      <p className="mb-6">
        Registered in the Mercantile Registry of Asturias, Volume 3416, folio 80, section 8, sheet A-25765, entry 53.
      </p>
      <h2 className={h2Class}>Terms of use</h2>
      <p className="mb-6">
        Within the limits established by law, Esnova Racks assumes no liability arising from the inaccuracy, incompleteness, or outdated nature of the data or information contained in its web pages.
      </p>
      <p className="mb-6">
        The content and information published on this website do not bind Esnova Racks nor constitute opinions, advice, or legal counsel of any kind. They are provided solely for informational and educational purposes.
      </p>
      <h2 className={h2Class}>External links</h2>
      <p className="mb-6">
        Sliderack web pages may contain links to third-party websites that Esnova Racks cannot control. Therefore, Esnova Racks cannot accept responsibility for any content that may appear on third-party pages.
      </p>
      <h2 className={h2Class}>Intellectual property</h2>
      <p className="mb-6">
        The texts, images, sounds, animations, software and all other content included on this website are the exclusive property of Esnova Racks or its licensors. Any act of transmission, distribution, assignment, reproduction, storage or public communication, in whole or in part, requires the express consent of Esnova Racks.
      </p>
      <h2 className={h2Class}>Data protection</h2>
      <p className="mb-6">
        To access some of the services offered by Sliderack through the website, you may need to provide personal data. In compliance with Regulation (EU) 2016/679 (GDPR), we inform you that your personal data will be processed by Esnova Racks for the purpose of providing our services and keeping you informed of updates to the website.
      </p>
      <p className="mb-6">
        You may exercise your rights of access, rectification, erasure, objection, restriction, and portability of your personal data free of charge by emailing{" "}
        <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>{" "}
        or by post to: C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias), Spain.
      </p>
    </>
  );
}

export default async function AvisoLegal() {
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
