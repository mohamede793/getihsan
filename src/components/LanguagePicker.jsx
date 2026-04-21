import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { languages } from '../i18n'

export default function LanguagePicker({ scrolled }) {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  const current = languages.find(l => l.code === i18n.language) || languages.find(l => l.code === i18n.language?.split('-')[0]) || languages[0]

  useEffect(() => {
    const onDocClick = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const select = code => {
    i18n.changeLanguage(code)
    setOpen(false)
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Select language"
        aria-expanded={open}
        className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-[10px] transition-colors ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white/90 hover:bg-white/10'}`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="uppercase tracking-wide text-[12px] font-semibold">{current.code}</span>
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 4.5L6 7.5L9 4.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 min-w-[170px] bg-white border border-gray-200 rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] py-1.5 overflow-hidden">
          {languages.map(l => {
            const active = l.code === current.code
            return (
              <button
                key={l.code}
                onClick={() => select(l.code)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-left transition-colors ${active ? 'bg-blue-50 text-blue-deep font-semibold' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1">{l.name}</span>
                {active && (
                  <svg className="w-3.5 h-3.5 text-blue-deep" viewBox="0 0 16 16" fill="currentColor"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" /></svg>
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
