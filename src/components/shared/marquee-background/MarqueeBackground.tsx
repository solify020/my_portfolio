import { FC, ReactNode, MouseEvent } from 'react'
import { classNames } from 'src/utils'
import styles from './MarqueeBackground.module.css'

type Props = {
  children: ReactNode
  marqueeText?: string
  onClick?: (e: MouseEvent) => void
}

export const MarqueeBackground: FC<Props> = ({
  children,
  marqueeText,
  onClick,
}) => {
  const renderMarquee = (direction: string) =>
    Array.from({ length: 6 }).map((_, index) => (
      <span
        key={index}
        className={classNames(styles.marquee, styles[direction])}
      >
        {marqueeText}
      </span>
    ))

  return (
    <div className={styles.container}>
      <div onClick={onClick} className={styles.inner}>
        {children}
      </div>
      <div className={styles.marqueeContainer}>
        {renderMarquee('leftToRight')}
      </div>
      <div className={styles.marqueeContainer}>
        {renderMarquee('rightToLeft')}
      </div>
      <div className={styles.marqueeContainer}>
        {renderMarquee('leftToRight')}
      </div>
      <div className={styles.marqueeContainer}>
        {renderMarquee('rightToLeft')}
      </div>
    </div>
  )
}
