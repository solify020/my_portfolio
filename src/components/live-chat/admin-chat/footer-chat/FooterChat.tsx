import { ButtonWithIcon, Textarea } from 'src/components/shared'
import { FC } from 'react'
import { BiSolidSend } from 'react-icons/bi'
import styles from './FooterChat.module.css'
import { useSendMessageInChat, useTextAreaHeight } from 'src/hooks'
import { CHAT_USERS } from 'src/constants'
import { Socket } from 'socket.io-client'

type Props = {
  socket: Socket | null
  receiver: string
}

export const FooterChat: FC<Props> = ({ socket, receiver }) => {
  const {
    onSendMessage,
    handleKeyDown,
    handleChangeTextArea,
    textareaContent,
    isDisabledButton,
  } = useSendMessageInChat({
    socket,
    sender: CHAT_USERS.ADMIN,
    receiver,
  })

  const { textareaRef } = useTextAreaHeight({
    dependencies: [textareaContent],
  })

  return (
    <form onSubmit={onSendMessage} className={styles.footerChat}>
      <Textarea
        ref={textareaRef}
        value={textareaContent}
        onChange={handleChangeTextArea}
        onKeyDown={handleKeyDown}
        placeholder='Type text'
        rows={1}
      />
      <ButtonWithIcon icon={<BiSolidSend />} isDisabled={isDisabledButton} />
    </form>
  )
}
