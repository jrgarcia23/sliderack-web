import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pol\u00edtica de Privacidad",
  description:
    "Pol\u00edtica de privacidad y protecci\u00f3n de datos personales de Sliderack, marca de Esnova Racks (NIF A33880931). RGPD.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <article className="mx-auto max-w-[800px] font-[family-name:var(--font-heebo)] text-[16px] leading-[1.8] text-[#444]">
          <h1 className="font-[family-name:var(--font-rajdhani)] text-[36px] font-bold uppercase text-[#201F20] mb-8">
            Pol&iacute;tica de Privacidad
          </h1>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Responsable del tratamiento
          </h2>
          <ul className="mb-6 list-disc pl-6 space-y-1">
            <li><strong>Denominaci&oacute;n social:</strong> Esnova Racks</li>
            <li><strong>Marca comercial:</strong> Sliderack</li>
            <li><strong>NIF:</strong> A33880931</li>
            <li><strong>Domicilio:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 &mdash; Gij&oacute;n (Asturias)</li>
            <li><strong>Email de contacto:</strong> <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a></li>
            <li><strong>Tel&eacute;fono:</strong> 985 30 89 80</li>
          </ul>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Protecci&oacute;n de datos seg&uacute;n el RGPD
          </h2>
          <p className="mb-6">
            Esnova Racks, en cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo (RGPD) y la Ley Org&aacute;nica 3/2018 de Protecci&oacute;n de Datos Personales y garant&iacute;a de los derechos digitales (LOPDGDD), informa que los datos personales recogidos a trav&eacute;s de los formularios del sitio web sliderack.es son tratados por Esnova Racks como responsable del tratamiento.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Finalidad del tratamiento
          </h2>
          <ol className="mb-6 list-decimal pl-6 space-y-2">
            <li>Gestionar las solicitudes de informaci&oacute;n realizadas a trav&eacute;s del formulario de contacto.</li>
            <li>Prestaci&oacute;n de servicios conforme a las necesidades del cliente y cumplimiento del contrato.</li>
            <li>Env&iacute;o de informaci&oacute;n comercial y newsletters sobre nuevos servicios, solo con consentimiento previo.</li>
          </ol>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Base legal del tratamiento
          </h2>
          <p className="mb-6">
            El tratamiento de los datos se basa en: (1) el consentimiento libre, espec&iacute;fico, informado e inequ&iacute;voco del interesado, otorgado mediante la aceptaci&oacute;n de esta pol&iacute;tica de privacidad; (2) la ejecuci&oacute;n de un contrato o medidas precontractuales a solicitud del interesado.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Destinatarios
          </h2>
          <p className="mb-6">
            Los datos no ser&aacute;n comunicados a terceros ajenos a Esnova Racks, salvo obligaci&oacute;n legal o cuando sea necesario para la prestaci&oacute;n del servicio solicitado.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Transferencias internacionales
          </h2>
          <p className="mb-6">
            Este sitio web utiliza Google Analytics para el an&aacute;lisis de uso. Google puede transferir datos a servidores fuera del Espacio Econ&oacute;mico Europeo (EEE). Estas transferencias se realizan al amparo de las cl&aacute;usulas contractuales tipo aprobadas por la Comisi&oacute;n Europea y el marco de adecuaci&oacute;n UE-EE.UU. (EU-US Data Privacy Framework). No se realizar&aacute;n otras transferencias internacionales de datos.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Per&iacute;odo de conservaci&oacute;n
          </h2>
          <p className="mb-6">
            Los datos personales se conservar&aacute;n mientras se mantenga la relaci&oacute;n comercial o hasta que se solicite su supresi&oacute;n, y durante los plazos legales en los que pudieran derivarse responsabilidades por los servicios prestados.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Derechos del usuario
          </h2>
          <p className="mb-6">
            El usuario podr&aacute; ejercer en todo momento los siguientes derechos reconocidos por el RGPD:
          </p>
          <ul className="mb-6 list-disc pl-6 space-y-1">
            <li>Derecho de <strong>acceso</strong> a sus datos personales.</li>
            <li>Derecho de <strong>rectificaci&oacute;n</strong> de datos inexactos.</li>
            <li>Derecho de <strong>supresi&oacute;n</strong> (&ldquo;derecho al olvido&rdquo;).</li>
            <li>Derecho a la <strong>limitaci&oacute;n</strong> del tratamiento.</li>
            <li>Derecho a la <strong>portabilidad</strong> de los datos.</li>
            <li>Derecho de <strong>oposici&oacute;n</strong> al tratamiento.</li>
          </ul>
          <p className="mb-6">
            Para ejercer estos derechos, puede dirigirse a <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a> o por correo postal a: C/ Ataulfo Friera Tarfe, 5, 33211 &mdash; Gij&oacute;n (Asturias). Se responder&aacute; en un plazo m&aacute;ximo de un mes.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Derecho a reclamar ante la autoridad de control
          </h2>
          <p className="mb-6">
            Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, tiene derecho a presentar una reclamaci&oacute;n ante la <strong>Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos (AEPD)</strong>, con sede en C/ Jorge Juan 6, 28001 Madrid &mdash; <a href="https://www.aepd.es" className="text-[#A52430] hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Decisiones automatizadas
          </h2>
          <p className="mb-6">
            No se toman decisiones automatizadas ni se realizan perfiles basados en los datos personales proporcionados.
          </p>

          <h2 className="font-[family-name:var(--font-rajdhani)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Comunicaciones comerciales
          </h2>
          <p className="mb-6">
            De acuerdo con la LSSI, Esnova Racks no enviar&aacute; publicidad sin haber recabado previamente la solicitud o autorizaci&oacute;n expresa. El usuario puede oponerse en cualquier momento escribiendo a <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
