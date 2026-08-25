import { NextResponse } from "next/server";

import { getCurrentCart } from "@/lib/cart";

export async function GET() {
  const cart = await getCurrentCart();

  return NextResponse.json(cart);
}
