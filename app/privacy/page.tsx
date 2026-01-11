import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="relative z-10 flex flex-col h-screen w-full">
      <div className="fixed inset-0 z-0 animated-bg"></div>
      <header className="flex items-center justify-between px-12 py-8 w-full relative z-10">
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
          <h2 className="text-white text-xl font-bold tracking-tight">bendersaas.ai</h2>
        </Link>
        <div className="hidden md:flex items-center gap-2 text-[#af9db9] text-sm font-medium">
          <span className="material-symbols-outlined text-sm">security</span>
          <span>Secure Data Processing</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 overflow-hidden mb-24 relative z-10">
        <div className="glass-panel w-full max-w-[840px] h-full max-h-[70vh] rounded-lg shadow-2xl flex flex-col overflow-hidden">
          <div className="p-8 pb-4 border-b border-white/5">
            <div className="flex flex-col gap-1">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">
                Legal Statement
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                Privacy Policy
              </h1>
              <p className="text-[#af9db9] text-sm font-normal">Last updated: January 2025</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 pt-4">
            <div className="space-y-8">
              <div>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">
                  1. Introduction
                </h2>
                <p className="text-[#af9db9] text-base font-normal leading-relaxed">
                  At bendersaas.ai, we prioritize your privacy above all. This policy outlines how
                  we collect, use, and protect your personal data when you interact with our
                  boutique SAAS and mobile development services. We believe in transparency and
                  control, ensuring your digital footprint remains your own.
                </p>
              </div>
              <div>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">
                  2. Data Collection
                </h2>
                <p className="text-[#af9db9] text-base font-normal leading-relaxed mb-4">
                  We collect information that you provide directly to us when you request a quote,
                  sign up for our platform, or communicate with our support team.
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="text-white/80">
                      Personal Identification: Name, email address, and company details.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="text-white/80">
                      Usage Data: Log files, IP addresses, and device hardware specifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <span className="text-white/80">
                      Cookies: Essential session management and performance tracking tokens.
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">
                  3. How We Use Your Data
                </h2>
                <p className="text-[#af9db9] text-base font-normal leading-relaxed">
                  Your information is used to provide, maintain, and improve our high-end software
                  solutions. We analyze usage patterns to optimize mobile app performance and ensure
                  the scalability of our SAAS products. We do not sell your personal data to third
                  parties for marketing purposes.
                </p>
              </div>
              <div>
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">
                  4. Data Security
                </h2>
                <p className="text-[#af9db9] text-base font-normal leading-relaxed">
                  We implement industry-leading encryption and security protocols. Our servers are
                  hosted in SOC-2 compliant data centers, and all internal access to client data is
                  strictly logged and audited.
                </p>
              </div>
              <div className="pb-8">
                <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-3">
                  5. Contact Us
                </h2>
                <p className="text-[#af9db9] text-base font-normal leading-relaxed">
                  If you have questions about this Privacy Policy or wish to exercise your data
                  rights, please contact our legal team at:
                </p>
                <a
                  className="inline-block mt-4 text-primary font-bold hover:underline decoration-2 underline-offset-4"
                  href="mailto:privacy@bendersaas.ai"
                >
                  privacy@bendersaas.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 w-full flex flex-col items-center py-6 px-12 pointer-events-none relative z-10">
        <nav className="pointer-events-auto mb-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-xl">
          <Link
            href="/"
            className="flex items-center justify-center size-10 rounded-full text-[#af9db9] hover:text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">home</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center size-10 rounded-full text-[#af9db9] hover:text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">work</span>
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center size-10 rounded-full text-[#af9db9] hover:text-white hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined">grid_view</span>
          </Link>
          <div className="w-px h-6 bg-white/10 mx-1"></div>
          <Link
            href="/signup"
            className="bg-primary text-white h-10 px-6 rounded-full text-sm font-bold tracking-wide hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>
        </nav>
        <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-[#af9db9]/40 pointer-events-auto">
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies Policy
            </Link>
          </div>
          <div>© 2024 bendersaas.ai. All Rights Reserved.</div>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
