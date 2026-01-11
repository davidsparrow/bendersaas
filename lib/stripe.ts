import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export const formatAmountForDisplay = (
  amount: number,
  currency: string = 'usd'
): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(amount / 100)
}

export const formatAmountForStripe = (
  amount: number,
  currency: string = 'usd'
): number => {
  return Math.round(amount * 100)
}
