export default function ProductBadge({ children = "GET RESET" }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--background-secondary)] px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-[var(--foreground-muted)]">
      {children}
    </span>
  );
}
