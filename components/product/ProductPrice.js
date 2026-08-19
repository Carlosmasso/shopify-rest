import Money from "@/components/ui/Money";

export default function ProductPrice({ price }) {
  if (!price) return null;

  return (
    <p className="mt-8 text-3xl font-semibold">
      <Money
        amount={price.amount}
        currencyCode={price.currencyCode}
      />
    </p>
  );
}