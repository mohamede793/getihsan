import AppleIcon from './AppleIcon'

export default function Hero() {
  const scroll = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative pt-[140px] pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-deep" style={{
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(14,165,233,0.25), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(125,211,252,0.15), transparent)'
      }} />

      <div className="relative max-w-[1080px] mx-auto px-6 grid grid-cols-[1fr_auto] gap-12 items-center max-md:grid-cols-1 max-md:text-center">
        <div className="text-white max-w-[520px] max-md:max-w-full">
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.05] tracking-tight mb-5">
            Break Free.<br />Stay Free.
          </h1>
          <p className="text-[17px] leading-relaxed text-white/80 mb-7">
            Neuroscience-backed recovery tools and Islamic guidance to overcome pornography addiction &mdash; privately, on your phone.
          </p>
          <div className="flex gap-3 flex-wrap max-md:justify-center">
            <a href="#download" onClick={e => scroll(e, '#download')} className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-white text-blue-deep font-semibold text-base hover:bg-blue-pale transition-colors">
              <AppleIcon />
              Download for iOS
            </a>
            <a href="#features" onClick={e => scroll(e, '#features')} className="inline-flex items-center px-8 py-3.5 rounded-[10px] bg-transparent text-white font-semibold text-base border-[1.5px] border-white/35 hover:bg-white/10 hover:border-white/60 transition-all">
              Learn More
            </a>
          </div>
          <p className="mt-5 text-[13px] text-white/45">No accounts. No tracking. 100% private.</p>
          <a href="#organizations" onClick={e => scroll(e, '#organizations')} className="inline-block mt-2 text-sm font-medium text-white/50 hover:text-white/90 transition-colors">
            For MSAs & youth groups &rarr;
          </a>
        </div>

        <div className="flex justify-center max-md:order-last">
          {/* iPhone 16 Pro mockup — accurate proportions */}
          <div className="relative shrink-0 w-[270px] max-md:w-[230px] max-sm:w-[200px]">
            {/* Titanium chassis */}
            <div
              className="relative aspect-[147/305] rounded-[48px] max-md:rounded-[41px] max-sm:rounded-[36px] p-[5px] max-md:p-[4px] max-sm:p-[3.5px]"
              style={{
                background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 50%, #2c2c2e 100%)',
                boxShadow: '0 28px 80px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.08), inset 0 0.5px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Screen area */}
              <div className="relative w-full h-full rounded-[43px] max-md:rounded-[37px] max-sm:rounded-[33px] bg-[#0369A1] overflow-hidden">
                <img src="/assets/screenshot.png" alt="Ihsan app" fetchpriority="high" decoding="async" className="absolute left-0 right-0 bottom-0 top-[3px] max-md:top-[2px] max-sm:top-[2px] w-full object-cover object-top" style={{ height: 'calc(100% - 3px)' }} />

                {/* Dynamic Island — aligned with top of screenshot */}
                <div className="absolute top-[7px] max-md:top-[6px] max-sm:top-[5px] left-1/2 -translate-x-1/2 z-20 w-[28%] aspect-[37/11] bg-black rounded-full" />

                {/* Subtle screen reflection */}
                <div className="absolute inset-0 z-10 pointer-events-none" style={{
                  background: 'linear-gradient(165deg, rgba(255,255,255,0.06) 0%, transparent 35%)'
                }} />

                {/* Home indicator */}
                <div className="absolute bottom-[5px] max-sm:bottom-[4px] left-1/2 -translate-x-1/2 z-20 w-[36%] h-[4px] max-sm:h-[3px] bg-white/25 rounded-full" />
              </div>
            </div>

            {/* Hardware buttons — flush with frame edge */}
            {/* Power */}
            <div className="absolute right-[-2.5px] top-[27%] w-[3px] h-[11%] bg-[#2c2c2e] rounded-r-[1px]" />
            {/* Volume up */}
            <div className="absolute left-[-2.5px] top-[21%] w-[3px] h-[5.5%] bg-[#2c2c2e] rounded-l-[1px]" />
            {/* Volume down */}
            <div className="absolute left-[-2.5px] top-[28.5%] w-[3px] h-[5.5%] bg-[#2c2c2e] rounded-l-[1px]" />
            {/* Action button */}
            <div className="absolute left-[-2.5px] top-[15.5%] w-[3px] h-[3%] bg-[#2c2c2e] rounded-l-[1px]" />
          </div>
        </div>
      </div>
    </section>
  )
}
