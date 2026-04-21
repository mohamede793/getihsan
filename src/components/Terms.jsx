import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Terms() {
  const { t } = useTranslation()
  const sections = [
    { title: t('terms.acceptance_title'), body: t('terms.acceptance_body') },
    { title: t('terms.eligibility_title'), body: t('terms.eligibility_body') },
    { title: t('terms.description_title'), body: t('terms.description_body') },
    { title: t('terms.account_title'), body: t('terms.account_body') },
    {
      title: t('terms.billing_title'),
      body: t('terms.billing_body'),
      items: [
        t('terms.billing_item1'),
        t('terms.billing_item2'),
        t('terms.billing_item3'),
        t('terms.billing_item4'),
      ],
    },
    { title: t('terms.health_title'), body: t('terms.health_body') },
    {
      title: t('terms.community_title'),
      body: t('terms.community_body'),
      items: [
        t('terms.community_item1'),
        t('terms.community_item2'),
        t('terms.community_item3'),
        t('terms.community_item4'),
        t('terms.community_item5'),
        t('terms.community_item6'),
      ],
    },
    { title: t('terms.content_license_title'), body: t('terms.content_license_body') },
    { title: t('terms.ugc_disclaimer_title'), body: t('terms.ugc_disclaimer_body') },
    { title: t('terms.mentor_title'), body: t('terms.mentor_body') },
    { title: t('terms.blocker_disclaimer_title'), body: t('terms.blocker_disclaimer_body') },
    {
      title: t('terms.prohibited_title'),
      body: t('terms.prohibited_body'),
      items: [
        t('terms.prohibited_item1'),
        t('terms.prohibited_item2'),
        t('terms.prohibited_item3'),
        t('terms.prohibited_item4'),
        t('terms.prohibited_item5'),
        t('terms.prohibited_item6'),
      ],
    },
    { title: t('terms.termination_title'), body: t('terms.termination_body') },
    { title: t('terms.ip_title'), body: t('terms.ip_body') },
    { title: t('terms.liability_title'), body: t('terms.liability_body') },
    { title: t('terms.indemnity_title'), body: t('terms.indemnity_body') },
    { title: t('terms.law_title'), body: t('terms.law_body') },
    { title: t('terms.changes_title'), body: t('terms.changes_body') },
    { title: t('terms.language_title'), body: t('terms.language_body') },
    { title: t('terms.contact_title'), body: t('terms.contact_body') },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">{t('common.back_home')}</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t('terms.title')}</h1>
        <p className="text-sm text-gray-400 mb-8">{t('common.last_updated')}</p>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
          {t('terms.intro')}
        </p>
        {sections.map(s => (
          <div key={s.title} className="mb-8">
            <h2 className="text-lg font-bold mb-2">{s.title}</h2>
            <p className="text-[15px] text-gray-600 leading-relaxed">{s.body}</p>
            {s.items && (
              <ul className="mt-3 space-y-1.5">
                {s.items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
