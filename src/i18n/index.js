import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import es from './locales/es.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import nl from './locales/nl.json'
import ar from './locales/ar.json'

export const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      nl: { translation: nl },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    supportedLngs: languages.map(l => l.code),
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'ihsan_lang',
    },
    interpolation: { escapeValue: false },
  })

const applyDir = lng => {
  const lang = languages.find(l => l.code === lng) || languages.find(l => l.code === lng?.split('-')[0]) || languages[0]
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang.code
    document.documentElement.dir = lang.dir
  }
}

applyDir(i18n.language)
i18n.on('languageChanged', applyDir)

export default i18n
