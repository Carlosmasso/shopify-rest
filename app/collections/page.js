import Link from "next/link";
import { getCollections } from "@/lib/shopify/collections";
import PageHero from "@/components/blocks/PageHero";
import Container from "@/components/layout/Container";

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <>
      <PageHero
        title="Collections"
        description="Browse our collection of products."
      />
      <PageHero
        eyebrow="Shop"
        title="Collections"
        description="Explore products grouped around the moments when you need them most."
      />
      <Container>
        <section className="py-24">
          <h1 className="mb-16 text-5xl font-semibold">Collections</h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.handle}`}
                className="group"
              >
                <div className="overflow-hidden rounded-[28px] bg-white">
                  {collection.image && (
                    <img
                      src={collection.image.url}
                      alt={collection.title}
                      className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                <h2 className="mt-5 text-xl font-semibold">
                  {collection.title}
                </h2>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
