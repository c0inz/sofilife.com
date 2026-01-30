import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Order Confirmed - SofiLife",
  description: "Thank you for your order!",
};

export default function SuccessPage() {
  return (
    <div className="container section text-center">
      <div className="max-w-md mx-auto">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-success"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-headline font-medium mb-4">Order Confirmed!</h1>
        
        <p className="text-body text-stone mb-2">
          Thank you for your purchase.
        </p>
        <p className="text-body text-stone mb-8">
          We&apos;ll send you a confirmation email with your order details and tracking
          information once your order ships.
        </p>

        <div className="space-y-4">
          <Link href="/shop">
            <Button fullWidth>Continue Shopping</Button>
          </Link>
          
          <Link href="/">
            <Button variant="outline" fullWidth>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
