# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Set Up Environment Variables

Edit `.env.local` and add your credentials:

**Supabase** (Get from: https://app.supabase.com → Your Project → Settings → API)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

**Stripe** (Get from: https://dashboard.stripe.com → Developers → API keys)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (use `pk_test_...` for testing)
- `STRIPE_SECRET_KEY` (use `sk_test_...` for testing)
- `STRIPE_WEBHOOK_SECRET` (get after setting up webhook)

**App URL**
- `NEXT_PUBLIC_APP_URL=http://localhost:3000` (for local)

### Step 3: Set Up Supabase Database

1. Go to Supabase Dashboard → SQL Editor
2. Copy contents of `supabase-schema.sql`
3. Paste and Run

### Step 4: Run Locally
```bash
npm run dev
```

Visit: http://localhost:3000

### Step 5: Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add all environment variables from `.env.local`
5. Deploy!

**After deployment:**
- Update `NEXT_PUBLIC_APP_URL` to your Vercel URL
- Set up Stripe webhook pointing to: `https://your-app.vercel.app/api/webhooks/stripe`

## 📚 Full Documentation

- **Local Setup**: See `SETUP_LOCAL.md`
- **Vercel Deployment**: See `DEPLOY_VERCEL.md`
- **Main README**: See `README.md`

## 🧪 Test Cards (Stripe)

- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- 3D Secure: `4000 0025 0000 3155`

Use any future expiry date, any CVC, any ZIP.
