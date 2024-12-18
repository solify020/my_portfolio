import { Button, Input, Title } from 'src/components/shared'
import { useTranslation } from 'react-i18next'
import { useJoinToChat } from 'src/hooks'
import styles from './ChatJoin.module.css'

export const ChatJoin = () => {
  const { t } = useTranslation()
  const {
    register,
    onSubmit,
    handleSubmit,
    handleChange,
    errors,
    isLoading,
    isDisabledButton,
  } = useJoinToChat()

  return (
    <form className={styles.joinForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.joinInner}>
        <Title size='sm' tag='h3'>
          {t('chat.JOIN_TO_CHAT')}
        </Title>
        <Input
          {...register('userName', {
            required: t('form.error.ENTER_NAME'),
          })}
          id='join-input-name'
          autoComplete='text'
          type='text'
          onChange={handleChange('userName')}
          error={!!errors.userName}
          errorText={errors.userName?.message}
          placeholder={t('input.placeholder.WHATS_NAME')}
        />
        <Button isLoading={isLoading} disabled={isDisabledButton}>
          {t('button.JOIN')}
        </Button>
      </div>
    </form>
  )
}
