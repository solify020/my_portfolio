import { FC } from 'react'
import styles from './NotificationIcon.module.css'

type Props = {
  count: number
}

export const NotificationIcon: FC<Props> = ({ count }) => {
  return (
    <div className={styles.count}>
      <span>{count > 99 ? '99+' : count}</span>
    </div>
  )
}
