import { Check } from "lucide-react";

const features = [
  "Premium quality",
  "Designed for everyday use",
  "30-day guarantee",
];

export default function ProductFeatures() {
  return (
    <div className="mt-10 border-t border-[var(--border)] pt-8">
      <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
        Why you&apos;ll love it
      </h3>

      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check size={18} className="text-[var(--primary)]" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
