"use client";

import { useTransition } from "react";
import ProductQuantity from "@/components/product/ProductQuantity";
import { updateQuantity } from "@/app/actions/update-cart-line";
import { useCartDrawer } from "@/components/cart/CartDrawerProvider";

export default function CartQuantity({ lineId, quantity }) {
  const [pending, startTransition] = useTransition();
  const { refreshCart } = useCartDrawer();

  function handleChange(nextQuantity) {
    startTransition(async () => {
      await updateQuantity(lineId, nextQuantity);
      refreshCart();
    });
  }

  return (
    <div className={pending ? "opacity-50" : ""}>
      <ProductQuantity
        label="Quantity"
        quantity={quantity}
        onChange={handleChange}
      />
    </div>
  );
}
