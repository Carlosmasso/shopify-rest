import { shopifyFetch } from "./client";
import {
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINES,
  REMOVE_CART_LINES,
} from "./queries";

import { GET_CART } from "./queries";
import { mapCart } from "./mappers/cart";

export async function createCart() {
  const data = await shopifyFetch({
    query: CREATE_CART,
  });

  return data.cartCreate.cart;
}

export async function addCartLine({ cartId, variantId, quantity }) {
  const data = await shopifyFetch({
    query: ADD_TO_CART,
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });
  return data.cartLinesAdd.cart;
}

export async function getCart(cartId) {
  const data = await shopifyFetch({
    query: GET_CART,
    variables: {
      cartId,
    },
  });

  if (!data.cart) {
    return null;
  }

  return mapCart(data.cart);
}

export async function updateCartLine({ cartId, lineId, quantity }) {
  const data = await shopifyFetch({
    query: UPDATE_CART_LINES,
    variables: {
      cartId,
      lines: [
        {
          id: lineId,
          quantity,
        },
      ],
    },
  });

  return data.cartLinesUpdate.cart;
}

export async function removeCartLine({ cartId, lineId }) {
  const data = await shopifyFetch({
    query: REMOVE_CART_LINES,
    variables: {
      cartId,
      lineIds: [lineId],
    },
  });

  return data.cartLinesRemove.cart;
}
