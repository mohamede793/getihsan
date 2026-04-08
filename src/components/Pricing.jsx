export default function Pricing() {
  return (
    <section className="py-20 bg-gray-100 max-sm:py-14" id="pricing">
      <div className="max-w-[1080px] mx-auto px-6">

        <div className="grid grid-cols-[1fr_auto] gap-20 items-start max-md:grid-cols-1 max-md:gap-12">

          {/* Left: price + features */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue mb-3">Pricing</p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] tracking-tight mb-2">
              Everything. One price.
            </h2>
            <p className="text-[15px] text-gray-500 mb-6 max-w-[440px]">
              Full access to every tool, every language, every update.
            </p>

            <div className="flex items-end gap-1 mb-1">
              <span className="text-[64px] font-extrabold tracking-tighter leading-none">$4.99</span>
              <span className="text-lg text-gray-400 font-medium mb-2">/mo</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">7-day free trial. Cancel anytime.</p>

            <a href="#download" className="inline-flex items-center px-8 py-3.5 rounded-[10px] bg-blue text-white font-semibold text-base hover:bg-blue-deep transition-colors">
              Start Free Trial
            </a>
          </div>

          {/* Right: what's included + oath */}
          <div className="w-full max-w-[340px]">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Includes</p>
              <ul className="space-y-3">
                {[
                  'Crisis intervention tools',
                  '180-day brain rewiring tracker',
                  'Dhikr & dua library',
                  'Content blocker',
                  'Daily pledge & journal',
                  'Analytics & mood tracking',
                  'Salah & workout tracker',
                  '7 languages',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Privacy strip */}
        <div className="mt-14 pt-8 border-t border-gray-200 grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {[
            ['No accounts', 'No email, phone, or identity.'],
            ['On-device only', 'No servers, analytics, or tracking.'],
            ['Discreet', '"Ihsan" means excellence in worship.'],
            ['No data sales', 'Never sold, shared, or used for ads.'],
          ].map(([title, desc]) => (
            <div key={title}>
              <dt className="text-sm font-bold mb-1">{title}</dt>
              <dd className="text-[13px] text-gray-500 leading-relaxed">{desc}</dd>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
