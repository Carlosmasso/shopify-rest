"use server";

import { revalidatePath } from "next/cache";

import { getCartId } from "@/lib/cart/cookies";
import { removeCartLine } from "@/lib/shopify/cart";

export async function removeLine(lineId) {
  const cartId = await getCartId();

  if (!cartId) return;

  await removeCartLine({
    cartId,
    lineId,
  });

  revalidatePath("/cart");
  revalidatePath("/", "layout");
}
