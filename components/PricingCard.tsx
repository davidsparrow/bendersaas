'use client'

import { useState } from 'react'
import { loadStripe, Stripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PricingCardProps {
  hasSubscription: boolean
}

export default function PricingCard({ hasSubscription }: PricingCardProps) {
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { sessionId } = await response.json()

      const stripe: Stripe | null = await stripePromise
      if (stripe) {
        // @ts-ignore - redirectToCheckout exists on Stripe but types may be outdated
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        })
        if (error) {
          console.error('Error redirecting to checkout:', error)
        }
      }
    } catch (error) {
      console.error('Error creating checkout session:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-background-dark/40 backdrop-blur-xl border border-primary/40 rounded-xl p-8 relative">
      <div className="absolute top-4 right-4 px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-bold text-primary">
        POPULAR
      </div>
      <h3 className="text-2xl font-bold mb-2">Newsletter+</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">$9.99</span>
        <span className="text-[#af9db9]">/month</span>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          <span className="text-[#af9db9]">Everything in Free</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          <span className="text-[#af9db9]">Exclusive newsletter content</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          <span className="text-[#af9db9]">Early access to features</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          <span className="text-[#af9db9]">Premium resources</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">✓</span>
          <span className="text-[#af9db9]">Priority support</span>
        </li>
      </ul>
      {hasSubscription ? (
        <button
          disabled
          className="w-full py-3 rounded-full bg-primary/50 text-white cursor-not-allowed"
        >
          Active Subscription
        </button>
      ) : (
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Subscribe Now'}
        </button>
      )}
    </div>
  )
}
