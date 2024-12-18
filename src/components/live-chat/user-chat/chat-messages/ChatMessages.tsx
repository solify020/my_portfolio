import { forwardRef, memo } from 'react'
import { Paragraph } from 'src/components/shared'
import { formatDateTime, formatMessage } from 'src/utils'
import { MessageType } from 'src/types'
import { useTranslation } from 'react-i18next'
import styles from './ChatMessages.module.css'

type Props = {
  messages: MessageType[]
  adminSender: string
  userName: string
}

const ChatMessages = forwardRef<HTMLUListElement, Props>(
  ({ messages, adminSender, userName }, ref) => {
    const { t } = useTranslation()
    return (
      <ul ref={ref} className={styles.messagesContent}>
        <li className={styles.admin}>
          <div className={styles.adminMessage}>
            <Paragraph>
              {t('chat.HI')}, {userName}! {t('chat.HOW_ARE_YOU')} 😎🤙
            </Paragraph>
            <small className={styles.time}>{formatDateTime(Date.now())}</small>
          </div>
        </li>

        {messages?.map(msg => (
          <li
            key={msg?.messageId}
            className={msg?.sender === adminSender ? styles.admin : styles.user}
          >
            <div
              className={
                msg?.sender === adminSender
                  ? styles.adminMessage
                  : styles.userMessage
              }
            >
              <p
                dangerouslySetInnerHTML={{ __html: formatMessage(msg?.text) }}
              />
              <small className={styles.time}>
                {formatDateTime(msg?.timestamp!)}
              </small>
            </div>
          </li>
        ))}
      </ul>
    )
  },
)

export const ChatMessagesMemoized = memo(ChatMessages)
