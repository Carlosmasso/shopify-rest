import { shopifyFetch } from "./client";
import { SHOP_POLICIES_QUERY } from "./queries";

const POLICY_FIELDS = {
  "shipping-policy": "shippingPolicy",
  "refund-policy": "refundPolicy",
  "privacy-policy": "privacyPolicy",
  "terms-of-service": "termsOfService",
};

export async function getShopPolicy(handle) {
  const field = POLICY_FIELDS[handle];

  if (!field) return null;

  const data = await shopifyFetch({ query: SHOP_POLICIES_QUERY });

  return data.shop[field];
}

export function getPolicyHandles() {
  return Object.keys(POLICY_FIELDS);
}
