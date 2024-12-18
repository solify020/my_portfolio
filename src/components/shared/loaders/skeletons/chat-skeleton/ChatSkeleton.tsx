import { classNames } from 'src/utils'
import styles from './ChatSkeleton.module.css'

export const ChatSkeleton = () => {
  return (
    <ul className={styles.chat}>
      <li className={classNames(styles.messageSkeleton, styles.user)} />
      <li className={classNames(styles.messageSkeleton, styles.sender)} />
      <li className={classNames(styles.messageSkeleton, styles.user)} />
      <li className={classNames(styles.messageSkeleton, styles.sender)} />
      <li className={classNames(styles.messageSkeleton, styles.sender)} />
      <li className={classNames(styles.messageSkeleton, styles.user)} />
    </ul>
  )
}
