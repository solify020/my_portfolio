import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './Avatar.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  withBorder?: boolean
}

export const AvatarWrapper: FC<Props> = ({
  children,
  className,
  withBorder,
  ...props
}) => {
  return (
    <div
      className={classNames(
        styles.avatar,
        withBorder && styles.withBorder,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
