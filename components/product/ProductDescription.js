export default function ProductDescription({ product }) {
  return (
    <p className="mt-8 leading-8 text-[var(--foreground-muted)]">
      {product.description}
    </p>
  );
}
