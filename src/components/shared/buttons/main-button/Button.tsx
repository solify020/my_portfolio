import { FC, ButtonHTMLAttributes, ReactNode } from 'react'
import { classNames } from 'src/utils'
import styles from './Button.module.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  disabled?: boolean
  isLoading?: boolean
}

export const Button: FC<Props> = ({
  className,
  children,
  disabled,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        className,
        disabled && styles.disabled,
      )}
      {...props}
    >
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <span className={styles.loader} />
        </div>
      ) : (
        children
      )}
    </button>
  )
}
