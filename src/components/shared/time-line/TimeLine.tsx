import type { FC } from 'react'
import { Title } from '../title'
import { Paragraph } from '../paragraph'
import { TfiNewWindow } from 'react-icons/tfi'
import { PreviewLink } from '../preview-link'
import { classNames } from 'src/utils'
import styles from './TimeLine.module.css'

type Props = {
  namePlace: string
  namePosition: string
  date: string | number
  description: string
  url: string
  imageSrc: string
  isActiveDot?: boolean
}

export const TimeLine: FC<Props> = ({
  namePlace,
  namePosition,
  date,
  isActiveDot,
  description,
  imageSrc,
  url,
}) => {
  return (
    <div className={styles.timeLineContainer}>
      <div className={styles.yearsLabel}>
        <p>{date}</p>
      </div>

      <div className={styles.lineWrapper}>
        <span
          className={classNames(styles.dot, isActiveDot && styles.active)}
        />
        <span className={styles.line} />
      </div>

      <div>
        <div className={styles.infoHead}>
          <PreviewLink href={url} imageSrc={imageSrc}>
            <div className={styles.titleWrap}>
              <Title
                style={{ margin: 0 }}
                tag='h4'
                size='sm'
                fontWeight='regular'
              >
                {namePlace}
              </Title>
              {url !== '#' && <TfiNewWindow size='0.7em' />}
              <small className={styles.dateMobile}>{date}</small>
            </div>
          </PreviewLink>
          <p className={styles.namePosition}>{namePosition}</p>
        </div>
        <div className={styles.infoWrapper}>
          <Paragraph style={{ textAlign: 'left' }}>{description}</Paragraph>
        </div>
      </div>
    </div>
  )
}
