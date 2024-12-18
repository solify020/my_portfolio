import { ChangeEvent, FC, FormEvent } from 'react'
import { Input, Button } from 'src/components/shared'
import styles from './AuthAdmin.module.css'

type Props = {
  value: string
  onLogin: (e: FormEvent) => void
  onChangePass: (e: ChangeEvent<HTMLInputElement>) => void
}

export const AuthAdmin: FC<Props> = ({ value, onLogin, onChangePass }) => {
  const showLogInButton = !!value.length

  return (
    <div className={styles.authContainer}>
      <form onSubmit={onLogin} className={styles.auth}>
        <Input
          id='input-password'
          name='password'
          type='password'
          value={value}
          placeholder='password'
          onChange={onChangePass}
        />
        {showLogInButton && <Button disabled={!value.length}>Log in</Button>}
      </form>
    </div>
  )
}
