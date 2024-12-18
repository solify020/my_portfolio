import { UDEMY_URL, UNIVERSITY_URL, IMT_URL } from 'src/constants'
import { useTranslation } from 'react-i18next'
import { ExperienceListType } from 'src/types'
import { imtHomePage, udemyHomePage } from 'src/assets'

export const useEducationList = () => {
  const { t } = useTranslation()

  const educationList: ExperienceListType[] = [
    {
      id: 1,
      place: t('education.table.udemy.NAME'),
      position: t('education.table.udemy.POSITION'),
      date: '2021 - 2022',
      title: t('education.table.udemy.TITLE'),
      url: '#',
      img: '',
      description: t('education.table.udemy.DESCRIPTION'),
    },
    {
      id: 2,
      place: t('education.table.imt.NAME'),
      position: t('education.table.imt.POSITION'),
      date: '2021 - 2021',
      title: t('education.table.imt.TITLE'),
      url: '#',
      img: '',
      description: t('education.table.imt.DESCRIPTION'),
    },
    {
      id: 3,
      place: t('education.table.institute.NAME'),
      position: t('education.table.institute.POSITION'),
      date: '2015 - 2018',
      title: t('education.table.institute.TITLE'),
      url: UNIVERSITY_URL,
      img: '',
      description: t('education.table.institute.DESCRIPTION'),
    },
  ]

  return { educationList }
}
