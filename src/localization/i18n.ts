import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import { en, uk } from './index'

export const translationsResources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnEmptyString: false,
    // debug: true,
    detection: {
      order: ['localStorage', 'cookie'],
      caches: ['cookie'],
    },
    resources: translationsResources,
    fallbackLng: 'en',
  })

export default i18n
