import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { classNames } from 'src/utils'
import styles from './Textarea.module.css'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  errorText?: string
  error?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, errorText, ...props }, ref) => {
    return (
      <div className={styles.textareaContainer}>
        <textarea
          ref={ref}
          className={classNames(styles.textarea, error && styles.error)}
          {...props}
        />
        {error && (
          <p className={styles.errorMessage}>{errorText || 'Some errors'}</p>
        )}
      </div>
    )
  },
)
