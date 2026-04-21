import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { t } = useTranslation()
  const sections = [
    {
      title: t('privacy.info_title'),
      body: t('privacy.info_body'),
      items: [
        t('privacy.info_item1'),
        t('privacy.info_item2'),
        t('privacy.info_item3'),
        t('privacy.info_item4'),
      ],
    },
    { title: t('privacy.storage_title'), body: t('privacy.storage_body') },
    { title: t('privacy.sharing_title'), body: t('privacy.sharing_body') },
    { title: t('privacy.analytics_title'), body: t('privacy.analytics_body') },
    { title: t('privacy.subscription_title'), body: t('privacy.subscription_body') },
    { title: t('privacy.changes_title'), body: t('privacy.changes_body') },
    { title: t('privacy.contact_title'), body: t('privacy.contact_body') },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">{t('common.back_home')}</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t('privacy.title')}</h1>
        <p className="text-sm text-gray-400 mb-8">{t('common.last_updated')}</p>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
          {t('privacy.intro')}
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
