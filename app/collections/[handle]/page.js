import { notFound } from "next/navigation";

import { getCollection } from "@/lib/shopify/collections";
import { createMetadata } from "@/lib/seo";

import Container from "@/components/layout/Container";
import ProductGrid from "@/components/product/ProductGrid";
import PageHero from "@/components/blocks/PageHero";

export async function generateMetadata({ params }) {
  const { handle } = await params;

  const collection = await getCollection(handle);

  if (!collection) {
    return {};
  }

  return createMetadata({
    title: collection.title,
    description: collection.description,
    image: collection.image,
  });
}

export default async function CollectionPage({ params }) {
  const { handle } = await params;

  const collection = await getCollection(handle);

  if (!collection) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={collection.title}
        description={collection.description}
      />

      <Container>
        <section className="py-20">
          <ProductGrid products={collection.products} />
        </section>
      </Container>
    </>
  );
}
