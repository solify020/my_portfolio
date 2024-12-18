import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './ButtonWithIcon.module.css'

type Props = HTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode
  isDisabled?: boolean
  className?: string
}

export const ButtonWithIcon: FC<Props> = ({
  icon,
  isDisabled,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.buttonWithIcon,
        isDisabled && styles.disabled,
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
