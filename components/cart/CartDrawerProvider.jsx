"use client";

import { createContext, useContext, useState } from "react";

const CartDrawerContext = createContext(null);

export function CartDrawerProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshCart = async () => {
    setRefreshKey((value) => value + 1);
  };

  return (
    <CartDrawerContext.Provider
      value={{
        open,
        setOpen,
        openDrawer: () => setOpen(true),
        closeDrawer: () => setOpen(false),
        refreshKey,
        refreshCart,
      }}
    >
      {children}
    </CartDrawerContext.Provider>
  );
}

export function useCartDrawer() {
  const context = useContext(CartDrawerContext);

  if (!context) {
    throw new Error("useCartDrawer must be used inside CartDrawerProvider");
  }

  return context;
}
