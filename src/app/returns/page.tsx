import Link from "next/link";

export const metadata = {
  title: "Returns & Exchanges - SofiLife",
  description: "Learn about our hassle-free return and exchange policy.",
};

export default function ReturnsPage() {
  return (
    <div className="container section">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-headline font-medium mb-8">Returns & Exchanges</h1>
        
        <div className="space-y-8 text-body">
          <section>
            <h2 className="text-title font-medium mb-4">Return Policy</h2>
            <p className="text-stone mb-4">
              We want you to love your purchase! If you&apos;re not completely satisfied, 
              you can return items within 30 days of delivery.
            </p>
            <ul className="list-disc list-inside text-stone space-y-2">
              <li>Items must be unworn, unwashed, and in original condition</li>
              <li>All tags must be attached</li>
              <li>Items must be returned in original packaging</li>
              <li>Final sale items cannot be returned</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">How to Return</h2>
            <ol className="list-decimal list-inside text-stone space-y-3">
              <li>
                <span className="font-medium text-charcoal">Email us</span> at{" "}
                <a href="mailto:hello@sofilife.com" className="underline">
                  hello@sofilife.com
                </a>{" "}
                with your order number and reason for return
              </li>
              <li>
                <span className="font-medium text-charcoal">Receive your label</span> — 
                we&apos;ll send a prepaid shipping label to your email
              </li>
              <li>
                <span className="font-medium text-charcoal">Ship it back</span> — 
                pack items securely and drop off at any carrier location
              </li>
              <li>
                <span className="font-medium text-charcoal">Get your refund</span> — 
                refunds are processed within 5-7 business days of receiving your return
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">Exchanges</h2>
            <p className="text-stone">
              Need a different size or color? Email us and we&apos;ll help you exchange 
              your item (subject to availability). Exchanges are free for the same item 
              in a different size.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium mb-4">Refund Timeline</h2>
            <ul className="text-stone space-y-2">
              <li>
                <span className="font-medium text-charcoal">Processing:</span> 1-2 business days after we receive your return
              </li>
              <li>
                <span className="font-medium text-charcoal">Refund issued:</span> 3-5 business days for it to appear on your statement
              </li>
              <li>
                <span className="font-medium text-charcoal">Original payment method:</span> Refunds go back to the payment method used
              </li>
            </ul>
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
