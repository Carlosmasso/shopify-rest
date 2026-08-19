import { getCartId } from "./cookies";
import { getCart } from "@/lib/shopify/cart";

export async function getCurrentCart() {
  const cartId = await getCartId();

  if (!cartId) {
    return null;
  }

  return getCart(cartId);
}