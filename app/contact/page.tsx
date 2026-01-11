import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col mesh-gradient overflow-hidden">
      <header className="w-full px-8 py-8 flex items-center justify-between z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_330)">
                <path
                  clipRule="evenodd"
                  d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_6_330">
                  <rect fill="white" height="48" width="48"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-tight">
            bendersaas.ai
          </h2>
        </Link>
        <div></div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 z-10">
        <div className="w-full max-w-[520px] bg-background-dark/40 backdrop-blur-xl border border-white/10 rounded-xl p-10 shadow-2xl">
          <div className="flex flex-col gap-2 mb-8 text-center">
            <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Get in touch.
            </h1>
            <p className="text-[#af9db9] text-base font-normal leading-normal">
              Start your project with our boutique development house.
            </p>
          </div>

          <ContactForm />
        </div>
      </main>

      <footer className="w-full py-8 px-8 flex justify-center items-center z-10">
        <div className="flex flex-wrap justify-center items-center gap-4 text-[#af9db9] text-xs font-medium tracking-widest uppercase">
          <span>©2025 bendersaas.ai</span>
          <span className="size-1 bg-white/20 rounded-full"></span>
          <Link href="/contact" className="hover:text-primary transition-colors">
            contact
          </Link>
          <span className="size-1 bg-white/20 rounded-full"></span>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            privacy
          </Link>
          <span className="size-1 bg-white/20 rounded-full"></span>
          <Link href="#" className="hover:text-primary transition-colors">
            terms
          </Link>
        </div>
      </footer>

      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    </div>
  )
}
