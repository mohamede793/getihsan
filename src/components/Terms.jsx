import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By downloading, installing, or using Ihsan, you agree to be bound by these Terms. If you do not agree, please do not use the app.',
  },
  {
    title: 'Description of Service',
    body: 'Ihsan is a self-improvement and recovery support application that provides tools including streak tracking, crisis intervention techniques, educational content, journaling, workout tracking, and Islamic spiritual guidance. Ihsan is not a medical or therapeutic service and does not replace professional help.',
  },
  {
    title: 'Subscriptions & Billing',
    body: 'Ihsan offers a premium subscription with the following terms:',
    items: [
      'Payment is charged to your Apple ID account at confirmation of purchase.',
      'Subscription automatically renews unless cancelled at least 24 hours before the end of the current billing period.',
      'Your account will be charged for renewal within 24 hours prior to the end of the current period at the subscription rate.',
      'You can manage and cancel subscriptions in your Apple ID account settings.',
    ],
  },
  {
    title: 'Health Disclaimer',
    body: 'Ihsan is a self-help support tool and is not a substitute for professional medical advice, diagnosis, or treatment. If you are experiencing a mental health crisis, please contact a qualified healthcare provider or emergency services. The breathing exercises, grounding techniques, and other tools provided are for general wellness support only.',
  },
  {
    title: 'Limitation of Liability',
    body: 'Ihsan is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the app. Your use of Ihsan is at your own risk. In no event shall our total liability to you exceed the amount you have actually paid to us in the twelve (12) months preceding the claim.',
  },
  {
    title: 'Intellectual Property',
    body: "All content within Ihsan, including text, graphics, and design, is the property of Ihsan or its content suppliers. Quranic verses, hadith, and Islamic scholarly quotes are attributed to their original sources and are used for educational purposes.",
  },
  {
    title: 'Termination',
    body: 'We reserve the right to terminate or suspend access to Ihsan at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the app.',
  },
  {
    title: 'Changes to Terms',
    body: 'We may revise these Terms at any time. Continued use of Ihsan after changes constitutes acceptance of the new Terms.',
  },
  {
    title: 'Language',
    body: 'These Terms of Service may be translated for convenience. In the event of any conflict or inconsistency between the English version and any translation, the English version shall prevail.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about these Terms, please contact us at ihsanappios@gmail.com.',
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-[680px] mx-auto px-6 pt-32 pb-20">
        <Link to="/" className="text-sm text-blue font-medium hover:underline mb-8 inline-block">&larr; Back to home</Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Terms of Service</h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>
        <p className="text-[15px] text-gray-600 leading-relaxed mb-10">
          These Terms of Service ("Terms") govern your use of the Ihsan mobile application. By using Ihsan, you agree to these Terms.
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
