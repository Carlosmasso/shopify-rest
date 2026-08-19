import { shopifyFetch } from "./client";
import {
  PRODUCTS_QUERY,
  PRODUCT_QUERY,
} from "./queries";

import { mapProduct } from "./mappers/product";

export async function getProducts() {
  const data = await shopifyFetch({
    query: PRODUCTS_QUERY,
  });

  return data.products.nodes.map(mapProduct);
}

export async function getProduct(handle) {
  const data = await shopifyFetch({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });

  return mapProduct(data.product);
}

export function getProductOptions(product) {
  const options = {};

  product.variants.forEach((variant) => {
    Object.entries(variant.options).forEach(([name, value]) => {
      if (!options[name]) {
        options[name] = new Set();
      }

      options[name].add(value);
    });
  });

  return Object.fromEntries(
    Object.entries(options).map(([name, values]) => [
      name,
      [...values],
    ])
  );
}