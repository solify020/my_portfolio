import type { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './Paragraph.module.css'

export type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  className?: string
}

export const Paragraph: FC<Props> = ({ children, className, ...props }) => {
  return (
    <p className={classNames(styles.paragraph, className)} {...props}>
      {children}
    </p>
  )
}
