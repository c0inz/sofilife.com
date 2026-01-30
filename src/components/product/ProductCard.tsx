import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    compareAt?: number | null;
    images: { url: string; alt?: string | null }[];
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const mainImage = product.images[0];
  const hoverImage = product.images[1];

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-sand overflow-hidden">
        {mainImage ? (
          <>
            <Image
              src={mainImage.url}
              alt={mainImage.alt || product.name}
              fill
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {hoverImage && (
              <Image
                src={hoverImage.url}
                alt={hoverImage.alt || product.name}
                fill
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Sale Badge */}
        {product.compareAt && product.compareAt > product.price && (
          <span className="absolute top-3 left-3 bg-charcoal text-cream text-caption px-2 py-1">
            Sale
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-body font-medium text-charcoal group-hover:text-stone transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-body text-charcoal">
            {formatPrice(product.price)}
          </span>
          {product.compareAt && product.compareAt > product.price && (
            <span className="text-small text-stone line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
