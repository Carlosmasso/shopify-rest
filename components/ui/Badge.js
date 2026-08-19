export default function Badge({ children }) {
  return (
    <span className="inline-flex rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm text-[var(--foreground-muted)] backdrop-blur">
      {children}
    </span>
  );
}