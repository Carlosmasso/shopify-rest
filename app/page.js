import Hero from "@/components/blocks/Hero";
import Benefits from "@/components/blocks/Benefits";
import Statement from "@/components/blocks/Statement";
import Lifestyle from "@/components/blocks/Lifestyle";
import FeaturedProducts from "@/components/blocks/FeaturedProducts";
import CTA from "@/components/blocks/CTA";

import { getProducts } from "@/lib/shopify/products";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <Hero />
      <Benefits />
      <Statement />
      <Lifestyle />
      <FeaturedProducts products={products} />
      <CTA />
    </>
  );
}
