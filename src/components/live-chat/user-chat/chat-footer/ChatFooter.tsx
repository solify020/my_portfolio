import type { FC } from 'react'
import { ButtonWithIcon, Textarea } from 'src/components/shared'
import { BiSolidSend } from 'react-icons/bi'
import { useSendMessageInChat, useTextAreaHeight } from 'src/hooks'
import { CHAT_USERS } from 'src/constants'
import { Socket } from 'socket.io-client'
import styles from './ChatFooter.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
  userId: string
  socket: Socket | null
  isDisabledInput: boolean
}

export const ChatFooter: FC<Props> = ({ socket, userId, isDisabledInput }) => {
  const { t } = useTranslation()

  const {
    onSendMessage,
    handleKeyDown,
    handleChangeTextArea,
    textareaContent,
    isDisabledButton,
  } = useSendMessageInChat({
    socket,
    sender: userId,
    receiver: CHAT_USERS.ADMIN,
  })

  const { textareaRef } = useTextAreaHeight({
    dependencies: [textareaContent],
  })

  return (
    <form onSubmit={onSendMessage} className={styles.chatFooterWrap}>
      <Textarea
        ref={textareaRef}
        id='chat-textarea'
        value={textareaContent}
        disabled={isDisabledInput}
        onChange={handleChangeTextArea}
        onKeyDown={handleKeyDown}
        placeholder={t('input.placeholder.YOUR_MESSAGE')}
        rows={1}
      />
      <ButtonWithIcon
        icon={<BiSolidSend />}
        isDisabled={isDisabledButton}
        aria-label='Send your message in chat'
      />
    </form>
  )
}
