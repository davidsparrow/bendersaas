# Bender SAAS - Next.js Application

A modern SaaS application built with Next.js, Supabase, and Stripe, featuring free authentication and paid Newsletter+ subscriptions.

## Features

- 🔐 **Free Authentication** - Supabase-powered user authentication
- 💳 **Stripe Integration** - Newsletter+ subscription payments
- 🎨 **Modern UI** - Beautiful design based on Stitch designs
- 🛡️ **Protected Routes** - Middleware-based route protection
- 📧 **Newsletter+** - Premium content for paid subscribers
- 📝 **Contact Form** - Integrated contact submission system

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Payments**: Stripe
- **Deployment**: Vercel-ready

## Prerequisites

- Node.js 18+ and npm
- Supabase account and project
- Stripe account
- Vercel account (for deployment)

## Setup Instructions

### 1. Clone and Install

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to SQL Editor and run the `supabase-schema.sql` file to create the necessary tables
3. Copy your project URL and anon key from Settings > API
4. Copy your service role key from Settings > API (keep this secret!)

### 4. Stripe Setup

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Dashboard
3. Set up a webhook endpoint:
   - URL: `https://your-domain.com/api/webhooks/stripe`
   - Events to listen for:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
4. Copy the webhook signing secret

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/              # API routes (auth, Stripe)
│   ├── contact/          # Contact page
│   ├── dashboard/        # User dashboard
│   ├── login/            # Login page
│   ├── newsletter/       # Newsletter+ premium content
│   ├── pricing/          # Pricing/subscription page
│   ├── privacy/          # Privacy policy page
│   ├── protected/        # Protected content (free users)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
├── lib/
│   ├── supabase/         # Supabase client utilities
│   └── stripe.ts         # Stripe utilities
├── middleware.ts         # Route protection middleware
└── supabase-schema.sql   # Database schema
```

## Database Schema

The application uses two main tables:

1. **subscriptions** - Stores user subscription information
2. **contact_submissions** - Stores contact form submissions

Run `supabase-schema.sql` in your Supabase SQL Editor to set up the schema.

## Authentication Flow

1. Users can sign up for free accounts
2. Free users have access to protected content
3. Users can upgrade to Newsletter+ for premium content
4. Stripe handles subscription payments
5. Webhooks update subscription status in Supabase

## Stripe Integration

- **Checkout Session**: Created when user clicks "Subscribe Now"
- **Webhooks**: Handle subscription events (created, updated, canceled)
- **Subscription Status**: Stored in Supabase `subscriptions` table

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy!

### Important: Webhook URL

After deployment, update your Stripe webhook URL to:
```
https://your-vercel-domain.vercel.app/api/webhooks/stripe
```

## Features Overview

### Free Users
- ✅ Sign up and login
- ✅ Access to protected content
- ✅ Basic features

### Newsletter+ Subscribers
- ✅ Everything in Free
- ✅ Exclusive newsletter content
- ✅ Early access to features
- ✅ Premium resources
- ✅ Priority support

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Support

For issues or questions, please contact: privacy@bendersaas.ai

## License

© 2024 Bender SAAS • Crafting Digital Excellence
