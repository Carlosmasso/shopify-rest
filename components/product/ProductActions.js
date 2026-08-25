"use client";

import { useTransition } from "react";
import Button from "@/components/ui/Button";
import { addToCart } from "@/app/actions/cart";
import { useCartDrawer } from "@/components/cart/CartDrawerProvider";

export default function ProductActions({ variantId, available, quantity }) {
  const [isPending, startTransition] = useTransition();
  const { openDrawer, refreshCart } = useCartDrawer();

  function handleAddToCart() {
    startTransition(async () => {
      const result = await addToCart(variantId, quantity);

      if (result?.success) {
        refreshCart();
        openDrawer();
      }
    });
  }

  return (
    <div className="mt-10">
      <Button
        size="lg"
        className="w-full"
        onClick={handleAddToCart}
        disabled={!available || isPending}
      >
        {!available ? "Sold out" : isPending ? "Adding..." : "Add to cart"}
      </Button>
    </div>
  );
}
