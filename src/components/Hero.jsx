import { useTranslation } from 'react-i18next'
import AppleIcon from './AppleIcon'

const defaultLang = 'en'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.split('-')[0] || defaultLang
  const screenshot = `/assets/${lang}.png`

  const scroll = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative z-0 pt-[140px] pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-blue-deep" style={{
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 20% 80%, rgba(14,165,233,0.25), transparent), radial-gradient(ellipse 60% 50% at 80% 20%, rgba(125,211,252,0.15), transparent)'
      }} />

      <div className="relative max-w-[1080px] mx-auto px-6 grid grid-cols-[1fr_auto] gap-12 items-center max-md:grid-cols-1 max-md:text-center">
        <div className="text-white max-w-[520px] max-md:max-w-full">
          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.05] tracking-tight mb-5">
            {t('hero.title_line1')}<br />{t('hero.title_line2')}
          </h1>
          <p className="text-[17px] leading-relaxed text-white/80 mb-7">
            <strong className="text-white font-semibold">{t('hero.subtitle_bold')}</strong> {t('hero.subtitle_rest')}
          </p>
          <div className="flex gap-3 items-center flex-wrap max-md:justify-center">
            <a href="https://apps.apple.com/app/id6759308848" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-white text-blue-deep font-semibold text-base hover:bg-blue-pale transition-colors">
              <AppleIcon />
              {t('hero.download_ios')}
            </a>
            <a href="#features" onClick={e => scroll(e, '#features')} className="inline-flex items-center px-8 py-3.5 rounded-[10px] bg-transparent text-white font-semibold text-base border-[1.5px] border-white/35 hover:bg-white/10 hover:border-white/60 transition-all">
              {t('hero.learn_more')}
            </a>
          </div>
          <a href="#organizations" onClick={e => scroll(e, '#organizations')} className="inline-block mt-2 text-sm font-medium text-white/50 hover:text-white/90 transition-colors">
            {t('hero.for_msas')}
          </a>
        </div>

        <div className="flex justify-center max-md:order-last">
          {/* iPhone 16 Pro mockup — accurate proportions */}
          <div className="relative shrink-0 w-[270px] max-md:w-[230px] max-sm:w-[200px]">
            {/* Titanium chassis (outer frame) */}
            <div
              className="relative aspect-[147/305] rounded-[48px] max-md:rounded-[41px] max-sm:rounded-[36px] p-[3px] max-md:p-[2.5px] max-sm:p-[2px]"
              style={{
                background: 'linear-gradient(145deg, #f5f2ec 0%, #e8e3d8 25%, #d9d2c3 50%, #c9c0ae 75%, #e8e3d8 100%)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.35), 0 0 0 0.5px rgba(0,0,0,0.08), inset 0 0.5px 0 rgba(255,255,255,0.6), inset 0 -0.5px 0 rgba(0,0,0,0.05)'
              }}
            >
              {/* Inner black bezel */}
              <div className="relative w-full h-full rounded-[45px] max-md:rounded-[38.5px] max-sm:rounded-[34px] bg-black p-[4px] max-md:p-[3.5px] max-sm:p-[3px]">
                {/* Screen area */}
                <div className="relative w-full h-full rounded-[41px] max-md:rounded-[35px] max-sm:rounded-[31px] overflow-hidden">
                  {/* Screenshot */}
                  <img key={screenshot} src={screenshot} alt="Ihsan app" fetchpriority="high" decoding="async" className="w-full h-full object-cover object-center" />

                  {/* Dynamic Island */}
                  <div className="absolute top-[6px] max-md:top-[5px] max-sm:top-[4px] left-1/2 -translate-x-1/2 z-20 w-[30%] aspect-[37/11] bg-black rounded-full shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.04)]" />

                  {/* Screen reflection */}
                  <div className="absolute inset-0 z-10 pointer-events-none" style={{
                    background: 'linear-gradient(165deg, rgba(255,255,255,0.08) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.03) 100%)'
                  }} />

                  {/* Home indicator */}
                  <div className="absolute bottom-[6px] max-sm:bottom-[5px] left-1/2 -translate-x-1/2 z-20 w-[36%] h-[4px] max-sm:h-[3px] bg-white/30 rounded-full" />
                </div>
              </div>
            </div>

            {/* Hardware buttons — titanium color, flush with frame */}
            {/* Action button (top-left) */}
            <div className="absolute left-[-2px] top-[15%] w-[2.5px] h-[3.2%] rounded-l-[1px]" style={{ background: 'linear-gradient(90deg, #d9d2c3, #b8afa0)' }} />
            {/* Volume up */}
            <div className="absolute left-[-2px] top-[21%] w-[2.5px] h-[6%] rounded-l-[1px]" style={{ background: 'linear-gradient(90deg, #d9d2c3, #b8afa0)' }} />
            {/* Volume down */}
            <div className="absolute left-[-2px] top-[28.5%] w-[2.5px] h-[6%] rounded-l-[1px]" style={{ background: 'linear-gradient(90deg, #d9d2c3, #b8afa0)' }} />
            {/* Power */}
            <div className="absolute right-[-2px] top-[22%] w-[2.5px] h-[11%] rounded-r-[1px]" style={{ background: 'linear-gradient(270deg, #d9d2c3, #b8afa0)' }} />
            {/* Camera Control (iPhone 16 Pro) */}
            <div className="absolute right-[-2px] top-[36%] w-[2.5px] h-[5%] rounded-r-[1px]" style={{ background: 'linear-gradient(270deg, #d9d2c3, #b8afa0)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
