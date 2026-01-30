import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  try {
    const { items, email } = (await request.json()) as {
      items: CartItem[];
      email?: string;
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    // Verify products exist and prices are correct
    const productIds = Array.from(new Set(items.map((item) => item.productId)));
    const products = await prisma.product.findMany({
      where: { id: { in: productIds } },
    });

    const productMap = new Map(products.map((p) => [p.id, p]));

    // Build line items for Stripe
    const lineItems = items.map((item) => {
      const product = productMap.get(item.productId);
      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: `Size: ${item.size} | Color: ${item.color}`,
            images: item.image ? [item.image] : [],
          },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    });

    // Calculate subtotal
    const subtotal = items.reduce((sum, item) => {
      const product = productMap.get(item.productId);
      return sum + (product?.price || 0) * item.quantity;
    }, 0);

    // Create order in database
    const order = await prisma.order.create({
      data: {
        email: email || "guest@sofilife.com",
        status: "pending",
        subtotal,
        shipping: 0, // Free shipping for now
        total: subtotal,
        items: {
          create: items.map((item) => {
            const product = productMap.get(item.productId);
            return {
              productId: item.productId,
              quantity: item.quantity,
              price: product?.price || 0,
              size: item.size,
              color: item.color,
            };
          }),
        },
      },
    });

    // Create Stripe Checkout Session
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
      customer_email: email,
      metadata: {
        orderId: order.id,
      },
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      billing_address_collection: "required",
    });

    // Update order with Stripe session ID
    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json({ url: session.url, orderId: order.id });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
