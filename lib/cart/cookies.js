import { cookies } from "next/headers";

export async function getCartId() {
  const cookieStore = await cookies();

  return cookieStore.get("cartId")?.value;
}

export async function setCartId(cartId) {
  const cookieStore = await cookies();

  cookieStore.set("cartId", cartId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}
