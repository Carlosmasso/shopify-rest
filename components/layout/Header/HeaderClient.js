"use client";

import { useEffect, useState } from "react";

export default function HeaderClient({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky
        top-0
        z-50
        transition-all
        duration-300

        ${
          scrolled
            ? "border-b border-[var(--border)] bg-white/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      {children}
    </header>
  );
}
