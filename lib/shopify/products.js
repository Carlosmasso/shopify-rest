import { shopifyFetch } from "./client";
import {
  PRODUCTS_QUERY,
  PRODUCT_QUERY,
  SEARCH_PRODUCTS_QUERY,
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

  const product = mapProduct(data.product);

  const related = data.products.nodes
    .map(mapProduct)
    .filter((item) => item.id !== product.id);

  return {
    ...product,
    relatedProducts: related,
  };
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
    Object.entries(options).map(([name, values]) => [name, [...values]]),
  );
}

export async function searchProducts(query) {
  const data = await shopifyFetch({
    query: SEARCH_PRODUCTS_QUERY,
    variables: {
      query,
    },
  });

  return data.products.nodes.map(mapProduct);
}
