import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'

function Step({ num, title, children }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
      <div className="text-[13px] font-bold text-white/25 uppercase tracking-widest mb-3">{num}</div>
      <h4 className="text-base font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-white/65 leading-relaxed">{children}</p>
    </div>
  )
}

export default function Organizations() {
  const { t } = useTranslation()
  return (
    <section className="py-20 bg-blue-deep text-white max-sm:py-14" id="organizations">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Hero */}
        <div className="grid grid-cols-2 gap-12 items-center mb-16 max-md:grid-cols-1 max-md:text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">{t('organizations.label')}</p>
            <h2 className="text-[clamp(28px,4vw,42px)] font-bold leading-[1.15] tracking-tight mb-4 text-white">
              {t('organizations.title')}
            </h2>
            <p className="text-[16px] text-white/70 mb-6 max-w-[420px] max-md:max-w-full leading-relaxed">
              {t('organizations.body')}
            </p>
            <a href="mailto:ihsanappios@gmail.com" className="inline-flex items-center px-8 py-3.5 rounded-[10px] bg-white text-blue-deep font-semibold text-base hover:bg-blue-pale transition-colors">
              {t('organizations.cta')}
            </a>
          </div>

          {/* Chat mockup */}
          <div className="flex justify-end max-md:justify-center">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-w-[340px] w-full">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-gray-100">
                <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white font-bold text-xs">A</div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">{t('organizations.chat_mentor_name')}</div>
                  <div className="text-[11px] text-gray-400">{t('organizations.chat_mentor_role')}</div>
                </div>
              </div>
              <div className="px-4 py-3.5 flex flex-col gap-2.5">
                <div className="flex flex-col items-start">
                  <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-2xl rounded-bl text-[13px] leading-snug max-w-[85%]">
                    {t('organizations.chat_msg1')}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-0.5 font-medium ml-1">{t('organizations.chat_mentee_label')}</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-blue text-white px-3 py-2 rounded-2xl rounded-br text-[13px] leading-snug max-w-[85%]">
                    {t('organizations.chat_msg2')}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-gray-100 text-gray-800 px-3 py-2 rounded-2xl rounded-bl text-[13px] leading-snug max-w-[85%]">
                    {t('organizations.chat_msg3')}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="bg-blue text-white px-3 py-2 rounded-2xl rounded-br text-[13px] leading-snug max-w-[85%]">
                    {t('organizations.chat_msg4')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works for orgs */}
        <div className="grid grid-cols-4 gap-8 mb-10 max-md:grid-cols-2 max-sm:grid-cols-1">
          <Step num="01" title={t('organizations.step1_title')}>
            {t('organizations.step1_body')}
          </Step>
          <Step num="02" title={t('organizations.step2_title')}>
            {t('organizations.step2_body')}
          </Step>
          <Step num="03" title={t('organizations.step3_title')}>
            {t('organizations.step3_body')}
          </Step>
          <Step num="04" title={t('organizations.step4_title')}>
            {t('organizations.step4_body')}
          </Step>
        </div>

        <p className="text-[13px] text-white/35">
          {t('organizations.press')} <a href="mailto:ihsanappios@gmail.com" className="text-white/50 underline hover:text-white transition-colors">ihsanappios@gmail.com</a>
        </p>

      </div>
    </section>
  )
}
