import { Minus, Plus } from "lucide-react";

export default function ProductQuantity({
  quantity,
  onChange,
  label = "Quantity",
}) {
  return (
    <div className="mt-10">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
        {label}
      </p>

      <div className="flex w-fit items-center rounded-full border border-[var(--border)] bg-white">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, quantity - 1))}
          className="flex h-12 w-12 items-center justify-center transition hover:bg-[var(--background-secondary)]"
        >
          <Minus size={18} />
        </button>

        <span className="min-w-10 text-center font-medium">{quantity}</span>

        <button
          type="button"
          onClick={() => onChange(quantity + 1)}
          className="flex h-12 w-12 items-center justify-center transition hover:bg-[var(--background-secondary)]"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}
