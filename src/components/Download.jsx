import { useTranslation } from 'react-i18next'
import AppleIcon from './AppleIcon'

const langs = ['English', 'العربية', 'Türkçe', 'Français', 'Deutsch', 'Nederlands', 'Español']

export default function Download() {
  const { t } = useTranslation()
  return (
    <section className="py-[72px] bg-blue-deep text-white text-center" id="download">
      <div className="max-w-[1080px] mx-auto px-6">
        <img src="/assets/icon.png" alt="Ihsan" className="w-16 h-16 rounded-2xl mx-auto mb-5 shadow-[0_8px_24px_rgba(0,0,0,0.2)]" />
        <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] tracking-tight mb-4 text-white">
          {t('download.title')}
        </h2>
        <a href="https://apps.apple.com/app/id6759308848" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[10px] bg-white text-blue-deep font-semibold text-base hover:bg-blue-pale transition-colors">
          <AppleIcon />
          {t('download.cta')}
        </a>
        <p className="mt-3 text-[13px] text-white/40">{t('download.note')}</p>
        <div className="flex flex-wrap gap-2 justify-center mt-6">
          {langs.map(l => (
            <span key={l} className="px-3.5 py-1.5 border border-white/15 rounded-md text-[13px] text-white/60 font-medium">{l}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
