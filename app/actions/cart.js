"use server";

import { createCart, addCartLine } from "@/lib/shopify/cart";
import { getCartId, setCartId } from "@/lib/cart/cookies";

export async function addToCart(variantId, quantity) {
  console.log("1️⃣ Variant:", variantId);
  console.log("2️⃣ Quantity:", quantity);

  let cartId = await getCartId();

  console.log("3️⃣ Cookie:", cartId);

  if (!cartId) {
    const cart = await createCart();

    console.log("4️⃣ Cart created:", cart);

    cartId = cart.id;

    await setCartId(cartId);
  }

  const result = await addCartLine({
    cartId,
    variantId,
    quantity,
  });

  console.log("5️⃣ Add line:", result);

  return {
    success: true,
  };
}