# Vercel Deployment Guide

Complete guide for deploying Bender SAAS to Vercel.

## Prerequisites

1. ✅ GitHub account
2. ✅ Vercel account (sign up at [vercel.com](https://vercel.com))
3. ✅ Supabase project set up
4. ✅ Stripe account set up

## Step 1: Push Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Bender SAAS app"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Supabase

### 2.1 Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "New Project"
3. Fill in project details
4. Wait for project to be created

### 2.2 Get Supabase Credentials

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep secret!)

### 2.3 Set Up Database Schema

1. Go to **SQL Editor** in Supabase dashboard
2. Click **New query**
3. Copy and paste the entire contents of `supabase-schema.sql`
4. Click **Run** (or press Cmd/Ctrl + Enter)
5. Verify tables were created:
   - Go to **Table Editor** → You should see `subscriptions` and `contact_submissions`

## Step 3: Set Up Stripe

### 3.1 Create Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Sign up or log in
3. Make sure you're in **Test Mode** (toggle in top right)

### 3.2 Get Stripe API Keys

1. Go to **Developers** → **API keys**
2. Copy:
   - **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** → `STRIPE_SECRET_KEY`

### 3.3 Create Product/Price (Optional - for production)

For now, the code creates prices dynamically. For production:
1. Go to **Products** → **Add product**
2. Name: "Newsletter+ Subscription"
3. Price: $9.99/month (recurring)
4. Save the Price ID (you can use this instead of dynamic pricing)

### 3.4 Set Up Webhook (After Vercel Deployment)

**⚠️ Important:** Do this AFTER you deploy to Vercel to get your webhook URL.

1. Go to **Developers** → **Webhooks**
2. Click **Add endpoint**
3. Endpoint URL: `https://your-app.vercel.app/api/webhooks/stripe`
4. Select events to listen for:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**
6. Copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET` (starts with `whsec_`)

## Step 4: Deploy to Vercel

### 4.1 Import Project

1. Go to [vercel.com](https://vercel.com)
2. Click **Add New** → **Project**
3. Import your GitHub repository
4. Vercel will auto-detect Next.js

### 4.2 Configure Project

**Framework Preset:** Next.js (auto-detected)
**Root Directory:** `./` (default)
**Build Command:** `npm run build` (default)
**Output Directory:** `.next` (default)
**Install Command:** `npm install` (default)

### 4.3 Add Environment Variables

Click **Environment Variables** and add:

#### Supabase Variables
```
NEXT_PUBLIC_SUPABASE_URL
= your_supabase_project_url

NEXT_PUBLIC_SUPABASE_ANON_KEY
= your_supabase_anon_key

SUPABASE_SERVICE_ROLE_KEY
= your_supabase_service_role_key
```

#### Stripe Variables
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
= pk_test_your_key (or pk_live_ for production)

STRIPE_SECRET_KEY
= sk_test_your_key (or sk_live_ for production)

STRIPE_WEBHOOK_SECRET
= whsec_your_webhook_secret
```

#### App URL
```
NEXT_PUBLIC_APP_URL
= https://your-app.vercel.app
```

**⚠️ Important:** 
- Add these for **Production**, **Preview**, and **Development** environments
- After first deployment, update `NEXT_PUBLIC_APP_URL` with your actual Vercel URL

### 4.4 Deploy

1. Click **Deploy**
2. Wait for build to complete (2-3 minutes)
3. Your app will be live at `https://your-app.vercel.app`

## Step 5: Configure Stripe Webhook

After deployment:

1. Go to Stripe Dashboard → **Developers** → **Webhooks**
2. Click **Add endpoint** (if you haven't already)
3. Endpoint URL: `https://your-app.vercel.app/api/webhooks/stripe`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copy the **Signing secret**
6. Go back to Vercel → **Settings** → **Environment Variables**
7. Update `STRIPE_WEBHOOK_SECRET` with the new secret
8. Redeploy (or it will auto-redeploy)

## Step 6: Test Your Deployment

### Test Authentication
1. Visit `https://your-app.vercel.app`
2. Click **Sign Up**
3. Create an account
4. Verify you can log in

### Test Protected Routes
1. After logging in, go to `/dashboard`
2. Try accessing `/protected` (should work)
3. Try accessing `/newsletter` (should redirect to pricing)

### Test Stripe Checkout
1. Go to `/pricing`
2. Click **Subscribe Now**
3. Use test card: `4242 4242 4242 4242`
4. Complete checkout
5. Verify redirect back to dashboard
6. Check Supabase `subscriptions` table for new record

### Test Webhooks
1. After successful checkout, check Stripe Dashboard → **Webhooks**
2. Click on your webhook endpoint
3. View **Events** tab
4. You should see successful webhook calls

## Troubleshooting

### Build Fails
- Check that all environment variables are set
- Verify Node.js version (Vercel uses 18.x by default)
- Check build logs in Vercel dashboard

### Authentication Not Working
- Verify Supabase URL and keys are correct
- Check Supabase project is active
- Verify RLS policies are set up correctly

### Stripe Checkout Not Working
- Verify Stripe keys are correct (test vs live)
- Check `NEXT_PUBLIC_APP_URL` matches your Vercel URL
- Check browser console for errors

### Webhooks Not Working
- Verify webhook URL is correct in Stripe
- Check webhook secret matches in Vercel
- View webhook logs in Stripe dashboard
- Check Vercel function logs

### Database Errors
- Verify you ran `supabase-schema.sql`
- Check RLS policies allow service role access
- Verify table names match exactly

## Production Checklist

Before going live:

- [ ] Switch Stripe to **Live Mode**
- [ ] Update Stripe keys to live keys
- [ ] Set up production webhook endpoint
- [ ] Update `NEXT_PUBLIC_APP_URL` to production domain
- [ ] Test with real payment (small amount)
- [ ] Set up custom domain in Vercel
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Review and test all features
- [ ] Set up email notifications (optional)

## Custom Domain (Optional)

1. In Vercel dashboard → **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `NEXT_PUBLIC_APP_URL` to your custom domain
5. Redeploy

## Environment Variables Reference

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Supabase Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public key | Supabase Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Supabase Settings → API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Stripe Dashboard → Developers → API keys |
| `STRIPE_SECRET_KEY` | Stripe secret key | Stripe Dashboard → Developers → API keys |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret | Stripe Dashboard → Developers → Webhooks |
| `NEXT_PUBLIC_APP_URL` | Your app URL | Your Vercel deployment URL |

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Stripe webhook logs
3. Check Supabase logs
4. Review error messages in browser console

For help, contact: privacy@bendersaas.ai
