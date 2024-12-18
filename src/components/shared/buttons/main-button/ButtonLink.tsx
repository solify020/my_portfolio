import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  to: string
  children: ReactNode
  className?: string
}

export const ButtonLink: FC<Props> = ({
  to,
  className,
  children,
  ...props
}) => {
  return (
    <Link className={classNames(styles.button, className)} to={to} {...props}>
      {children}
    </Link>
  )
}
