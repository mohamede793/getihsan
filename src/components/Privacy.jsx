import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Information We Store',
    body: 'Ihsan stores the following information locally on your device only:',
    items: [
      'Your recovery streak and progress data',
      'Journal entries and personal reflections',
      'Workout logs and exercise data',
      'App preferences (language, notification settings)',
    ],
  },
  {
    title: 'Data Storage & Security',
    body: 'All your personal data is stored exclusively on your device using local storage. We do not transmit, upload, or store your data on any external servers. Your recovery journey, journal entries, and personal information never leave your device. If you delete the app, all data is permanently removed.',
  },
  {
    title: 'No Data Sharing',
    body: 'We do not sell, trade, rent, or share your personal information with any third parties. Since all data remains on your device, there is no data to share.',
  },
  {
    title: 'Analytics & Tracking',
    body: 'Ihsan does not use any third-party analytics, tracking, or advertising services. We do not collect usage statistics, behavioral data, or device identifiers.',
  },
  {
    title: 'Subscription & Payments',
    body: "Subscription purchases are processed entirely through Apple's App Store. We do not have access to your payment information, credit card details, or Apple ID. All billing is managed by Apple according to their privacy policy.",
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Any changes will be reflected in the app with an updated revision date.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this Privacy Policy, please contact us at ihsanappios@gmail.com.',
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">&larr; Back to home</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
          Ihsan ("we", "our", "the app") is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our mobile application.
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
