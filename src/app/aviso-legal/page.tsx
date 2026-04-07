import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso Legal",
  description: "Aviso legal e información corporativa de Sliderack, marca de Esnova Racks.",
};

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="bg-white px-6 py-20">
        <article className="mx-auto max-w-[800px] font-[family-name:var(--font-body)] text-[16px] leading-[1.8] text-[#444]">
          <h1 className="font-[family-name:var(--font-heading)] text-[36px] font-bold uppercase text-[#201F20] mb-8">
            Aviso Legal
          </h1>

          <p className="mb-6">
            En cumplimiento con el deber de informaci&oacute;n recogido en el art&iacute;culo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico (LSSICE), el propietario de la web le informa de lo siguiente:
          </p>

          <ul className="mb-6 list-disc pl-6 space-y-1">
            <li><strong>Denominaci&oacute;n social:</strong> Esnova Racks</li>
            <li><strong>Marca comercial:</strong> Sliderack</li>
            <li><strong>NIF:</strong> A33880931</li>
            <li><strong>Domicilio:</strong> C/ Ataulfo Friera Tarfe, 5, 33211 &mdash; Gij&oacute;n (Asturias)</li>
            <li><strong>Tel&eacute;fono:</strong> 985 30 89 80</li>
            <li><strong>Email:</strong> info@sliderack.com</li>
          </ul>

          <p className="mb-6">
            Inscrita en el Registro Mercantil de Asturias al Tomo 3416, folio 80, secci&oacute;n 8, hoja n&uacute;mero A-25765, inscripci&oacute;n 53.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Condiciones de uso
          </h2>
          <p className="mb-6">
            Con los l&iacute;mites establecidos en la ley, Esnova Racks no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualizaci&oacute;n y precisi&oacute;n de los datos o informaciones que contienen sus p&aacute;ginas web.
          </p>
          <p className="mb-6">
            Los contenidos e informaci&oacute;n no vinculan a Esnova Racks ni constituyen opiniones, consejos o asesoramiento legal de ning&uacute;n tipo, pues se trata meramente de un servicio ofrecido con car&aacute;cter informativo y divulgativo.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Enlaces externos
          </h2>
          <p className="mb-6">
            Las p&aacute;ginas de Internet de Sliderack pueden contener enlaces (links) a otras p&aacute;ginas de terceras partes que Esnova Racks no puede controlar. Por lo tanto, Esnova Racks no puede asumir responsabilidades por el contenido que pueda aparecer en p&aacute;ginas de terceros.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Propiedad intelectual
          </h2>
          <p className="mb-6">
            Los textos, im&aacute;genes, sonidos, animaciones, software y el resto de los contenidos incluidos en este website son propiedad exclusiva de Esnova Racks o sus licenciantes. Cualquier acto de transmisi&oacute;n, distribuci&oacute;n, cesi&oacute;n, reproducci&oacute;n, almacenamiento o comunicaci&oacute;n p&uacute;blica total o parcial, deber&aacute; contar con el consentimiento expreso de Esnova Racks.
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-[24px] font-bold uppercase text-[#201F20] mt-10 mb-4">
            Protecci&oacute;n de datos
          </h2>
          <p className="mb-6">
            Para acceder a algunos de los servicios que Sliderack ofrece a trav&eacute;s del sitio web, deber&aacute; proporcionar algunos datos de car&aacute;cter personal. En cumplimiento del Reglamento (UE) 2016/679 (RGPD), le informamos que sus datos personales ser&aacute;n tratados por Esnova Racks con el fin de prestarle y ofrecerle nuestros servicios, as&iacute; como para informarle de las mejoras del sitio web.
          </p>
          <p className="mb-6">
            Podr&aacute; ejercer en todo momento sus derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n, limitaci&oacute;n y portabilidad de sus datos de car&aacute;cter personal, de manera gratuita, mediante email a{" "}
            <a href="mailto:info@sliderack.com" className="text-[#A52430] hover:underline">info@sliderack.com</a>{" "}
            o en la direcci&oacute;n: C/ Ataulfo Friera Tarfe, 5, 33211 &mdash; Gij&oacute;n (Asturias).
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
