import { getCurrentCart } from "@/lib/cart";

import Container from "@/components/layout/Container";
import CartContent from "@/components/cart/CartContent";

export default async function CartPage() {
  const cart = await getCurrentCart();

  return (
    <Container className="py-20">
      <h1 className="mb-12 text-4xl font-semibold">Shopping Cart</h1>

      <CartContent cart={cart} />
    </Container>
  );
}
