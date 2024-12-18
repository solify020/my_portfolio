import type { FC, ReactNode, CSSProperties } from 'react'
import styles from './CardsContainer.module.css'

type Props = {
  children: ReactNode
  columns?: number
}

export const CardsContainer: FC<Props> = ({ children, columns = 3 }) => {
  const style = {
    '--columns': `repeat(${columns}, 1fr)`,
  } as CSSProperties

  return (
    <ul className={styles.cardsContainer} style={style}>
      {children}
    </ul>
  )
}
