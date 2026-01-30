import { prisma } from "@/lib/db";
import { ProductGrid } from "@/components/product";

export const metadata = {
  title: "Shop - SofiLife",
  description: "Browse our collection of modern essentials.",
};

async function getProducts() {
  const products = await prisma.product.findMany({
    where: { active: true },
    include: {
      images: {
        orderBy: { position: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });
  return products;
}

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <div className="container section">
      <div className="mb-8 md:mb-12">
        <h1 className="text-headline font-medium">Shop All</h1>
        <p className="text-body text-stone mt-2">
          {products.length} {products.length === 1 ? "product" : "products"}
        </p>
      </div>

      <ProductGrid products={products} columns={4} />
    </div>
  );
}
