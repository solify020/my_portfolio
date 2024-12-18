import type { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './PageWrapper.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export const PageWrapper: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.pageWrapper} {...props}>
      {children}
    </div>
  )
}
