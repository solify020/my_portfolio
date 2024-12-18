import { useTranslation } from 'react-i18next'

export const useQualitiesList = () => {
  const { t } = useTranslation()

  const qualities = [
    {
      title: t('pages.aboutMe.QUALITIE_TEAMWORK'),
      text: t('pages.aboutMe.QUALITIE_TEAMWORK_TEXT'),
      id: 1,
    },
    {
      title: t('pages.aboutMe.QUALITIE_ADAPTABILITY'),
      text: t('pages.aboutMe.QUALITIE_ADAPTABILITY_TEXT'),
      id: 2,
    },
    {
      title: t('pages.aboutMe.QUALITIE_LEARNING'),
      text: t('pages.aboutMe.QUALITIE_LEARNING_TEXT'),
      id: 3,
    },
  ]

  return { qualities }
}
