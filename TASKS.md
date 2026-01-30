# SofiLife.com Task List

## Phase 1: Foundation (MVP) ✅ COMPLETE
*Goal: Live store with one product, working checkout*

### Setup ✅
- [x] **S1** Initialize Next.js 14 project with Tailwind
- [x] **S2** Set up Prisma + database (SQLite with libsql adapter)
- [x] **S3** Configure Stripe API keys (placeholders in .env.example)
- [ ] **S4** Set up Vercel deployment
- [ ] **S5** Configure sofilife.com domain

### Design System ✅
- [x] **D1** Define color palette + typography (cream, charcoal, stone, sand, accent)
- [x] **D2** Create base components (Button, Input, Card)
- [x] **D3** Mobile-first responsive grid
- [x] **D4** Navigation component (header + mobile menu)
- [x] **D5** Footer component

### Product Pages ✅
- [x] **P1** Product schema (name, price, images, sizes, colors, inventory)
- [x] **P2** Product grid component
- [x] **P3** Product detail page with gallery
- [x] **P4** Size/color selector
- [x] **P5** Add to cart functionality
- [x] **P6** Seed database with Plush Hoodie

### Cart ✅
- [x] **C1** Cart context/state management (Zustand)
- [x] **C2** Cart sidebar drawer
- [x] **C3** Update quantity / remove items
- [x] **C4** Cart persistence (localStorage)
- [x] **C5** Cart icon with item count

### Checkout ✅
- [x] **X1** Stripe Checkout integration (redirect mode)
- [ ] **X2** Stripe Link (one-click) setup - *deferred*
- [ ] **X3** Apple Pay / Google Pay - *deferred*
- [ ] **X4** Address auto-complete - *deferred*
- [x] **X5** Order confirmation page
- [ ] **X6** Email receipt (Stripe or custom) - *deferred*

### Static Pages ✅
- [x] **W1** Home page — hero + featured product
- [x] **W2** About page — Sofi's story
- [x] **W3** Contact page — form + socials
- [x] **W4** FAQ / Shipping page
- [x] **W5** Privacy Policy / Terms

---

## Phase 2: Polish + Marketing

### SEO & Performance
- [ ] **SEO1** Meta tags, Open Graph, Twitter cards
- [ ] **SEO2** Structured data (Product schema)
- [ ] **SEO3** Sitemap + robots.txt
- [ ] **SEO4** Image optimization
- [ ] **SEO5** Core Web Vitals audit

### Email
- [ ] **E1** Email capture popup or footer form
- [ ] **E2** Welcome email sequence
- [ ] **E3** Abandoned cart email
- [ ] **E4** Order shipped notification

### TikTok Shop
- [ ] **T1** TikTok for Business account setup
- [ ] **T2** TikTok Shop seller registration
- [ ] **T3** Product catalog sync
- [ ] **T4** TikTok Pixel installation
- [ ] **T5** Shoppable video linking

### Analytics
- [ ] **A1** Vercel Analytics
- [ ] **A2** Google Analytics 4
- [ ] **A3** Conversion tracking (Stripe → GA)

---

## Phase 3: Scale

### Admin Dashboard
- [ ] **AD1** Order management
- [ ] **AD2** Product CRUD
- [ ] **AD3** Inventory tracking
- [ ] **AD4** Sales reports

### Additional Features
- [ ] **F1** Product reviews
- [ ] **F2** Wishlist
- [ ] **F3** Size guide
- [ ] **F4** Instagram feed integration
- [ ] **F5** Discount codes

---

## Notes

**Tech Stack:**
- Next.js 14 (App Router)
- Tailwind CSS
- Prisma 7 with SQLite + libsql adapter
- Stripe Checkout (redirect mode)
- Zustand for cart state

**Dev Server:** `npm run dev` → http://localhost:3005

**Database Commands:**
- `npm run db:push` - Push schema changes
- `npm run db:seed` - Seed with Plush Hoodie
- `npm run db:studio` - Open Prisma Studio

---

*Phase 1 completed: January 2025*
