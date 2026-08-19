export default function Blob({ top, left, right, bottom, size = 450 }) {
  return (
    <div
      className="absolute rounded-full bg-[var(--primary)] opacity-[0.08] blur-[120px] pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
}
