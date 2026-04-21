import { useTranslation } from 'react-i18next'
import BentoCard from './BentoCard'

function Icon({ d, children }) {
  return (
    <svg className="w-[22px] h-[22px] stroke-blue shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {children || <path d={d} />}
    </svg>
  )
}

const Check = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
  </svg>
)

export default function Features() {
  const { t } = useTranslation()

  const phases = [
    { color: 'bg-red-500', name: t('features.phase_detox'), range: '1 – 14' },
    { color: 'bg-amber-500', name: t('features.phase_healing'), range: '15 – 45' },
    { color: 'bg-blue-light', name: t('features.phase_rewiring'), range: '46 – 90' },
    { color: 'bg-violet-500', name: t('features.phase_strengthening'), range: '91 – 150' },
    { color: 'bg-emerald-500', name: t('features.phase_complete'), range: '151 – 180' },
  ]

  const pricingItems = [
    t('features.pricing_item_crisis'),
    t('features.pricing_item_rewiring'),
    t('features.pricing_item_dhikr'),
    t('features.pricing_item_blocker'),
    t('features.pricing_item_pledge'),
    t('features.pricing_item_analytics'),
    t('features.pricing_item_salah'),
    t('features.pricing_item_languages'),
  ]


  return (
    <section className="py-20 max-sm:py-14" id="features">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Bento grid */}
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></Icon>
              <h3 className="text-base font-bold tracking-tight">{t('features.rewiring_title')}</h3>
            </div>
            <ol className="flex flex-col gap-2.5">
              {phases.map(p => (
                <li key={p.name} className="flex items-center gap-2.5 text-sm font-medium">
                  <span className={`w-[9px] h-[9px] rounded-full shrink-0 ${p.color}`} />
                  {p.name}
                  <span className="text-gray-400 font-normal ml-auto text-[13px]">{p.range}</span>
                </li>
              ))}
            </ol>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></Icon>
              <h3 className="text-base font-bold tracking-tight">{t('features.dhikr_title')}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t('features.dhikr_desc')}</p>
          </BentoCard>

          {/* Pricing card */}
          <BentoCard className="row-span-2 bg-blue-deep! border-transparent! text-white flex flex-col">
            <div className="mb-auto">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/40 mb-3">{t('features.pricing_label')}</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-[48px] font-extrabold tracking-tighter leading-none">$4.99</span>
                <span className="text-base text-white/50 font-medium mb-1.5">{t('features.pricing_per_month')}</span>
              </div>
              <p className="text-[13px] text-white/50 mb-5">{t('features.pricing_trial')}</p>
              <ul className="space-y-2.5 mb-6">
                {pricingItems.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-[13px] text-white/75">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#download" className="block text-center w-full px-6 py-3 rounded-[10px] bg-white text-blue-deep font-semibold text-sm hover:bg-blue-pale transition-colors">
              {t('features.start_trial')}
            </a>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></Icon>
              <h3 className="text-base font-bold tracking-tight">{t('features.blocker_title')}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t('features.blocker_desc')}</p>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /></Icon>
              <h3 className="text-base font-bold tracking-tight">{t('features.pledge_title')}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t('features.pledge_desc')}</p>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon d="M22 12h-4l-3 9L9 3l-3 9H2" />
              <h3 className="text-base font-bold tracking-tight">{t('features.analytics_title')}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t('features.analytics_desc')}</p>
          </BentoCard>

          <BentoCard>
            <div className="flex items-center gap-3 mb-3.5">
              <Icon d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              <h3 className="text-base font-bold tracking-tight">{t('features.salah_title')}</h3>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{t('features.salah_desc')}</p>
          </BentoCard>

        </div>


      </div>
    </section>
  )
}
