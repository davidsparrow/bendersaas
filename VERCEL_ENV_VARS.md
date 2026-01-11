# Vercel Environment Variables Checklist

Copy and paste these into Vercel Dashboard → Settings → Environment Variables

## Required Environment Variables

### Supabase (3 variables)
```
NEXT_PUBLIC_SUPABASE_URL
= [Your Supabase Project URL]

NEXT_PUBLIC_SUPABASE_ANON_KEY
= [Your Supabase Anon Key]

SUPABASE_SERVICE_ROLE_KEY
= [Your Supabase Service Role Key]
```

### Stripe (3 variables)
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
= pk_test_[your_key] (or pk_live_ for production)

STRIPE_SECRET_KEY
= sk_test_[your_key] (or sk_live_ for production)

STRIPE_WEBHOOK_SECRET
= whsec_[your_webhook_secret]
```

### App Configuration (1 variable)
```
NEXT_PUBLIC_APP_URL
= https://your-app.vercel.app
```

## How to Add in Vercel

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Enter variable name and value
5. Select environments: **Production**, **Preview**, **Development**
6. Click **Save**
7. Repeat for each variable

## After First Deployment

1. Get your Vercel URL (e.g., `https://your-app.vercel.app`)
2. Update `NEXT_PUBLIC_APP_URL` in Vercel environment variables
3. Set up Stripe webhook with your Vercel URL
4. Get webhook secret and update `STRIPE_WEBHOOK_SECRET`
5. Redeploy (or it will auto-redeploy)

## Quick Copy-Paste Format

For easy copy-paste, here's the format:

**Supabase:**
- Variable: `NEXT_PUBLIC_SUPABASE_URL` | Value: `[your_url]`
- Variable: `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Value: `[your_key]`
- Variable: `SUPABASE_SERVICE_ROLE_KEY` | Value: `[your_key]`

**Stripe:**
- Variable: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Value: `pk_test_[your_key]`
- Variable: `STRIPE_SECRET_KEY` | Value: `sk_test_[your_key]`
- Variable: `STRIPE_WEBHOOK_SECRET` | Value: `whsec_[your_secret]`

**App:**
- Variable: `NEXT_PUBLIC_APP_URL` | Value: `https://your-app.vercel.app`

## ⚠️ Important Notes

1. **Never commit** `.env.local` to git (it's in .gitignore)
2. **Use test keys** for development, **live keys** for production
3. **Service Role Key** is sensitive - keep it secret
4. **Webhook secret** changes if you recreate the webhook endpoint
5. Add variables to **all environments** (Production, Preview, Development)
