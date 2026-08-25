import Link from "next/link";

export default function ProductCard({ product, featured = false }) {
  console.log({ product });
  return (
    <Link href={`/products/${product.handle}`} className="group block">
      <article>
        <div
          className="
    relative
    overflow-hidden
    rounded-[28px]
    bg-white
    shadow-[var(--shadow-sm)]
    transition-all
    duration-500
    group-hover:-translate-y-2
    group-hover:shadow-[var(--shadow-md)]
  "
        >
          {product.image && (
            <img
              src={product.image.url}
              alt={product.title}
              className={`
        w-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-105
        ${featured ? "aspect-[16/10]" : "aspect-square"}
    `}
            />
          )}
          {/* Badge temporal */}
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium backdrop-blur">
            New
          </span>
          {/* Flecha */}
          <div
            className="
              absolute bottom-5 right-5
              flex h-12 w-12 items-center justify-center
              rounded-full bg-white/90 backdrop-blur border 
              border-white/50 shadow-[var(--shadow-md)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-[var(--primary)]
              group-hover:text-white
            "
          >
            →
          </div>
        </div>

        <div className="mt-6">
          <h3
            className={
              featured ? "text-3xl font-semibold" : "text-lg font-medium"
            }
          >
            {product.title}
          </h3>

          <p
            className={
              featured
                ? "mt-4 text-lg text-[var(--foreground-muted)]"
                : "mt-2 text-[var(--foreground-muted)]"
            }
          >
            {product.price.amount} {product.price.currencyCode}
          </p>
        </div>
      </article>
    </Link>
  );
}
