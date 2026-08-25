"use client";

import { Trash2 } from "lucide-react";
import { useTransition } from "react";
import { removeLine } from "@/app/actions/remove-cart-line";
import { useCartDrawer } from "@/components/cart/CartDrawerProvider";

export default function RemoveCartItem({ lineId }) {
  const [pending, startTransition] = useTransition();
  const { refreshCart } = useCartDrawer();

  function handleChange() {
    startTransition(async () => {
      await removeLine(lineId);
      refreshCart();
    });
  }

  return (
    <button
      type="button"
      disabled={pending}
      onClick={handleChange}
      className="mt-4 flex items-center gap-2 text-sm text-[var(--foreground-muted)] transition hover:text-red-500"
    >
      <Trash2 size={16} />
      Remove
    </button>
  );
}
