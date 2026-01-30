import Link from "next/link";

export const metadata = {
  title: "Shipping & Delivery - SofiLife",
  description: "Learn about our shipping options and delivery times.",
};

export default function ShippingPage() {
  return (
    <div className="container section">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-headline font-medium mb-8">Shipping & Delivery</h1>
        
        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-title font-medium mb-4">Shipping Options</h2>
            <div className="space-y-4 text-stone">
              <div className="p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-charcoal">Standard Shipping</h3>
                  <span className="text-success font-medium">Free</span>
                </div>
                <p className="text-small">5-7 business days within the US</p>
              </div>
              <div className="p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-charcoal">Expedited Shipping</h3>
                  <span className="font-medium text-charcoal">$12</span>
                </div>
                <p className="text-small">2-3 business days within the US</p>
              </div>
              <div className="p-4 border border-border">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-charcoal">Canada Shipping</h3>
                  <span className="font-medium text-charcoal">$12</span>
                </div>
                <p className="text-small">7-14 business days</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">Order Processing</h2>
            <p className="text-stone">
              Orders are processed within 1-2 business days. You&apos;ll receive a shipping 
              confirmation email with tracking information once your order ships.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">International Shipping</h2>
            <p className="text-stone">
              We currently ship to the United States and Canada only. International 
              shipping to more countries is coming soon!
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">Questions?</h2>
            <p className="text-stone">
              Contact us at{" "}
              <a href="mailto:hello@sofilife.com" className="text-charcoal underline">
                hello@sofilife.com
              </a>{" "}
              or visit our{" "}
              <Link href="/faq" className="text-charcoal underline">
                FAQ page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
