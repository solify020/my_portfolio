import type { NavigationListType } from '../types'
import { IoDocumentAttachSharp, IoSchoolSharp } from 'react-icons/io5'
import { MdOutlineWork, MdHomeFilled, MdDesignServices } from 'react-icons/md'
import { NAVIGATE } from '../constants'
import { useTranslation } from 'react-i18next'

export const useNavigationList = () => {
  const { t } = useTranslation()

  const navigationList: NavigationListType[] = [
    {
      text: t('navigation.SERVICES'),
      icon: <MdHomeFilled size='1.2em' />,
      href: '#',
      id: 1,
    },
    {
      text: t('navigation.SERVICES'),
      icon: <MdDesignServices size='1.2em' />,
      href: NAVIGATE.services,
      id: 2,
    },
    {
      text: t('navigation.PORTFOLIO'),
      icon: <IoDocumentAttachSharp size='1.2em' />,
      href: NAVIGATE.portfolio,
      id: 3,
    },
    {
      text: t('navigation.WORK_HISTORY'),
      icon: <MdOutlineWork size='1.2em' />,
      href: NAVIGATE.workHistory,
      id: 4,
    },
    {
      text: t('navigation.EDUCATION'),
      icon: <IoSchoolSharp size='1.2em' />,
      href: NAVIGATE.education,
      id: 5,
    },
  ]

  return { navigationList }
}
