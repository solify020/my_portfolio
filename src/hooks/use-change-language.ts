import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export const useChangeLanguage = () => {
  const { i18n } = useTranslation()

  const currentLanguage = i18n.language
  const onChangeLanguage = useCallback(
    (language: string) => i18n.changeLanguage(language),
    [i18n],
  )

  return { currentLanguage, onChangeLanguage }
}
