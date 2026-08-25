const SHOPIFY_STORE = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

const endpoint = `https://${SHOPIFY_STORE}/api/2025-10/graphql.json`;

export async function shopifyFetch({ query, variables = {} }) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`Shopify Error ${response.status}`);
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error(errors);
    throw new Error(JSON.stringify(errors, null, 2));
  }

  return data;
}
