export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sliderack",
    url: "https://sliderack.com",
    logo: "https://sliderack.com/images/sliderack/logo.webp",
    description:
      "Sistema de almacenaje deslizante de alta precisi\u00f3n, dise\u00f1ado y fabricado en Espa\u00f1a por Esnova Racks.",
    parentOrganization: {
      "@type": "Organization",
      name: "Esnova Racks",
      url: "https://www.esnova.com",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Ataulfo Friera Tarfe, 5",
      addressLocality: "Gij\u00f3n",
      addressRegion: "Asturias",
      postalCode: "33211",
      addressCountry: "ES",
    },
    telephone: "+34946003128",
    email: "info@sliderack.com",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  image,
  slug,
  category,
}: {
  name: string;
  description: string;
  image: string;
  slug: string;
  category: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://sliderack.com${image}`,
    url: `https://sliderack.com/${category}/${slug}`,
    brand: {
      "@type": "Brand",
      name: "Sliderack",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Esnova Racks",
      url: "https://www.esnova.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
