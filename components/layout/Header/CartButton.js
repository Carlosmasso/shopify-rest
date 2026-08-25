import { getCurrentCart } from "@/lib/cart";
import CartButtonClient from "./CartButtonClient";

export default async function CartButton() {
  const cart = await getCurrentCart();

  return <CartButtonClient quantity={cart?.totalQuantity ?? 0} />;
}
