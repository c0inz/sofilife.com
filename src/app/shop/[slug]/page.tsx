import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { formatPrice } from "@/lib/utils";
import { ImageGallery } from "@/components/product";
import { ProductDetails } from "./ProductDetails";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

async function getProduct(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug, active: true },
    include: {
      images: { orderBy: { position: "asc" } },
      variants: true,
    },
  });
  return product;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} - SofiLife`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container section">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Image Gallery */}
        <ImageGallery images={product.images} productName={product.name} />

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-headline font-medium">{product.name}</h1>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-title">{formatPrice(product.price)}</span>
              {product.compareAt && product.compareAt > product.price && (
                <span className="text-body text-stone line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>
          </div>

          <p className="text-body text-stone">{product.description}</p>

          {/* Client component for variant selection */}
          <ProductDetails product={product} />
        </div>
      </div>
    </div>
  );
}
