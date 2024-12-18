import { classNames } from 'src/utils'
import styles from './PageSkeleton.module.css'

export const PageSkeleton = () => {
  const isTitle = (index: number) => index % 3 === 0
  const loaderElements = Array.from({ length: 15 })

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderHeaderWrapper}>
        <div className={styles.loaderHeader} />
        <div className={styles.loaderHeaderItem} />
      </div>
      {loaderElements.map((_, index) => (
        <div
          key={index}
          className={classNames(
            styles.loaderText,
            isTitle(index) && styles.loaderTextTitle,
          )}
        />
      ))}
    </div>
  )
}
