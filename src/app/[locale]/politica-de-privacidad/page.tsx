import { getLocale } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata() {
  const locale = await getLocale();
  const alternates = buildAlternates(locale, "/politica-de-privacidad");
  return locale === "en"
    ? {
        title: "Privacy Policy",
        description: "Privacy policy and personal data protection for Sliderack, a brand of Esnova Racks (NIF A33880931). GDPR compliant.",
        alternates,
      }
    : {
        title: "Política de Privacidad",
        description: "Política de privacidad y protección de datos personales de Sliderack, marca de Esnova Racks (NIF A33880931). RGPD.",
        alternates,
      };
}

const h1Class = "font-[family-name:var(--font-heading)] text-[36px] font-bold uppercase text-[#201F20] mb-8";
const h2Class = "font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4";
const linkClass = "text-[#A52430] hover:underline";

function ContentES() {
  return (
    <>
      <h1 className={h1Class}>Política de Privacidad</h1>
      <h2 className={h2Class}>Responsable del tratamiento</h2>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li><strong>Denominación social:</strong> Esnova Racks</li>
        <li><strong>Marca comercial:</strong> Sliderack</li>
        <li><strong>NIF:</strong> A33880931</li>
        <li><strong>Domicilio:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias)</li>
        <li><strong>Email de contacto:</strong> <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a></li>
        <li><strong>Teléfono:</strong> 985 30 89 80</li>
      </ul>
      <h2 className={h2Class}>Protección de datos según el RGPD</h2>
      <p className="mb-6">
        Esnova Racks, en cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), informa que los datos personales recogidos a través de los formularios del sitio web sliderack.es son tratados por Esnova Racks como responsable del tratamiento.
      </p>
      <h2 className={h2Class}>Finalidad del tratamiento</h2>
      <ol className="mb-6 list-decimal pl-6 space-y-2">
        <li>Gestionar las solicitudes de información realizadas a través del formulario de contacto.</li>
        <li>Prestación de servicios conforme a las necesidades del cliente y cumplimiento del contrato.</li>
        <li>Envío de información comercial y newsletters sobre nuevos servicios, solo con consentimiento previo.</li>
      </ol>
      <h2 className={h2Class}>Base legal del tratamiento</h2>
      <p className="mb-6">
        El tratamiento de los datos se basa en: (1) el consentimiento libre, específico, informado e inequívoco del interesado, otorgado mediante la aceptación de esta política de privacidad; (2) la ejecución de un contrato o medidas precontractuales a solicitud del interesado.
      </p>
      <h2 className={h2Class}>Destinatarios</h2>
      <p className="mb-6">
        Los datos no serán comunicados a terceros ajenos a Esnova Racks, salvo obligación legal o cuando sea necesario para la prestación del servicio solicitado.
      </p>
      <h2 className={h2Class}>Transferencias internacionales</h2>
      <p className="mb-6">
        Este sitio web utiliza Google Analytics para el análisis de uso. Google puede transferir datos a servidores fuera del Espacio Económico Europeo (EEE). Estas transferencias se realizan al amparo de las cláusulas contractuales tipo aprobadas por la Comisión Europea y el marco de adecuación UE-EE.UU. (EU-US Data Privacy Framework). No se realizarán otras transferencias internacionales de datos.
      </p>
      <h2 className={h2Class}>Período de conservación</h2>
      <p className="mb-6">
        Los datos personales se conservarán mientras se mantenga la relación comercial o hasta que se solicite su supresión, y durante los plazos legales en los que pudieran derivarse responsabilidades por los servicios prestados.
      </p>
      <h2 className={h2Class}>Derechos del usuario</h2>
      <p className="mb-6">El usuario podrá ejercer en todo momento los siguientes derechos reconocidos por el RGPD:</p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li>Derecho de <strong>acceso</strong> a sus datos personales.</li>
        <li>Derecho de <strong>rectificación</strong> de datos inexactos.</li>
        <li>Derecho de <strong>supresión</strong> (&ldquo;derecho al olvido&rdquo;).</li>
        <li>Derecho a la <strong>limitación</strong> del tratamiento.</li>
        <li>Derecho a la <strong>portabilidad</strong> de los datos.</li>
        <li>Derecho de <strong>oposición</strong> al tratamiento.</li>
      </ul>
      <p className="mb-6">
        Para ejercer estos derechos, puede dirigirse a <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a> o por correo postal a: C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias). Se responderá en un plazo máximo de un mes.
      </p>
      <h2 className={h2Class}>Derecho a reclamar ante la autoridad de control</h2>
      <p className="mb-6">
        Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>, con sede en C/ Jorge Juan 6, 28001 Madrid — <a href="https://www.aepd.es" className={linkClass} target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>
      <h2 className={h2Class}>Decisiones automatizadas</h2>
      <p className="mb-6">No se toman decisiones automatizadas ni se realizan perfiles basados en los datos personales proporcionados.</p>
      <h2 className={h2Class}>Comunicaciones comerciales</h2>
      <p className="mb-6">
        De acuerdo con la LSSI, Esnova Racks no enviará publicidad sin haber recabado previamente la solicitud o autorización expresa. El usuario puede oponerse en cualquier momento escribiendo a <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a>.
      </p>
    </>
  );
}

function ContentEN() {
  return (
    <>
      <h1 className={h1Class}>Privacy Policy</h1>
      <h2 className={h2Class}>Data controller</h2>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li><strong>Company name:</strong> Esnova Racks</li>
        <li><strong>Trade brand:</strong> Sliderack</li>
        <li><strong>Tax ID (NIF):</strong> A33880931</li>
        <li><strong>Registered address:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias), Spain</li>
        <li><strong>Contact email:</strong> <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a></li>
        <li><strong>Phone:</strong> +34 985 30 89 80</li>
      </ul>
      <h2 className={h2Class}>Data protection under the GDPR</h2>
      <p className="mb-6">
        Esnova Racks, in compliance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and Organic Law 3/2018 on Personal Data Protection and Guarantee of Digital Rights (LOPDGDD), informs you that personal data collected through the forms on the website sliderack.es is processed by Esnova Racks as data controller.
      </p>
      <h2 className={h2Class}>Purposes of processing</h2>
      <ol className="mb-6 list-decimal pl-6 space-y-2">
        <li>To manage information requests submitted through the contact form.</li>
        <li>To provide services in accordance with customer requirements and fulfil the contract.</li>
        <li>To send commercial communications and newsletters about new services, only with prior consent.</li>
      </ol>
      <h2 className={h2Class}>Legal basis for processing</h2>
      <p className="mb-6">
        Data processing is based on: (1) the free, specific, informed and unambiguous consent of the data subject, given by accepting this privacy policy; (2) the performance of a contract or pre-contractual measures at the request of the data subject.
      </p>
      <h2 className={h2Class}>Recipients</h2>
      <p className="mb-6">
        Data will not be shared with third parties outside Esnova Racks, unless required by law or necessary for the provision of the requested service.
      </p>
      <h2 className={h2Class}>International transfers</h2>
      <p className="mb-6">
        This website uses Google Analytics for usage analysis. Google may transfer data to servers outside the European Economic Area (EEA). Such transfers are carried out under standard contractual clauses approved by the European Commission and the EU-US Data Privacy Framework. No other international data transfers will take place.
      </p>
      <h2 className={h2Class}>Retention period</h2>
      <p className="mb-6">
        Personal data will be retained for as long as the business relationship is maintained or until deletion is requested, and for the legal periods during which liability may arise from the services provided.
      </p>
      <h2 className={h2Class}>Your rights</h2>
      <p className="mb-6">You may exercise the following rights recognised under the GDPR at any time:</p>
      <ul className="mb-6 list-disc pl-6 space-y-1">
        <li>Right of <strong>access</strong> to your personal data.</li>
        <li>Right to <strong>rectification</strong> of inaccurate data.</li>
        <li>Right to <strong>erasure</strong> (&ldquo;right to be forgotten&rdquo;).</li>
        <li>Right to <strong>restriction</strong> of processing.</li>
        <li>Right to <strong>data portability</strong>.</li>
        <li>Right to <strong>object</strong> to processing.</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, contact us at <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a> or by post to: C/ Ataulfo Friera Tarfe, 5, 33211 — Gijón (Asturias), Spain. We will respond within one month.
      </p>
      <h2 className={h2Class}>Right to lodge a complaint</h2>
      <p className="mb-6">
        If you believe that the processing of your data does not comply with applicable regulations, you have the right to lodge a complaint with the <strong>Spanish Data Protection Agency (AEPD)</strong>, located at C/ Jorge Juan 6, 28001 Madrid, Spain — <a href="https://www.aepd.es" className={linkClass} target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
      </p>
      <h2 className={h2Class}>Automated decisions</h2>
      <p className="mb-6">No automated decision-making or profiling is carried out based on the personal data provided.</p>
      <h2 className={h2Class}>Commercial communications</h2>
      <p className="mb-6">
        In accordance with Spanish information society services law (LSSI), Esnova Racks will not send advertising without having previously obtained a request or express authorisation. You may opt out at any time by writing to <a href="mailto:info@sliderack.com" className={linkClass}>info@sliderack.com</a>.
      </p>
    </>
  );
}

export default async function PoliticaPrivacidad() {
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
