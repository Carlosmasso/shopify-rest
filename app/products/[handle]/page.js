import { getProduct } from "@/lib/shopify/products";

import ProductLayout from "@/components/product/ProductLayout";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";

export default async function ProductPage({
  params,
}) {
  const { handle } = await params;

  const product = await getProduct(handle);

  return (
    <ProductLayout
      gallery={
        <ProductGallery
          product={product}
        />
      }
      info={
        <ProductInfo
          product={product}
        />
      }
    />
  );
}