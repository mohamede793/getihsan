import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="bg-[#0B1929] text-white/60 pt-9 pb-5">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex justify-between items-center pb-5 border-b border-white/[0.08] max-sm:flex-col max-sm:gap-3.5 max-sm:text-center">
          <Link to="/" className="flex items-center gap-2.5 font-semibold text-base text-white">
            <img src="/assets/icon.png" alt="Ihsan" className="w-7 h-7 rounded-[7px]" />
            Ihsan
          </Link>
          <div className="flex gap-6 max-sm:flex-col max-sm:gap-2">
            <Link to="/privacy" className="text-[13px] hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-[13px] hover:text-white transition-colors">{t('footer.terms')}</Link>
            <Link to="/support" className="text-[13px] hover:text-white transition-colors">{t('footer.support')}</Link>
          </div>
        </div>
        <div className="pt-4 text-center text-xs text-white/25">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  )
}
