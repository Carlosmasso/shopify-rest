import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import FadeIn from "@/components/animations/FadeIn";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts({ products }) {
  if (!products.length) return null;

  const featured = products[0];
  const secondary = products.slice(1, 3);

  return (
    <Section spacingSize="xl">
      <Container>
        <FadeIn>
          <div className="mb-16 flex items-end justify-between">
            <div>
              <span className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
                Featured
              </span>

              <h2 className="mt-4 text-5xl font-semibold">Our Picks</h2>
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProductCard product={featured} featured />
          </div>

          <div className="space-y-10">
            {secondary.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
