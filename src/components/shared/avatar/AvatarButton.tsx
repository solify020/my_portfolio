import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './Avatar.module.css'

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  withBorder?: boolean
}

export const AvatarButton: FC<Props> = ({
  children,
  className,
  withBorder,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.avatar,
        withBorder && styles.withBorder,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
