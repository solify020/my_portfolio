import { COMPANY_URL } from 'src/constants'
import { useTranslation } from 'react-i18next'
import { elementicaHomePage } from 'src/assets'
import { ExperienceListType } from 'src/types'

export const useWorkList = () => {
  const { t } = useTranslation()

  const workList: ExperienceListType[] = [
    {
      id: 1,
      place: t('workHistory.table.elementica.NAME'),
      position: t('workHistory.table.elementica.POSITION'),
      date: '2022 - 2024',
      title: t('workHistory.table.elementica.TITLE'),
      url: COMPANY_URL,
      img: elementicaHomePage,
      description: t('workHistory.table.elementica.DESCRIPTION'),
    },
    {
      id: 2,
      place: t('workHistory.table.freelance.NAME'),
      position: t('workHistory.table.freelance.POSITION'),
      date: '2021 - 2022',
      title: t('workHistory.table.freelance.TITLE'),
      url: '#',
      img: '',
      description: t('workHistory.table.freelance.DESCRIPTION'),
    },
  ]

  return { workList }
}
