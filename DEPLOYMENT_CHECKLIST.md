# 🚀 Deployment Checklist

Use this checklist to ensure everything is set up correctly before deploying to Vercel.

## Pre-Deployment Setup

### ✅ Supabase
- [ ] Created Supabase project
- [ ] Copied Project URL → `NEXT_PUBLIC_SUPABASE_URL`
- [ ] Copied Anon Key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] Copied Service Role Key → `SUPABASE_SERVICE_ROLE_KEY`
- [ ] Ran `supabase-schema.sql` in SQL Editor
- [ ] Verified `subscriptions` table exists
- [ ] Verified `contact_submissions` table exists

### ✅ Stripe
- [ ] Created Stripe account
- [ ] In Test Mode (for development)
- [ ] Copied Publishable Key → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- [ ] Copied Secret Key → `STRIPE_SECRET_KEY`
- [ ] (Webhook will be set up after deployment)

### ✅ Local Testing
- [ ] Created `.env.local` file
- [ ] Added all environment variables
- [ ] Ran `npm run dev`
- [ ] Tested signup/login
- [ ] Tested protected routes
- [ ] Tested contact form

## Vercel Deployment

### ✅ Code Preparation
- [ ] Code pushed to GitHub
- [ ] `.env.local` is in `.gitignore` (should not be committed)
- [ ] All files committed and pushed

### ✅ Vercel Setup
- [ ] Created Vercel account
- [ ] Imported GitHub repository
- [ ] Framework auto-detected as Next.js

### ✅ Environment Variables in Vercel
- [ ] `NEXT_PUBLIC_SUPABASE_URL` added
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` added
- [ ] `SUPABASE_SERVICE_ROLE_KEY` added
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` added
- [ ] `STRIPE_SECRET_KEY` added
- [ ] `NEXT_PUBLIC_APP_URL` added (temporary, update after deploy)
- [ ] All variables set for Production, Preview, Development

### ✅ First Deployment
- [ ] Clicked "Deploy"
- [ ] Build completed successfully
- [ ] Got Vercel URL (e.g., `https://your-app.vercel.app`)

### ✅ Post-Deployment Configuration
- [ ] Updated `NEXT_PUBLIC_APP_URL` in Vercel to actual URL
- [ ] Set up Stripe webhook:
  - URL: `https://your-app.vercel.app/api/webhooks/stripe`
  - Events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`
- [ ] Copied webhook signing secret
- [ ] Added `STRIPE_WEBHOOK_SECRET` to Vercel
- [ ] Redeployed (or auto-redeployed)

## Testing After Deployment

### ✅ Authentication
- [ ] Can visit homepage
- [ ] Can sign up new account
- [ ] Can log in
- [ ] Can log out
- [ ] Protected routes redirect if not logged in

### ✅ Protected Content
- [ ] Can access `/dashboard` when logged in
- [ ] Can access `/protected` when logged in
- [ ] Cannot access `/newsletter` without subscription

### ✅ Stripe Integration
- [ ] Can view `/pricing` page
- [ ] "Subscribe Now" button works
- [ ] Redirects to Stripe checkout
- [ ] Can complete checkout with test card
- [ ] Redirects back to dashboard after payment
- [ ] Subscription appears in Supabase `subscriptions` table

### ✅ Webhooks
- [ ] Webhook endpoint accessible
- [ ] Stripe dashboard shows successful webhook calls
- [ ] Subscription status updates in database after payment

### ✅ Contact Form
- [ ] Can submit contact form
- [ ] Submission appears in Supabase `contact_submissions` table

## Production Checklist (Before Going Live)

- [ ] Switch Stripe to Live Mode
- [ ] Update Stripe keys to live keys in Vercel
- [ ] Create production webhook endpoint
- [ ] Test with real payment (small amount)
- [ ] Set up custom domain (optional)
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up error monitoring (optional)
- [ ] Review all features one more time
- [ ] Test on mobile devices
- [ ] Check browser compatibility

## Quick Reference

**Test Card (Stripe):** `4242 4242 4242 4242`  
**Test Expiry:** Any future date  
**Test CVC:** Any 3 digits  
**Test ZIP:** Any 5 digits

**Where to get credentials:**
- Supabase: https://app.supabase.com → Project → Settings → API
- Stripe: https://dashboard.stripe.com → Developers → API keys
- Vercel: https://vercel.com → Your Project → Settings → Environment Variables

## Need Help?

- **Local Setup Issues:** See `SETUP_LOCAL.md`
- **Vercel Deployment:** See `DEPLOY_VERCEL.md`
- **Environment Variables:** See `VERCEL_ENV_VARS.md`
- **Quick Start:** See `QUICK_START.md`
