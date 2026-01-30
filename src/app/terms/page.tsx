export const metadata = {
  title: "Terms of Service - SofiLife",
  description: "Terms and conditions for using the SofiLife website and services.",
};

export default function TermsPage() {
  return (
    <div className="container section">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-headline font-medium mb-2">Terms of Service</h1>
        <p className="text-small text-stone mb-8">Last updated: January 2025</p>
        
        <div className="space-y-8 text-body text-stone">
          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using sofilife.com, you agree to be bound by these Terms of Service. 
              If you disagree with any part of these terms, you may not access our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Products and Pricing</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All prices are listed in USD and are subject to change without notice</li>
              <li>We reserve the right to limit quantities or refuse orders</li>
              <li>Product images are for illustration purposes; actual items may vary slightly</li>
              <li>We make every effort to display accurate colors, but monitor settings may vary</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Orders and Payment</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>All orders are subject to acceptance and availability</li>
              <li>Payment is required at the time of purchase</li>
              <li>We accept major credit cards through Stripe</li>
              <li>You are responsible for providing accurate billing and shipping information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Shipping and Delivery</h2>
            <p>
              Delivery times are estimates and not guaranteed. We are not responsible for delays 
              caused by shipping carriers, weather, or other factors beyond our control. 
              Risk of loss passes to you upon delivery to the carrier.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Returns and Refunds</h2>
            <p>
              Please refer to our{" "}
              <a href="/returns" className="text-charcoal underline">Returns Policy</a>{" "}
              for information about returns, exchanges, and refunds.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and designs, is the 
              property of SofiLife and is protected by copyright and trademark laws. You may not 
              use, reproduce, or distribute our content without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Limitation of Liability</h2>
            <p>
              SofiLife shall not be liable for any indirect, incidental, special, or consequential 
              damages arising from your use of our website or products. Our total liability shall 
              not exceed the amount you paid for your order.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting to the website. Your continued use of the site constitutes 
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Contact</h2>
            <p>
              For questions about these terms, please contact us at{" "}
              <a href="mailto:hello@sofilife.com" className="text-charcoal underline">
                hello@sofilife.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
