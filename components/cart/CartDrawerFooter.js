import Button from "@/components/ui/Button";
import Money from "@/components/ui/Money";

export default function CartDrawerFooter({ cart }) {
  if (!cart) return null;

  return (
    <footer className="border-t border-[var(--border)] p-6">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm text-[var(--foreground-muted)]">Subtotal</span>

        <span className="text-lg font-semibold">
          <Money
            amount={cart.cost.subtotalAmount.amount}
            currencyCode={cart.cost.subtotalAmount.currencyCode}
          />
        </span>
      </div>

      <Button
        size="lg"
        className="w-full"
        onClick={() => {
          window.location.href = cart.checkoutUrl;
        }}
      >
        Checkout
      </Button>
    </footer>
  );
}
