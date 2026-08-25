import { searchProducts } from "@/lib/shopify/products";

import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import PageHero from "@/components/blocks/PageHero";

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;

  const products = q ? await searchProducts(q) : [];

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={q || "Search"}
        description={`${products.length} products found`}
      />

      <Container>
        <section className="py-20">
          <ProductGrid products={products} />
        </section>
      </Container>
    </>
  );
}
