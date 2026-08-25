import Money from "@/components/ui/Money";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CartSummary({ cart }) {
  return (
    <aside className="rounded-3xl border border-[var(--border)] bg-white p-8">
      <h2 className="text-xl font-semibold">Order Summary</h2>

      <div className="mt-8 flex items-center justify-between">
        <span>Subtotal</span>

        <Money
          amount={cart.cost.subtotalAmount.amount}
          currencyCode={cart.cost.subtotalAmount.currencyCode}
        />
      </div>

      <Link href={cart.checkoutUrl} className="mt-8 block">
        <Button className="w-full">Checkout</Button>
      </Link>
    </aside>
  );
}
