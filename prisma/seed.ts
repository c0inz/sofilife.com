import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma";
import { PrismaLibSql } from "@prisma/adapter-libsql";

// Create the adapter with config
const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL || "file:./prisma/dev.db",
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // Clean existing data
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  // Create Plush Hoodie
  const hoodie = await prisma.product.create({
    data: {
      name: "Plush Hoodie",
      slug: "plush-hoodie",
      description:
        "Our signature plush hoodie in premium heavyweight cotton. Relaxed fit with a cozy brushed interior. Perfect for everyday comfort.",
      price: 17500, // $175.00
      compareAt: 11000, // $110.00 (on sale!)
      category: "hoodies",
      featured: true,
      images: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80",
            alt: "Plush Hoodie - Front View",
            position: 0,
          },
          {
            url: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&q=80",
            alt: "Plush Hoodie - Back View",
            position: 1,
          },
          {
            url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
            alt: "Plush Hoodie - Detail",
            position: 2,
          },
          {
            url: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=800&q=80",
            alt: "Plush Hoodie - Styled",
            position: 3,
          },
        ],
      },
      variants: {
        create: [
          // Charcoal variants
          { size: "XS", color: "Charcoal", colorHex: "#2C2C2C", inventory: 5, sku: "PH-CH-XS" },
          { size: "S", color: "Charcoal", colorHex: "#2C2C2C", inventory: 12, sku: "PH-CH-S" },
          { size: "M", color: "Charcoal", colorHex: "#2C2C2C", inventory: 18, sku: "PH-CH-M" },
          { size: "L", color: "Charcoal", colorHex: "#2C2C2C", inventory: 15, sku: "PH-CH-L" },
          { size: "XL", color: "Charcoal", colorHex: "#2C2C2C", inventory: 8, sku: "PH-CH-XL" },
          // Cream variants
          { size: "XS", color: "Cream", colorHex: "#FAF9F6", inventory: 3, sku: "PH-CR-XS" },
          { size: "S", color: "Cream", colorHex: "#FAF9F6", inventory: 10, sku: "PH-CR-S" },
          { size: "M", color: "Cream", colorHex: "#FAF9F6", inventory: 14, sku: "PH-CR-M" },
          { size: "L", color: "Cream", colorHex: "#FAF9F6", inventory: 11, sku: "PH-CR-L" },
          { size: "XL", color: "Cream", colorHex: "#FAF9F6", inventory: 6, sku: "PH-CR-XL" },
          // Stone variants
          { size: "XS", color: "Stone", colorHex: "#8B8680", inventory: 0, sku: "PH-ST-XS" },
          { size: "S", color: "Stone", colorHex: "#8B8680", inventory: 7, sku: "PH-ST-S" },
          { size: "M", color: "Stone", colorHex: "#8B8680", inventory: 9, sku: "PH-ST-M" },
          { size: "L", color: "Stone", colorHex: "#8B8680", inventory: 5, sku: "PH-ST-L" },
          { size: "XL", color: "Stone", colorHex: "#8B8680", inventory: 2, sku: "PH-ST-XL" },
        ],
      },
    },
  });

  console.log(`✅ Created product: ${hoodie.name} (${hoodie.id})`);
  console.log("✅ Seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
