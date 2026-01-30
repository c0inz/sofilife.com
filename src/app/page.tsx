import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { Button } from "@/components/ui";
import { ProductCard } from "@/components/product";

async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: { active: true, featured: true },
    include: {
      images: { orderBy: { position: "asc" } },
    },
    take: 4,
  });
  return products;
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-sand">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=1920&q=80"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal/30" />
        </div>
        
        <div className="relative container h-full flex items-center">
          <div className="max-w-xl text-cream">
            <h1 className="text-display font-medium mb-6">
              Modern Essentials
            </h1>
            <p className="text-body text-cream/90 mb-8 max-w-md">
              Thoughtfully designed pieces for everyday comfort. 
              Simple, sustainable, and made to last.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-cream text-charcoal hover:bg-cream/90">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-headline font-medium">Featured</h2>
            <Link 
              href="/shop" 
              className="text-small font-medium text-stone hover:text-charcoal transition-colors"
            >
              View All →
            </Link>
          </div>

          {featuredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-body text-stone">Coming soon...</p>
          )}
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-sand">
        <div className="container section">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80"
                alt="Our story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-headline font-medium mb-6">Our Story</h2>
              <p className="text-body text-stone mb-4">
                SofiLife started with a simple idea: create clothing that feels as good 
                as it looks. We believe in quality over quantity, timeless designs over 
                fast fashion, and comfort that doesn&apos;t compromise on style.
              </p>
              <p className="text-body text-stone mb-8">
                Every piece is thoughtfully designed with you in mind — made from premium 
                materials that get softer with every wear.
              </p>
              <Link href="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section">
        <div className="container max-w-xl text-center">
          <h2 className="text-headline font-medium mb-4">Stay in Touch</h2>
          <p className="text-body text-stone mb-8">
            Be the first to know about new arrivals, exclusive offers, and more.
          </p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white border border-border text-body focus:outline-none focus:ring-2 focus:ring-charcoal"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
