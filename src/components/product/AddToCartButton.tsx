"use client";

import { useState } from "react";
import { Button } from "@/components/ui";
import { useCart } from "@/lib/cart";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: { url: string }[];
  };
  selectedSize: string;
  selectedColor: string;
  disabled?: boolean;
}

export function AddToCartButton({
  product,
  selectedSize,
  selectedColor,
  disabled = false,
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) return;
    
    setIsAdding(true);
    
    // Simulate a brief delay for UX
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || "",
      size: selectedSize,
      color: selectedColor,
    });
    
    setIsAdding(false);
  };

  const isDisabled = disabled || !selectedSize || !selectedColor;

  return (
    <Button
      onClick={handleAddToCart}
      loading={isAdding}
      disabled={isDisabled}
      fullWidth
      size="lg"
    >
      {isDisabled && !isAdding ? "Select Options" : "Add to Cart"}
    </Button>
  );
}
