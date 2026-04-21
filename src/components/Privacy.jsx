import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Privacy() {
  const { t } = useTranslation()
  const sections = [
    {
      title: t('privacy.summary_title'),
      body: t('privacy.summary_body'),
      items: [
        t('privacy.summary_item1'),
        t('privacy.summary_item2'),
        t('privacy.summary_item3'),
        t('privacy.summary_item4'),
      ],
    },
    { title: t('privacy.account_title'), body: t('privacy.account_body') },
    { title: t('privacy.device_title'), body: t('privacy.device_body') },
    { title: t('privacy.server_title'), body: t('privacy.server_body') },
    { title: t('privacy.community_title'), body: t('privacy.community_body') },
    { title: t('privacy.mentor_title'), body: t('privacy.mentor_body') },
    { title: t('privacy.analytics_title'), body: t('privacy.analytics_body') },
    { title: t('privacy.subscription_title'), body: t('privacy.subscription_body') },
    { title: t('privacy.blocker_title'), body: t('privacy.blocker_body') },
    { title: t('privacy.permissions_title'), body: t('privacy.permissions_body') },
    { title: t('privacy.sharing_title'), body: t('privacy.sharing_body') },
    { title: t('privacy.retention_title'), body: t('privacy.retention_body') },
    {
      title: t('privacy.rights_title'),
      body: t('privacy.rights_body'),
      items: [
        t('privacy.rights_item1'),
        t('privacy.rights_item2'),
        t('privacy.rights_item3'),
        t('privacy.rights_item4'),
      ],
    },
    { title: t('privacy.children_title'), body: t('privacy.children_body') },
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
