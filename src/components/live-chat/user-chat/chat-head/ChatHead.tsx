import { memo, type FC } from 'react'
import { chatPhoto } from 'src/assets'
import { Avatar, AvatarWrapper, Paragraph } from 'src/components/shared'
import { classNames } from 'src/utils'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { ButtonsWrapper } from './buttons-wrapper/ButtonsWrapper'
import { useTranslation } from 'react-i18next'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  onToggleZoomWindow: () => void
  onLeaveAndDeleteChat: () => void
  onDeleteChatHistory: () => void
  isJoinedUser: boolean
  showDeleteHistory: boolean
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToggleZoomWindow,
  onLeaveAndDeleteChat,
  onDeleteChatHistory,
  isJoinedUser,
  showDeleteHistory,
}) => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.chatHeadContainer, 'drag-handle')}>
      <div className={styles.contactWrap}>
        <Link to={ROUTES.admin}>
          <AvatarWrapper>
            <Avatar src={chatPhoto} alt='User photo' />
          </AvatarWrapper>
        </Link>
        <div className={styles.contact}>
          <Paragraph>{t('chat.NAME')}</Paragraph>
          <Paragraph className={styles.status}>
            {t('chat.ONLINE_STATUS')}
          </Paragraph>
        </div>
      </div>
      <ButtonsWrapper
        onToggleChat={onToggleChat}
        onToggleZoomWindow={onToggleZoomWindow}
        onDeleteChat={onLeaveAndDeleteChat}
        onDeleteChatHistory={onDeleteChatHistory}
        isJoinedUser={isJoinedUser}
        showDeleteHistory={showDeleteHistory}
      />
    </div>
  )
}

export const ChatHeadMemoized = memo(ChatHead)
