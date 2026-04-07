import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import { ProductSchema } from "@/components/SchemaOrg";
import { products, getProductBySlug } from "@/data/products";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products
    .filter((p) => p.category === "sistemas")
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado | Sliderack" };
  return {
    title: `${product.name} | Sistemas | Sliderack`,
    description: (product.shortDesc + " — " + product.description).slice(0, 155) + "...",
  };
}

export default async function SistemaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <ProductSchema
        name={product.name}
        description={product.description}
        image={product.image}
        slug={product.slug}
        category="sistemas"
      />
      <Header />
      <ProductDetail
        product={product}
        categoryLabel="Sistemas"
        categoryPath="/sistemas"
      />
      <Footer hideCta />
    </>
  );
}
