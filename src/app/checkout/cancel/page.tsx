import Link from "next/link";
import { Button } from "@/components/ui";

export const metadata = {
  title: "Checkout Cancelled - SofiLife",
  description: "Your checkout was cancelled.",
};

export default function CancelPage() {
  return (
    <div className="container section text-center">
      <div className="max-w-md mx-auto">
        {/* Cancel Icon */}
        <div className="w-20 h-20 bg-stone/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-stone"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h1 className="text-headline font-medium mb-4">Checkout Cancelled</h1>
        
        <p className="text-body text-stone mb-8">
          Your order was not completed. Don&apos;t worry — your cart items are still saved.
        </p>

        <div className="space-y-4">
          <Link href="/checkout">
            <Button fullWidth>Try Again</Button>
          </Link>
          
          <Link href="/shop">
            <Button variant="outline" fullWidth>
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
