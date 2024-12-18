import { useDispatch, useSelector } from 'react-redux'
import { addMessage, setMessages } from '../slices'
import { MessageType, RootState } from 'src/types'
import { useCallback } from 'react'

export const useChatMessages = () => {
  const dispatch = useDispatch()
  const messages = useSelector((state: RootState) => state.messages.messages)

  const addNewMessage = useCallback(
    (message: MessageType) => dispatch(addMessage(message)),
    [dispatch],
  )
  const setNewMessages = useCallback(
    (messages: MessageType[]) => dispatch(setMessages(messages)),
    [dispatch],
  )

  return { messages, setNewMessages, addNewMessage }
}
