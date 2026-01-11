# Local Development Setup Guide

## Quick Start for Local Testing

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then fill in your credentials:

#### Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a project
2. Go to **Settings > API**
3. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role key** → `SUPABASE_SERVICE_ROLE_KEY` (keep secret!)

#### Stripe Setup (Test Mode)
1. Go to [stripe.com](https://stripe.com) and create an account
2. Make sure you're in **Test Mode** (toggle in dashboard)
3. Go to **Developers > API keys**
4. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 3. Set Up Supabase Database

1. Go to your Supabase project dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New query**
4. Copy and paste the contents of `supabase-schema.sql`
5. Click **Run** to execute the SQL

This creates:
- `subscriptions` table
- `contact_submissions` table
- Row Level Security policies

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing Features Locally

### ✅ What Works Locally

- **Authentication** (Login/Signup) - Full functionality
- **Protected Routes** - Middleware protection works
- **Dashboard** - View user info and subscription status
- **Protected Content** - Free user content accessible
- **Contact Form** - Submissions saved to Supabase
- **Pricing Page** - Can view pricing
- **Stripe Checkout** - Can initiate checkout (redirects to Stripe)

### ⚠️ What Needs Special Setup

**Stripe Webhooks** - These need a public URL, but you have options:

#### Option A: Use Stripe CLI (Recommended for Local)
```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe  # macOS
# or download from https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to localhost
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will give you a webhook signing secret. Add it to your `.env.local`:
```
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### Option B: Test Without Webhooks First
- You can test everything except subscription status updates
- After checkout, manually update subscription in Supabase for testing
- Deploy to Vercel for full webhook testing

## Testing Flow

1. **Sign Up**: Go to `/signup` and create an account
2. **Login**: Go to `/login` and sign in
3. **Dashboard**: View your dashboard at `/dashboard`
4. **Protected Content**: Access free content at `/protected`
5. **Pricing**: View pricing at `/pricing`
6. **Subscribe**: Click "Subscribe Now" to test Stripe checkout
   - Use Stripe test card: `4242 4242 4242 4242`
   - Any future expiry date
   - Any CVC
   - Any ZIP code
7. **Newsletter+**: After successful payment, access premium content at `/newsletter`

## Stripe Test Cards

Use these test cards in Stripe checkout:

- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

## Troubleshooting

### "Invalid API key" error
- Make sure you're using **Test Mode** keys in Stripe
- Check that `.env.local` is in the root directory
- Restart the dev server after changing env vars

### "Failed to fetch" in checkout
- Check that `NEXT_PUBLIC_APP_URL` is set to `http://localhost:3000`
- Make sure Stripe keys are correct

### Database errors
- Make sure you ran `supabase-schema.sql` in Supabase SQL Editor
- Check that RLS policies are enabled

### Webhook not working
- Use Stripe CLI (Option A above)
- Or deploy to Vercel for easier webhook testing

## When to Deploy to Vercel

Deploy to Vercel when you want to:
- Test webhooks without Stripe CLI
- Share with others for testing
- Test production-like environment
- Use custom domain

For initial development, **local testing is faster and easier!**
