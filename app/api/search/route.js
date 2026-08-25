import { NextResponse } from "next/server";

import { searchProducts } from "@/lib/shopify/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q")?.trim();

  if (!query) {
    return NextResponse.json([]);
  }

  const products = await searchProducts(query);

  return NextResponse.json(products);
}
