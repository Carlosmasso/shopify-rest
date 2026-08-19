import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import ProductCard from "@/components/product/ProductCard";
import PageHero from "@/components/blocks/PageHero";
import { getCollection } from "@/lib/shopify/collections";

export default async function CollectionPage({ params }) {
  const { handle } = await params;

  const collection = await getCollection(handle);

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={collection.title}
        description={collection.description}
      />

      <Container>
        <section className="py-20">
          <h1 className="text-5xl font-semibold">{collection.title}</h1>

          <p className="mt-6 max-w-2xl text-[var(--foreground-muted)]">
            {collection.description}
          </p>

          <div className="mt-16">
            <ProductGrid>
              {collection.products.nodes.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </div>
        </section>
      </Container>
    </>
  );
}
