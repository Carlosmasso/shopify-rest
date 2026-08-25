import { mapProduct } from "./product";

export function mapCollection(collection) {
  return {
    id: collection.id,
    title: collection.title,
    handle: collection.handle,
    description: collection.description,

    products: collection.products?.nodes?.map(mapProduct) ?? [],

    image: collection.image
      ? {
          url: collection.image.url,
          alt: collection.image.altText ?? collection.title,
        }
      : null,
  };
}
