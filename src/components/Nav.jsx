import { useState } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useScrolled } from '../hooks/useScrolled'
import LanguagePicker from './LanguagePicker'

export default function Nav() {
  const scrolledRaw = useScrolled()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onHome = location.pathname === '/'
  const scrolled = !onHome || scrolledRaw

  const goToSection = (e, id) => {
    e.preventDefault()
    if (onHome) {
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
    }
    setOpen(false)
  }

  const sections = [
    ['#features', t('nav.features')],
    ['#organizations', t('nav.organizations')],
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5' : 'py-4'}`}>
      <div className="max-w-[1080px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="/assets/icon.png"
            alt="Ihsan"
            className="h-10 w-10 rounded-xl object-contain"
          />
        </Link>

        <div className={`flex gap-8 max-md:hidden`}>
          {sections.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={e => goToSection(e, href)}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-500 hover:text-gray-900' : 'text-white/75 hover:text-white'}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="max-md:hidden">
          <LanguagePicker scrolled={scrolled} />
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-1"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className={`block w-5 h-0.5 rounded-sm transition-all ${scrolled ? 'bg-gray-900' : 'bg-white'} ${open && i === 0 ? 'rotate-45 translate-y-[7px]' : ''} ${open && i === 1 ? 'opacity-0' : ''} ${open && i === 2 ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          ))}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-3.5">
          {sections.map(([href, label]) => (
            <a key={href} href={href} onClick={e => goToSection(e, href)} className="text-gray-900 text-sm font-medium">{label}</a>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <LanguagePicker scrolled={true} />
          </div>
        </div>
      )}
    </nav>
  )
}
