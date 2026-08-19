import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Free shipping over €50",
  },
  {
    icon: RotateCcw,
    title: "30-day returns",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
  },
];

export default function ProductShipping() {
  return (
    <div className="mt-12 space-y-5 border-t border-[var(--border)] pt-8">
      {items.map(({ icon: Icon, title }) => (
        <div key={title} className="flex items-center gap-4">
          <Icon size={18} className="text-[var(--primary)]" />

          <span className="text-sm text-[var(--foreground-muted)]">
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
