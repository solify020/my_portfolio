import { ChangeEvent, FormEvent, useState } from 'react'
import { Socket } from 'socket.io-client'
import { soundSendMessage } from 'src/assets'
import { playSoundsInChat } from 'src/utils'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  socket: Socket | null
  sender: string
  receiver: string
}

export const useSendMessageInChat = ({ socket, sender, receiver }: Props) => {
  const [textareaContent, setTextareaContent] = useState<string>('')

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setTextareaContent(e.target.value)

  const onSendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (!socket) return

    if (textareaContent.trim()) {
      const message = {
        sender,
        receiver,
        text: textareaContent,
        timestamp: new Date().toISOString(),
        messageId: uuidv4(),
      }

      socket.emit('send_message', message)
      playSoundsInChat(soundSendMessage)
      setTextareaContent('')
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onSendMessage(e)
    }
  }

  const isDisabledButton = !textareaContent.trim()

  return {
    onSendMessage,
    handleKeyDown,
    setTextareaContent,
    handleChangeTextArea,
    textareaContent,
    isDisabledButton,
  }
}
