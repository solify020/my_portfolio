import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHead, TimeLine } from '../shared'
import { ExperienceListType } from 'src/types'

type Props = {
  title: string
  subTitle: string
  list: ExperienceListType[]
  isActiveDot?: boolean
}

export const SectionWithTimeline: FC<Props> = ({
  list,
  title,
  subTitle,
  isActiveDot,
}) => {
  const { t } = useTranslation()

  return (
    <>
      <SectionHead title={t(title)} subTitle={t(subTitle)} />
      {list?.map(
        ({ place, position, date, description, img, url, id }, index) => (
          <TimeLine
            key={id}
            namePlace={place}
            namePosition={position}
            date={date}
            description={description}
            url={url}
            imageSrc={img}
            isActiveDot={isActiveDot && index === 0}
          />
        ),
      )}
    </>
  )
}
