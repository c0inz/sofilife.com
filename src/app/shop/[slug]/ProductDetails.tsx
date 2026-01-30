"use client";

import { useState, useEffect } from "react";
import { VariantSelector, AddToCartButton } from "@/components/product";

interface ProductDetailsProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: { url: string }[];
    variants: {
      size: string;
      color: string;
      colorHex?: string | null;
      inventory: number;
    }[];
  };
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<{
    inventory: number;
  } | null>(null);

  // Set defaults from first available variant
  useEffect(() => {
    if (product.variants.length > 0) {
      const firstAvailable = product.variants.find((v) => v.inventory > 0);
      if (firstAvailable) {
        setSelectedSize(firstAvailable.size);
        setSelectedColor(firstAvailable.color);
      } else {
        // If nothing available, still select first options
        setSelectedSize(product.variants[0].size);
        setSelectedColor(product.variants[0].color);
      }
    }
  }, [product.variants]);

  // Update selected variant when size/color changes
  useEffect(() => {
    if (selectedSize && selectedColor) {
      const variant = product.variants.find(
        (v) => v.size === selectedSize && v.color === selectedColor
      );
      setSelectedVariant(variant || null);
    }
  }, [selectedSize, selectedColor, product.variants]);

  const isOutOfStock = selectedVariant ? selectedVariant.inventory <= 0 : true;

  return (
    <div className="space-y-6">
      <VariantSelector
        variants={product.variants}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        onSizeChange={setSelectedSize}
        onColorChange={setSelectedColor}
      />

      {/* Stock Status */}
      {selectedVariant && (
        <div className="text-small">
          {isOutOfStock ? (
            <span className="text-error">Out of stock</span>
          ) : selectedVariant.inventory <= 5 ? (
            <span className="text-accent">
              Only {selectedVariant.inventory} left
            </span>
          ) : (
            <span className="text-success">In stock</span>
          )}
        </div>
      )}

      <AddToCartButton
        product={product}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        disabled={isOutOfStock}
      />

      {/* Additional Info */}
      <div className="border-t border-border pt-6 space-y-4">
        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer text-small font-medium">
            Shipping & Returns
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-small text-stone">
            Free shipping on orders over $100. Easy returns within 30 days.
          </p>
        </details>

        <details className="group">
          <summary className="flex items-center justify-between cursor-pointer text-small font-medium">
            Care Instructions
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 text-small text-stone">
            Machine wash cold. Tumble dry low. Do not bleach.
          </p>
        </details>
      </div>
    </div>
  );
}
