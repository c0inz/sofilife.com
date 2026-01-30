# SofiLife.com

**Sofi's clothing brand — clean, modern e-commerce**

## Vision

A minimalist clothing store for Sofi's designs. Mobile-first, fast checkout, beautiful product presentation.

## First Collection

- **Plush Hoodie** — Launch item

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (Vercel Postgres or Supabase)
- **Payments:** Stripe (with Link for one-click checkout)
- **Hosting:** Vercel
- **Images:** Cloudinary or Vercel Blob

## Key Features

### Shopping Experience
- [ ] Clean product grid
- [ ] Product detail pages with size/color selection
- [ ] Quick-add to cart
- [ ] Persistent cart (localStorage + DB sync)
- [ ] Mobile-optimized gallery

### Checkout
- [ ] Stripe Checkout or embedded checkout
- [ ] Stripe Link for one-click payments
- [ ] Address auto-complete (Google Places API)
- [ ] Apple Pay / Google Pay
- [ ] Guest checkout (no account required)

### Pages
- [ ] Home — Hero + featured products
- [ ] Shop — Product grid with filters
- [ ] Product — Detail page with gallery
- [ ] Cart — Review + proceed to checkout
- [ ] About — Sofi's story, brand values
- [ ] Contact — Form + social links
- [ ] FAQ / Shipping — Policies

### Integrations
- [ ] TikTok Shop integration
- [ ] Instagram Shopping (optional)
- [ ] Email capture (Klaviyo, Mailchimp, or Resend)
- [ ] Order notifications

### Admin (Phase 2)
- [ ] Product management
- [ ] Order management
- [ ] Inventory tracking

## Design Inspiration

Clean, minimal brands to reference:
- Everlane
- COS
- ARKET
- Outdoor Voices
- Entireworld

Key principles:
- Lots of whitespace
- Large product photography
- Simple typography
- Max 2-3 colors
- Mobile-first

## Domain

- **Production:** sofilife.com
- **Dev tunnel:** sofilife.sofilife.com (already configured in Cloudflare)

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3005

---

*Designer: Sofi*
*Development: Johnzbot*
