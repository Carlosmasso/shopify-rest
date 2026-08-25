"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";

export default function ProductGallery({ product }) {
  const images = product.images.length > 0 ? product.images : [product.image];

  const [active, setActive] = useState(images[0]);

  return (
    <div className="lg:sticky lg:top-28">
      <ProductImage image={active.url} alt={active.altText || product.title} />
      {images.length > 1 && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
          {images.map((image) => (
            <button
              key={image.url}
              onClick={() => setActive(image)}
              className={`
                overflow-hidden
                rounded-xl
                border
                ${
                  active.url === image.url
                    ? "border-[var(--primary)]"
                    : "border-[var(--border)]"
                }
              `}
            >
              <img src={image.url} alt="" className="h-20 w-20 object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
