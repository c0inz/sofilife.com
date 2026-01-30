"use client";

import { cn } from "@/lib/utils";

interface Variant {
  size: string;
  color: string;
  colorHex?: string | null;
  inventory: number;
}

interface VariantSelectorProps {
  variants: Variant[];
  selectedSize: string;
  selectedColor: string;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
}

export function VariantSelector({
  variants,
  selectedSize,
  selectedColor,
  onSizeChange,
  onColorChange,
}: VariantSelectorProps) {
  // Get unique sizes and colors
  const sizes = Array.from(new Set(variants.map((v) => v.size)));
  const colors = Array.from(new Set(variants.map((v) => v.color)));
  
  // Get color hex values
  const colorHexMap = variants.reduce((acc, v) => {
    if (v.colorHex) acc[v.color] = v.colorHex;
    return acc;
  }, {} as Record<string, string>);

  // Check if a specific variant is available
  const isVariantAvailable = (size: string, color: string) => {
    const variant = variants.find((v) => v.size === size && v.color === color);
    return variant ? variant.inventory > 0 : false;
  };

  // Check if a size is available for the selected color
  const isSizeAvailable = (size: string) => {
    return isVariantAvailable(size, selectedColor);
  };

  // Check if a color is available for the selected size
  const isColorAvailable = (color: string) => {
    return isVariantAvailable(selectedSize, color);
  };

  return (
    <div className="space-y-6">
      {/* Color Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-small font-medium text-charcoal">Color</span>
          <span className="text-small text-stone">{selectedColor}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => {
            const hex = colorHexMap[color];
            const available = isColorAvailable(color);
            
            return (
              <button
                key={color}
                onClick={() => onColorChange(color)}
                disabled={!available}
                className={cn(
                  "relative w-10 h-10 rounded-full border-2 transition-all",
                  selectedColor === color
                    ? "border-charcoal"
                    : "border-transparent hover:border-stone",
                  !available && "opacity-40 cursor-not-allowed"
                )}
                aria-label={`Select ${color} color`}
              >
                <span
                  className="absolute inset-1 rounded-full"
                  style={{ backgroundColor: hex || "#E8E4DE" }}
                />
                {!available && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="w-8 h-0.5 bg-stone rotate-45 absolute" />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-small font-medium text-charcoal">Size</span>
          <button className="text-small text-stone underline hover:text-charcoal">
            Size Guide
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => {
            const available = isSizeAvailable(size);
            
            return (
              <button
                key={size}
                onClick={() => onSizeChange(size)}
                disabled={!available}
                className={cn(
                  "min-w-[3rem] px-4 py-2 text-small font-medium border transition-all",
                  selectedSize === size
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-white text-charcoal border-border hover:border-charcoal",
                  !available && "opacity-40 cursor-not-allowed line-through"
                )}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
