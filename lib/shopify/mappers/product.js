export function mapProduct(product) {
  const variants =
    product.variants?.nodes?.map((variant) => {
      const options = (variant.selectedOptions ?? []).map((option) => [
        option.name,
        option.value,
      ]);

      return {
        id: variant.id,
        title: variant.title,
        available: variant.availableForSale,
        price: {
          amount: variant.price.amount,
          currencyCode: variant.price.currencyCode,
        },
        options: options ? Object.fromEntries(options) : {},
      };
    }) ?? [];

  const defaultVariant = variants[0] ?? null;

  const options = {};

  variants.forEach((variant) => {
    Object.entries(variant.options).forEach(([name, value]) => {
      if (!options[name]) {
        options[name] = [];
      }

      if (!options[name].includes(value)) {
        options[name].push(value);
      }
    });
  });

  return {
    id: product.id,
    title: product.title,
    handle: product.handle,
    description: product.description,

    image: {
      url: product.featuredImage?.url,
      alt: product.featuredImage?.altText || product.title,
    },

    images:
      product.images?.nodes?.map((image) => ({
        url: image.url,
        alt: image.altText || product.title,
      })) ?? [],

    defaultVariant,

    variants,
    options,
    price: defaultVariant?.price ?? product.priceRange?.minVariantPrice ?? null,
  };
}

export function mapCartProduct(product) {
  return {
    id: product.id,
    title: product.title,
    handle: product.handle,

    image: {
      url: product.featuredImage?.url,
      alt: product.featuredImage?.altText || product.title,
    },
  };
}
