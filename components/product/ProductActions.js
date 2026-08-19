"use client";

import { useTransition } from "react";
import Button from "@/components/ui/Button";
import { addToCart } from "@/app/actions/cart";

export default function ProductActions({ variantId, available, quantity }) {
  const [isPending, startTransition] = useTransition();
  console.log({variantId, available, quantity})
  function handleAddToCart() {
    startTransition(async () => {
      await addToCart(variantId, quantity);
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
        {available ? "Add to cart" : "Sold out"}
      </Button>
    </div>
  );
}
