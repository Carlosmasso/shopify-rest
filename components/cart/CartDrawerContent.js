import CartItem from "./CartItem";

export default function CartDrawerContent({ cart }) {
  if (!cart?.lines?.length) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-[var(--foreground-muted)]">
          Your cart is empty.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {cart.lines.map((line) => (
        <CartItem key={line.id} line={line} />
      ))}
    </div>
  );
}
