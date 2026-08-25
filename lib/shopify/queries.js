const PRODUCT_FRAGMENT = `
fragment ProductFields on Product {
  id

  title

  handle

  description

  featuredImage {
    url
    altText
  }

  images(first: 10) {
    nodes {
      url
      altText
    }
  }

  variants(first: 20) {
    nodes {
      id

      title

      availableForSale

      selectedOptions {
        name
        value
      }

      price {
        amount
        currencyCode
      }
    }
  }

  priceRange {
    minVariantPrice {
      amount
      currencyCode
    }
  }
}
`;

export const PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}

  query GetProducts {
    products(first: 12) {
      nodes {
        ...ProductFields
      }
    }
  }
`;

export const PRODUCT_QUERY = `
query Product($handle: String!) {
  product(handle: $handle) {
    id
    title
    description
    handle
    featuredImage {
      url
      altText
    }
    images(first: 10) {
      nodes {
        url
        altText
      }
    }
    variants(first: 20) {
      nodes {
        id
        title
        availableForSale
        selectedOptions {
          name
          value
        }
        price {
          amount
          currencyCode
        }
      }
    }
  }
   products(first: 4) {
    nodes {
      ...ProductFields
    }
  }
}
  ${PRODUCT_FRAGMENT}

`;

export const CREATE_CART = `
mutation CartCreate {
  cartCreate {
    cart {
      id
      checkoutUrl
    }
  }
}
`;

export const ADD_TO_CART = `
mutation CartLinesAdd(
  $cartId: ID!
  $lines: [CartLineInput!]!
) {
  cartLinesAdd(
    cartId: $cartId
    lines: $lines
  ) {
    cart {
      id
      totalQuantity
    }
  }
}
`;

export const COLLECTIONS_QUERY = `
query GetCollections {
  collections(first: 20) {
    nodes {
      id
      title
      handle
      description
      image {
        url
        altText
      }
    }
  }
}
`;

export const COLLECTION_QUERY = `
query GetCollection($handle: String!) {
  collection(handle: $handle) {
    id
    title
    description
    products(first: 24) {
      nodes {
        ...ProductFields
      }
    }
  }
}
  ${PRODUCT_FRAGMENT}
`;

export const GET_CART = `
query GetCart($cartId: ID!) {
  cart(id: $cartId) {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 50) {
      nodes {
        id
        quantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        merchandise {
          ... on ProductVariant {
            id
            product {
              id
              title
              handle
              description
              featuredImage {
                url
                altText
              }
              variants(first:1){
                nodes{
                  id
                  price{
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const UPDATE_CART_LINES = `
  mutation UpdateCartLines(
    $cartId: ID!
    $lines: [CartLineUpdateInput!]!
  ) {
    cartLinesUpdate(
      cartId: $cartId
      lines: $lines
    ) {
      cart {
        id
        totalQuantity
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export const REMOVE_CART_LINES = `
  mutation RemoveCartLines(
    $cartId: ID!
    $lineIds: [ID!]!
  ) {
    cartLinesRemove(
      cartId: $cartId
      lineIds: $lineIds
    ) {
      cart {
        id
        totalQuantity
      }

      userErrors {
        field
        message
      }
    }
  }
`;

export const SEARCH_PRODUCTS_QUERY = `
query SearchProducts($query: String!) {
  products(first: 24, query: $query) {
    nodes {
      ...ProductFields
    }
  }
}

${PRODUCT_FRAGMENT}
`;

export const SHOP_POLICIES_QUERY = `
query GetShopPolicies {
  shop {
    shippingPolicy {
      title
      body
    }
    refundPolicy {
      title
      body
    }
    privacyPolicy {
      title
      body
    }
    termsOfService {
      title
      body
    }
  }
}
`;
