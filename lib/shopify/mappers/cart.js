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
        price: line.cost.totalAmount,
        product: mapCartProduct(line.merchandise.product),
        variant: {
          id: line.merchandise.id,
          title: line.merchandise.title,
        },
      })) ?? [],
  };
}
