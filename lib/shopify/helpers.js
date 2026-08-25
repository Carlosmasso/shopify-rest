export function getDefaultVariant(product) {
  if (!product?.variants?.nodes?.length) {
    return null;
  }

  return product.variants.nodes;
}

export function getProductPrice(product) {
  const variant = getDefaultVariant(product);

  if (!variant) {
    return null;
  }

  return variant.price;
}

export function hasMultipleVariants(product) {
  return product.variants.nodes.length > 1;
}
