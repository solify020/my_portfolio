import { FC } from 'react'
import { PiResizeLight, PiDotsThreeBold } from 'react-icons/pi'
import { IoClose } from 'react-icons/io5'
import { ButtonWithIcon, DropList } from 'src/components/shared'
import { useTranslation } from 'react-i18next'
import styles from './ButtonsWraapper.module.css'

type Props = {
  onToggleChat: () => void
  onToggleZoomWindow: () => void
  onDeleteChat: () => void
  onDeleteChatHistory: () => void
  isJoinedUser: boolean
  showDeleteHistory: boolean
}

export const ButtonsWrapper: FC<Props> = ({
  onToggleZoomWindow,
  onDeleteChat,
  onToggleChat,
  onDeleteChatHistory,
  isJoinedUser,
  showDeleteHistory,
}) => {
  const { t } = useTranslation()

  const settingList = [
    {
      label: t('chat.setting_buttons.DELETE_CHAT'),
      id: 1,
      onClick: onDeleteChat,
    },
    {
      label: showDeleteHistory
        ? t('chat.setting_buttons.DELETE_CHAT_HISTORY')
        : null,
      id: 2,
      onClick: onDeleteChatHistory,
    },
  ]

  return (
    <div className={styles.buttonsWrap}>
      {isJoinedUser && (
        <>
          <ButtonWithIcon
            icon={<PiResizeLight />}
            className={styles.zoomButton}
            onClick={onToggleZoomWindow}
            aria-label='Resize the chat window'
          />
          <DropList buttonIcon={<PiDotsThreeBold />} list={settingList} />
        </>
      )}
      <ButtonWithIcon
        icon={<IoClose />}
        onClick={onToggleChat}
        aria-label='Close the chat window'
      />
    </div>
  )
}
