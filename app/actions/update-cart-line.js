"use server";

import { revalidatePath } from "next/cache";

import { getCartId } from "@/lib/cart/cookies";
import { updateCartLine } from "@/lib/shopify/cart";

export async function updateQuantity(lineId, quantity) {
  const cartId = await getCartId();

  if (!cartId) return;

  await updateCartLine({
    cartId,
    lineId,
    quantity,
  });

  revalidatePath("/cart");
  revalidatePath("/", "layout");
}
