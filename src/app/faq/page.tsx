import Link from "next/link";

export const metadata = {
  title: "FAQ - SofiLife",
  description: "Frequently asked questions about orders, shipping, returns, and more.",
};

const faqs = [
  {
    category: "Orders",
    questions: [
      {
        q: "How do I track my order?",
        a: "Once your order ships, you'll receive an email with tracking information. You can also check your order status by contacting us at hello@sofilife.com.",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "We process orders quickly! If you need to make changes, please contact us within 1 hour of placing your order. After that, we may not be able to modify it.",
      },
      {
        q: "Do you offer gift wrapping?",
        a: "Not yet, but we're working on it! All orders come in our signature minimal packaging that's recyclable.",
      },
    ],
  },
  {
    category: "Shipping",
    questions: [
      {
        q: "Where do you ship?",
        a: "Currently, we ship to the United States and Canada. International shipping is coming soon!",
      },
      {
        q: "How long does shipping take?",
        a: "Standard shipping typically takes 5-7 business days within the US. Expedited options are available at checkout.",
      },
      {
        q: "Is shipping free?",
        a: "Yes! We offer free standard shipping on all orders within the US. Canadian orders have a flat rate of $12.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition with tags attached.",
      },
      {
        q: "How do I start a return?",
        a: "Email us at hello@sofilife.com with your order number and reason for return. We'll send you a prepaid shipping label.",
      },
      {
        q: "How long do refunds take?",
        a: "Once we receive your return, refunds are processed within 5-7 business days. You'll receive an email confirmation.",
      },
      {
        q: "Can I exchange for a different size?",
        a: "Absolutely! Contact us and we'll help you exchange for a different size (subject to availability).",
      },
    ],
  },
  {
    category: "Product & Care",
    questions: [
      {
        q: "How should I care for my items?",
        a: "Most of our items can be machine washed cold and tumble dried low. Check the care label on each garment for specific instructions.",
      },
      {
        q: "What materials do you use?",
        a: "We use premium materials like heavyweight cotton, organic blends, and sustainable fabrics. Each product page lists specific materials.",
      },
      {
        q: "How do your sizes run?",
        a: "Our items are designed for a relaxed, comfortable fit. Check the size guide on each product page for detailed measurements.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-headline font-medium mb-4">Frequently Asked Questions</h1>
          <p className="text-body text-stone">
            Find answers to common questions about orders, shipping, and returns.
          </p>
        </div>

        <div className="space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-title font-medium mb-6 pb-2 border-b border-border">
                {category.category}
              </h2>
              <div className="space-y-6">
                {category.questions.map((faq, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-start justify-between cursor-pointer text-body font-medium">
                      <span className="pr-4">{faq.q}</span>
                      <svg 
                        className="w-5 h-5 text-stone flex-shrink-0 mt-1 transition-transform group-open:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-4 text-body text-stone pl-0">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-16 p-8 bg-sand text-center">
          <h2 className="text-title font-medium mb-4">Still have questions?</h2>
          <p className="text-body text-stone mb-6">
            We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <Link 
            href="/contact"
            className="inline-block px-6 py-3 bg-charcoal text-cream text-small font-medium hover:bg-charcoal/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
