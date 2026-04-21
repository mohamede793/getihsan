import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Support() {
  const { t } = useTranslation()
  const sections = [
    { title: t('support.contact_title'), body: t('support.contact_body') },
    {
      title: t('support.manage_title'),
      body: t('support.manage_body'),
      items: [
        t('support.manage_item1'),
        t('support.manage_item2'),
        t('support.manage_item3'),
        t('support.manage_item4'),
      ],
    },
    { title: t('support.delete_title'), body: t('support.delete_body') },
    { title: t('support.crisis_title'), body: t('support.crisis_body') },
  ]

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">{t('common.back_home')}</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{t('support.title')}</h1>
        <p className="text-sm text-gray-400 mb-10">{t('support.subtitle')}</p>
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
        <p className="text-xs text-gray-400 mt-12">{t('support.copyright')}</p>
      </div>
    </div>
  )
}
