import type { ServicesListType } from 'src/types'
import { useTranslation } from 'react-i18next'

export const useServicesList = () => {
  const { t } = useTranslation()

  const servicesList: ServicesListType[] = [
    {
      title: t('myServices.cards.FRONT_END_DEVELOPMENT_TITLE'),
      text: t('myServices.cards.FRONT_END_DEVELOPMENT_TEXT'),
      id: 1,
    },
    {
      title: t('myServices.cards.RESPONSIVE_DESIGN_TITLE'),
      text: t('myServices.cards.RESPONSIVE_DESIGN_TEXT'),
      id: 2,
    },
    {
      title: t('myServices.cards.API_BACKEND_INTEGRATION_TITLE'),
      text: t('myServices.cards.API_BACKEND_INTEGRATION_TEXT'),
      id: 3,
    },
    {
      title: t('myServices.cards.PERFORMANCE_OPTIMIZATION_TITLE'),
      text: t('myServices.cards.PERFORMANCE_OPTIMIZATION_TEXT'),
      id: 4,
    },
    {
      title: t('myServices.cards.CROSS_BROWSER_COMPATIBILITY_TITLE'),
      text: t('myServices.cards.CROSS_BROWSER_COMPATIBILITY_TEXT'),
      id: 5,
    },
    {
      title: t('myServices.cards.TECHNICAL_SUPPORT_TITLE'),
      text: t('myServices.cards.TECHNICAL_SUPPORT_TEXT'),
      id: 6,
    },
  ]

  return { servicesList }
}
