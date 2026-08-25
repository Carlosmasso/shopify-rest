"use client";

import ProductBadge from "./ProductBadge";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductFeatures from "./ProductFeatures";
import ProductQuantity from "./ProductQuantity";
import ProductActions from "./ProductActions";
import ProductShipping from "./ProductShipping";
import ProductVariantSelector from "./ProductVariantSelector";
import { useState } from "react";

export default function ProductInfo({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.defaultVariant,
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <ProductBadge />

      <ProductTitle title={product.title} />

      <ProductPrice price={selectedVariant.price} />

      <ProductDescription product={product} />

      <ProductVariantSelector
        options={product.options}
        variants={product.variants}
        selectedVariant={selectedVariant}
        onChange={setSelectedVariant}
      />
      <ProductFeatures />

      <ProductQuantity quantity={quantity} onChange={setQuantity} />

      <ProductActions
        variantId={selectedVariant.id}
        quantity={quantity}
        available={selectedVariant.available}
      />

      <ProductShipping />
    </div>
  );
}
