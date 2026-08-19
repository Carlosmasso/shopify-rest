"use client";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] shadow-[0_8px_30px_rgba(141,156,145,.25)]",
        secondary: "border border-[var(--border)] bg-white hover:shadow-[0_12px_40px_rgba(141,156,145,.35)]]",
        ghost: "hover:shadow-[0_12px_40px_rgba(141,156,145,.35)]",
      },

      size: {
        sm: "h-10 px-5 text-sm",
        md: "h-12 px-7",
        lg: "h-14 px-8 text-lg",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
