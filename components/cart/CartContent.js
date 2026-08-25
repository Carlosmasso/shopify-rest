import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

export default function CartContent({ cart }) {
  if (!cart || cart.lines.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Your cart is empty</h2>

        <p className="mt-4 text-[var(--foreground-muted)]">
          Add some products to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        {cart.lines.map((line) => (
          <CartItem key={line.id} line={line} />
        ))}
      </div>

      <CartSummary cart={cart} />
    </div>
  );
}
