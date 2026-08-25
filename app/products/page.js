import { getProducts } from "@/lib/shopify/products";
import { createMetadata } from "@/lib/seo";

import Container from "@/components/layout/Container";
import PageHero from "@/components/blocks/PageHero";
import ProductGrid from "@/components/product/ProductGrid";

export const metadata = createMetadata({
  title: "Shop",
  description: "Browse the full Get Reset collection.",
});

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="All products"
        description="Everything you need to rest, recover and recharge, wherever you are."
      />

      <Container>
        <section className="py-20">
          <ProductGrid products={products} />
        </section>
      </Container>
    </>
  );
}
