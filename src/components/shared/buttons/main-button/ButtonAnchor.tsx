import { FC, AnchorHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './Button.module.css'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  className?: string
  children: ReactNode
}

export const ButtonAnchor: FC<Props> = ({ className, children, ...props }) => {
  return (
    <a className={classNames(styles.button, className)} {...props}>
      {children}
    </a>
  )
}
