import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { ProductSchema } from "@/components/SchemaOrg";
import { products, getProductBySlug, l } from "@/data/products";
import { buildAlternates } from "@/lib/seo";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products
      .filter((p) => p.category === "accesorios")
      .map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found | Sliderack" };
  const name = locale === "en" && product.nameEn ? product.nameEn : product.name;
  const desc = l(product.description, locale);
  const short = l(product.shortDesc, locale);
  const categoryLabel = locale === "en" ? "Accessories" : "Accesorios";
  return {
    title: `${name} | ${categoryLabel}`,
    description: (short + " — " + desc).slice(0, 155) + "...",
    alternates: buildAlternates(locale, { pathname: "/accesorios/[slug]", params: { slug } }),
  };
}

export default async function AccesorioDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const name = locale === "en" && product.nameEn ? product.nameEn : product.name;
  const desc = l(product.description, locale);

  return (
    <>
      <ProductSchema
        name={name}
        description={desc}
        image={product.image}
        slug={product.slug}
        category="accesorios"
      />
      <Header />
      <ProductDetail product={product} />
      <Footer hideCta />
    </>
  );
}
