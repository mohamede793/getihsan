import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Contact Us',
    body: 'For any questions, issues, or feedback, reach out to us at ihsanappios@gmail.com. We aim to respond within 48 hours.',
  },
  {
    title: 'Manage Your Subscription',
    body: 'Subscriptions are managed through the App Store. To cancel or change your plan:',
    items: [
      'Open Settings on your iPhone',
      'Tap your name at the top',
      'Tap Subscriptions',
      'Select Ihsan and choose your option',
    ],
  },
  {
    title: 'Delete Your Data',
    body: 'All personal data is stored locally on your device. To delete it, simply uninstall the Ihsan app. To request deletion of server-side data (community posts and anonymous analytics), contact us at ihsanappios@gmail.com.',
  },
  {
    title: 'Crisis Resources',
    body: 'Ihsan is not a substitute for professional help. If you are experiencing a mental health crisis, please call your local emergency services.',
  },
]

export default function Support() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">&larr; Back to home</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Support</h1>
        <p className="text-sm text-gray-400 mb-10">We're here to help.</p>
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
        <p className="text-xs text-gray-400 mt-12">© 2026 Ihsan. All rights reserved.</p>
      </div>
    </div>
  )
}
