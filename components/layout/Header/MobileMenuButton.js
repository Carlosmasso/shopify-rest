"use client";

import { Menu } from "lucide-react";

export default function MobileMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        transition
        hover:bg-[var(--background-secondary)]
        md:hidden
      "
      aria-label="Open menu"
    >
      <Menu size={22} />
    </button>
  );
}
