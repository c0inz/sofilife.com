import Image from "next/image";

export const metadata = {
  title: "About - SofiLife",
  description: "Learn about SofiLife and our commitment to quality, comfort, and sustainable fashion.",
};

export default function AboutPage() {
  return (
    <div className="container section">
      {/* Hero */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-display font-medium mb-6">About SofiLife</h1>
        <p className="text-body text-stone">
          Modern essentials designed for everyday living.
        </p>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative aspect-[4/5]">
          <Image
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80"
            alt="Our story"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-headline font-medium mb-6">Our Story</h2>
          <div className="space-y-4 text-body text-stone">
            <p>
              SofiLife was born from a simple belief: clothing should feel as good as it looks. 
              We started with a question — why settle for scratchy, uncomfortable basics when 
              you wear them every single day?
            </p>
            <p>
              Our answer was to create a line of essentials that prioritize comfort without 
              sacrificing style. Every piece is designed to be lived in, worked in, and loved 
              for years to come.
            </p>
            <p>
              We source the softest, most durable fabrics and work with ethical manufacturers 
              who share our values. Because when you buy less but buy better, everyone wins.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-sand -mx-4 px-4 py-16 md:py-24 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-headline font-medium text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-title font-medium mb-2">Quality First</h3>
              <p className="text-small text-stone">
                We use only the finest materials and construction methods, 
                creating pieces that last for years, not seasons.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-title font-medium mb-2">Thoughtful Design</h3>
              <p className="text-small text-stone">
                Clean lines, versatile colors, and timeless silhouettes. 
                Pieces that work for your life, not the other way around.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-title font-medium mb-2">Sustainable Practice</h3>
              <p className="text-small text-stone">
                From responsible sourcing to minimal packaging, 
                we&apos;re committed to reducing our environmental footprint.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Note */}
      <div className="max-w-2xl mx-auto text-center py-16 md:py-24">
        <blockquote className="text-title italic text-charcoal mb-6">
          &ldquo;I wanted to create clothes that make people feel good — not just about how they look, 
          but about what they&apos;re wearing and where it came from.&rdquo;
        </blockquote>
        <p className="text-body font-medium">— Sofi, Founder</p>
      </div>
    </div>
  );
}
