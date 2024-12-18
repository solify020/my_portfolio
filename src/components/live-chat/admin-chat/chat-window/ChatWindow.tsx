import { forwardRef, memo } from 'react'
import { MessageType, UserType } from 'src/types'
import { Paragraph } from 'src/components/shared'
import { formatDateTime } from 'src/utils'
import styles from './ChatWindow.module.css'

type Props = {
  messages: MessageType[]
  selectedUser: UserType | null
}

const ChatWindow = forwardRef<HTMLUListElement, Props>(
  ({ messages, selectedUser }, ref) => {
    return (
      <div className={styles.chatWindow}>
        <span className={styles.userBadge}>{selectedUser?.userName}</span>
        {selectedUser ? (
          <ul ref={ref} className={styles.messagesContent}>
            {messages?.map(msg => (
              <li
                key={msg?.messageId}
                className={
                  msg?.sender === selectedUser?.userId
                    ? styles.user
                    : styles.admin
                }
              >
                {msg?.text?.length && (
                  <div
                    className={
                      msg?.sender === selectedUser?.userId
                        ? styles.userMessage
                        : styles.adminMessage
                    }
                  >
                    <Paragraph>{msg?.text}</Paragraph>
                  </div>
                )}
                {msg?.timestamp && (
                  <small className={styles.time}>
                    {formatDateTime(msg?.timestamp, true)}
                  </small>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.emptyWindow}>
            <Paragraph>Please select any user from the list</Paragraph>
          </div>
        )}
      </div>
    )
  },
)

export const ChatWindowMemo = memo(ChatWindow)
