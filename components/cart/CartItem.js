import Image from "next/image";
import Link from "next/link";
import Money from "@/components/ui/Money";
import CartQuantity from "./CartQuantity";
import RemoveCartItem from "./RemoveCartItem";

export default function CartItem({ line }) {
  return (
    <article className="flex gap-6 border-b border-[var(--border)] py-6">
      <Link href={`/products/${line.product.handle}`}>
        <Image
          src={line.product.image.url}
          alt={line.product.image.alt}
          width={120}
          height={120}
          className="rounded-2xl bg-[var(--background-secondary)] object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <Link
          href={`/products/${line.product.handle}`}
          className="text-lg font-medium hover:underline"
        >
          {line.product.title}
        </Link>

        <CartQuantity lineId={line.id} quantity={line.quantity} />

        <RemoveCartItem lineId={line.id} />

        <div className="mt-auto">
          <Money
            amount={line.price.amount}
            currencyCode={line.price.currencyCode}
          />
        </div>
      </div>
    </article>
  );
}
