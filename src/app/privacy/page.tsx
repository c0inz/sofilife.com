export const metadata = {
  title: "Privacy Policy - SofiLife",
  description: "Learn how SofiLife collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="container section">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-headline font-medium mb-2">Privacy Policy</h1>
        <p className="text-small text-stone mb-8">Last updated: January 2025</p>
        
        <div className="space-y-8 text-body text-stone">
          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Overview</h2>
            <p>
              At SofiLife, we take your privacy seriously. This policy describes how we collect, 
              use, and protect your personal information when you visit our website and make purchases.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Information We Collect</h2>
            <p className="mb-4">We collect information that you provide directly, including:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Name and contact information (email, shipping address)</li>
              <li>Payment information (processed securely through Stripe)</li>
              <li>Order history and preferences</li>
              <li>Communications with our team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Respond to your questions and requests</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Payment Security</h2>
            <p>
              All payment processing is handled by Stripe, a PCI-compliant payment processor. 
              We never store your full credit card information on our servers.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Cookies</h2>
            <p>
              We use cookies to improve your browsing experience, remember your cart, and 
              understand how you use our site. You can control cookie settings in your browser.
            </p>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-title font-medium text-charcoal mb-4">Contact Us</h2>
            <p>
              If you have questions about this privacy policy or your personal data, 
              please contact us at{" "}
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
