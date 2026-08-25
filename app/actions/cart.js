"use server";

import { createCart, addCartLine } from "@/lib/shopify/cart";
import { getCartId, setCartId } from "@/lib/cart/cookies";
import { revalidatePath } from "next/cache";

export async function addToCart(variantId, quantity) {
  let cartId = await getCartId();

  if (!cartId) {
    const cart = await createCart();

    cartId = cart.id;

    await setCartId(cartId);
  }

  await addCartLine({
    cartId,
    variantId,
    quantity,
  });

  revalidatePath("/", "layout");

  return {
    success: true,
    error: null,
  };
}
