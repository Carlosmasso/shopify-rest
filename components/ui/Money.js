export default function Money({
  amount,
  currencyCode,
}) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
  }).format(Number(amount));
}