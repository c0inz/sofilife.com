"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import { Button, Input } from "@/components/ui";

export default function CheckoutPage() {
  const { items, getTotal } = useCart();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Checkout failed");
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container section text-center">
        <h1 className="text-headline font-medium mb-4">Your cart is empty</h1>
        <p className="text-body text-stone mb-8">
          Add some items to your cart to checkout.
        </p>
        <Link href="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1 className="text-headline font-medium mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Order Summary */}
        <div>
          <h2 className="text-title font-medium mb-6">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 py-4 border-b border-border">
                <div className="relative w-20 h-20 bg-sand flex-shrink-0">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-stone">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-small font-medium">{item.name}</h3>
                  <p className="text-caption text-stone">
                    {item.size} / {item.color}
                  </p>
                  <p className="text-caption text-stone">Qty: {item.quantity}</p>
                </div>
                <div className="text-small font-medium">
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-body">
              <span>Subtotal</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
            <div className="flex justify-between text-body">
              <span>Shipping</span>
              <span className="text-success">Free</span>
            </div>
            <div className="flex justify-between text-title font-medium pt-4 border-t border-border">
              <span>Total</span>
              <span>{formatPrice(getTotal())}</span>
            </div>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <h2 className="text-title font-medium mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error && !email ? "Email is required" : undefined}
            />

            <p className="text-small text-stone">
              You&apos;ll receive order confirmation and shipping updates at this email.
            </p>

            {error && email && (
              <p className="text-small text-error">{error}</p>
            )}

            <Button
              onClick={handleCheckout}
              loading={loading}
              fullWidth
              size="lg"
            >
              Continue to Payment
            </Button>

            <p className="text-caption text-stone text-center">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
