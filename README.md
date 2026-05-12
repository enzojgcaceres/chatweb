# Kanguro Insurance — Landing Page

Premium pet insurance landing with Liquid Ether background + Intercom Messenger.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **ogl** — WebGL for Liquid Ether background
- **Intercom** — anonymous visitor chat (cookie-based)

---

## Quick Start

```bash
# 1. Create Next.js project
npx create-next-app@latest kanguro-landing --typescript --tailwind --eslint
# Select: App Router: Yes, Src directory: No, Import Alias: @/

# 2. Install dependencies
npm install ogl

# 3. Copy all files from this folder into your project root

# 4. Run dev
npm run dev
```

---

## Intercom Setup

Open `components/IntercomProvider.tsx` and replace:

```ts
const INTERCOM_APP_ID = "YOUR_APP_ID";
```

With your actual Intercom App ID (found in Settings → Messenger → Install).

**Config used:** Anonymous visitors mode — conversations persist in browser via cookie.
No login or user identity required. Perfect for demo/prospect websites.

The Intercom launcher appears bottom-right automatically on all pages.

### "Chat with us" button

The CTA section has a "Chat with us" button that programmatically opens the Intercom widget:

```ts
window.Intercom("show");
```

You can add this anywhere in your code to trigger the chat.

---

## Customization Guide (for fast demos)

This landing is built to be easily reskinned. The key variables are in `app/globals.css`:

```css
:root {
  --cream: #faf6f0;       /* Background text/surfaces */
  --amber: #c8893a;       /* Primary accent */
  --amber-light: #e8a94a; /* Highlight accent */
  --charcoal: #1a1510;    /* Page background */
}
```

### To adapt for a new client:

1. **Brand colors** → Update CSS variables in `globals.css`
2. **LiquidEther palette** → Edit `colorA/B/C/D` in `components/LiquidEther.tsx`
3. **Copy** → Update text in `app/page.tsx` (hero h1, plan names, stats)
4. **Plans** → Edit the `plans` array at top of `app/page.tsx`
5. **Logo** → Update the `Navbar.tsx` company name
6. **Intercom App ID** → Swap in `components/IntercomProvider.tsx`

---

## Deploy to Vercel

```bash
git init && git add . && git commit -m "init"
# Push to GitHub, then import in vercel.com
```

`next.config.ts` already has `ignoreBuildErrors: true` and `ignoreDuringBuilds: true`
so Vercel won't block deploy on TypeScript/ESLint warnings from 3rd-party libs.

---

## File Structure

```
kanguro-landing/
├── app/
│   ├── globals.css          ← Design tokens + utility classes
│   ├── layout.tsx           ← Fonts + IntercomProvider
│   └── page.tsx             ← Full landing (Hero, How It Works, Plans, CTA, Footer)
├── components/
│   ├── IntercomProvider.tsx ← Intercom anonymous boot
│   ├── LiquidEther.tsx      ← WebGL marble/silk background
│   └── Navbar.tsx           ← Sticky nav with scroll effect
├── next.config.ts
├── tailwind.config.ts
└── package.json
```
