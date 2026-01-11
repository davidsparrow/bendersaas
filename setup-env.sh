#!/bin/bash

# Setup script for environment variables
echo "🚀 Setting up Bender SAAS environment..."

# Check if .env.local already exists
if [ -f .env.local ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local from template
cat > .env.local << 'EOF'
# ============================================
# SUPABASE CONFIGURATION
# ============================================
# Get these from: https://app.supabase.com -> Your Project -> Settings -> API
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# ============================================
# STRIPE CONFIGURATION
# ============================================
# Get these from: https://dashboard.stripe.com -> Developers -> API keys
# Use TEST MODE keys for development
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# ============================================
# APP CONFIGURATION
# ============================================
# For local development
NEXT_PUBLIC_APP_URL=http://localhost:3000
# For Vercel deployment, update this to: https://your-app.vercel.app
EOF

echo "✅ Created .env.local file"
echo ""
echo "📝 Next steps:"
echo "1. Edit .env.local and add your Supabase credentials"
echo "2. Edit .env.local and add your Stripe credentials"
echo "3. Run: npm run dev"
echo ""
echo "📚 See DEPLOY_VERCEL.md for Vercel deployment instructions"
