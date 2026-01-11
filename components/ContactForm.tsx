'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Store contact form submission in Supabase
    const { error } = await supabase.from('contact_submissions').insert({
      name,
      email,
      message,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your message. Please try again.')
    } else {
      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    }

    setLoading(false)
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-primary text-4xl mb-4">✓</div>
        <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
        <p className="text-[#af9db9]">
          Thank you for contacting us. We'll get back to you soon.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm font-medium leading-normal px-2">
          Name
        </label>
        <input
          className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-white/10 bg-white/5 focus:border-primary h-14 placeholder:text-[#af9db9]/50 px-6 text-base font-normal transition-all"
          placeholder="Enter your full name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm font-medium leading-normal px-2">
          Email
        </label>
        <input
          className="form-input w-full rounded-full text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-white/10 bg-white/5 focus:border-primary h-14 placeholder:text-[#af9db9]/50 px-6 text-base font-normal transition-all"
          placeholder="hello@example.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-white/80 text-sm font-medium leading-normal px-2">
          Message
        </label>
        <textarea
          className="form-input w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-white/10 bg-white/5 focus:border-primary min-h-[140px] placeholder:text-[#af9db9]/50 p-6 text-base font-normal leading-normal resize-none transition-all"
          placeholder="Tell us about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-4 w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{loading ? 'Sending...' : 'Send Message'}</span>
        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
          send
        </span>
      </button>
    </form>
  )
}
