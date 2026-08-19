import { mapCartProduct } from "./product";

export function mapCart(cart) {
  return {
    id: cart.id,
    checkoutUrl: cart.checkoutUrl,
    totalQuantity: cart.totalQuantity,
    cost: cart.cost,
    lines:
      cart.lines?.nodes?.map((line) => ({
        id: line.id,
        quantity: line.quantity,
        merchandiseId: line.merchandise.id,
        product: mapCartProduct(line.merchandise.product),
      })) ?? [],
  };
}