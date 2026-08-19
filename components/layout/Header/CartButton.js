import Link from "next/link";
import { ShoppingBag } from "lucide-react";

import { getCurrentCart } from "@/lib/cart";

export default async function CartButton() {
  const cart = await getCurrentCart();
  const quantity = cart?.totalQuantity ?? 0;
  return (
    <Link
      href="/cart"
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        transition
        hover:bg-[var(--background-secondary)]
      "
    >
      <ShoppingBag size={20} />

      <span
        className="
          absolute
          -right-1
          -top-1
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-[var(--primary)]
          text-[10px]
          font-semibold
          text-white
        "
      >
        {quantity}
      </span>
    </Link>
  );
}
