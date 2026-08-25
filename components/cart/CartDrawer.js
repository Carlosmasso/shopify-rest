"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import CartDrawerContent from "./CartDrawerContent";
import CartDrawerFooter from "./CartDrawerFooter";
import { useCartDrawer } from "./CartDrawerProvider";
import { LoaderCircle } from "lucide-react";

export default function CartDrawer({ children }) {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const { open, setOpen, refreshKey } = useCartDrawer();

  useEffect(() => {
    if (!open) {
      return;
    }

    async function loadCart() {
      setLoading(true);
      const response = await fetch("/api/cart");
      const data = await response.json();
      setCart(data);
      setLoading(false);
    }

    loadCart();
  }, [open, refreshKey]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm data-[state=open]:animate-[overlay-in_.25s_ease] data-[state=closed]:animate-[overlay-out_.25s_ease]" />

        <Dialog.Content
          className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-full
            max-w-md
            flex-col
            border-l
            border-[var(--border)]
            bg-[var(--background)]
            shadow-2xl
            data-[state=open]:animate-[drawer-in_.3s_ease]
            data-[state=closed]:animate-[drawer-out_.3s_ease]
          "
        >
          <div className="flex-1 overflow-y-auto p-6">
            {loading ? (
              <LoaderCircle
                size={60}
                className="animate-spin text-[var(--primary)] m-auto top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
              />
            ) : cart ? (
              <>
                <CartDrawerContent cart={cart} />
                <CartDrawerFooter cart={cart} />
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
