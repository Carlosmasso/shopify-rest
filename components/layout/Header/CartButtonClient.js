"use client";

import CartDrawer from "@/components/cart/CartDrawer";
import { ShoppingBag } from "lucide-react";

export default function CartButtonClient({ quantity }) {
  return (
    <CartDrawer>
      <button
        type="button"
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
        {quantity > 0 && (
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
              transition-all
              duration-200
            "
          >
            {quantity}
          </span>
        )}
      </button>
    </CartDrawer>
  );
}
