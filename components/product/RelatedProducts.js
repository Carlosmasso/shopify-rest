import ProductGrid from "./ProductGrid";
import Container from "@/components/layout/Container";

export default function RelatedProducts({ products }) {
  if (!products.length) {
    return null;
  }

  return (
    <Container>
      <h2 className="mb-10 text-3xl font-semibold">You may also like</h2>
      <ProductGrid products={products} />
    </Container>
  );
}
