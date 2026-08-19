import FadeIn from "@/components/animations/FadeIn";

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <FadeIn>
      <div className="mb-16 max-w-2xl">
        {eyebrow && (
          <span className="text-sm uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-4 text-4xl font-semibold tracking-tight">{title}</h2>

        {description && (
          <p className="mt-5 leading-8 text-[var(--foreground-muted)]">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
