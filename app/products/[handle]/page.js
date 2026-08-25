import { notFound } from "next/navigation";

import { getProduct } from "@/lib/shopify/products";

import ProductLayout from "@/components/product/ProductLayout";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import { createMetadata } from "@/lib/seo";
import RelatedProducts from "@/components/product/RelatedProducts";

export async function generateMetadata({ params }) {
  const { handle } = await params;

  const product = await getProduct(handle);

  if (!product) {
    return {};
  }

  return createMetadata({
    title: product.title,
    description: product.description,
    image: product.image,
  });
}

export default async function ProductPage({ params }) {
  const { handle } = await params;

  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }
  console.log(product);
  return (
    <>
      <ProductLayout
        gallery={<ProductGallery product={product} />}
        info={<ProductInfo product={product} />}
      />

      <RelatedProducts products={product.relatedProducts} />
    </>
  );
}
