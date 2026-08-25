import { shopifyFetch } from "./client";
import { COLLECTIONS_QUERY, COLLECTION_QUERY } from "./queries";
import { mapCollection } from "./mappers/collection";

export async function getCollections() {
  const data = await shopifyFetch({
    query: COLLECTIONS_QUERY,
  });

  return data.collections.nodes.map(mapCollection);
}

// export async function getCollection(handle) {
//   const data = await shopifyFetch({
//     query: COLLECTION_QUERY,
//     variables: {
//       handle,
//     },
//   });

//   return data.collection;
// }

import { mapProduct } from "./mappers/product";

export async function getCollection(handle) {
  const data = await shopifyFetch({
    query: COLLECTION_QUERY,
    variables: { handle },
  });

  return mapCollection(data.collection);
  // return {
  //   ...data.collection,
  //   products: data.collection.products.nodes.map(mapProduct),
  // };
}
