import { forwardRef, type FC, type InputHTMLAttributes } from 'react'
import { classNames } from 'src/utils'
import styles from './Input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  errorText?: string
  error?: boolean
}

export const Input: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ error, errorText, ...props }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <input
          className={classNames(styles.input, error && styles.error)}
          ref={ref}
          {...props}
        />
        {error && (
          <p className={styles.errorMessage}>{errorText || 'Some errors'}</p>
        )}
      </div>
    )
  },
)
