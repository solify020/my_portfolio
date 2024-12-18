import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react'
import {
  Section,
  Container,
  LoaderWrapper,
  Loader,
} from 'src/components/shared'
import { useSocketApi } from 'src/app'
import { MessageType } from 'src/types'
import { toast } from 'react-toastify'
import { UsersList } from './users-list/UsersList'
import { ChatWindowMemo } from './chat-window/ChatWindow'
import { FooterChat } from './footer-chat/FooterChat'
import { CHAT_USERS } from 'src/constants'
import { AuthAdmin } from './auth-admin/AuthAdmin'
import { useChatManagement } from 'src/hooks/use-chat-management'
import { IoMenu } from 'react-icons/io5'
import { TbReload } from 'react-icons/tb'
import { usePositionChatWindow } from 'src/hooks'
import styles from './AdminChat.module.css'

export const AdminChat = () => {
  const ADMIN_PASS = import.meta.env.VITE_ADMIN_PASS

  const [password, setPassword] = useState<string>('')
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isOpenUsersList, setIsOpenUsersList] = useState<boolean>(false)

  const socket = useSocketApi({
    userName: CHAT_USERS.ADMIN,
    connectSocket: isAuth,
  })

  const {
    selectedUser,
    messages,
    usersList,
    userById,
    isLoadingUserById,
    isFetchingUserById,
    setNewMessages,
    addNewMessage,
    onSelectUser,
    onDeleteUser,
    refetchUsers,
    onResetSelectedUser,
  } = useChatManagement({ skipFetchUsersList: false })

  const { messagesContainerRef } = usePositionChatWindow({
    dependencies: [messages, onSelectUser],
  })

  useEffect(() => {
    if (userById?.messages) setNewMessages(userById?.messages)
  }, [setNewMessages, userById])

  useEffect(() => {
    if (socket) {
      socket.on('response', (message: MessageType) => {
        addNewMessage(message)
      })
    }
  }, [addNewMessage, socket])

  // temporary auth
  const onChangePass = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)

  const onLoginAdmin = (e: FormEvent) => {
    e.preventDefault()

    if (password === ADMIN_PASS) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
      toast.error('Incorrect password')
    }
  }

  const onToggleUsersLists = () =>
    setIsOpenUsersList(prevOpenList => !prevOpenList)

  const filteredMessages = useMemo(
    () =>
      messages.filter(
        msg =>
          msg.receiver === selectedUser?.userId ||
          msg.sender === selectedUser?.userId,
      ),
    [messages, selectedUser?.userId],
  )

  const isLoading = isLoadingUserById || isFetchingUserById

  return (
    <Section>
      {isAuth ? (
        <Container>
          <div className={styles.headButtons}>
            <button onClick={onToggleUsersLists}>
              {<IoMenu size='1.5em' />}
            </button>
            <button onClick={refetchUsers}>{<TbReload size='1.3em' />}</button>
          </div>
          <div className={styles.inner}>
            <UsersList
              onSelectUser={onSelectUser}
              onDeleteUser={onDeleteUser}
              isOpenUsersList={isOpenUsersList}
              onResetSelectedUser={onResetSelectedUser}
              usersList={usersList?.users}
              selectedUser={selectedUser}
            />
            <div className={styles.chat}>
              {isLoading ? (
                <LoaderWrapper>
                  <Loader />
                </LoaderWrapper>
              ) : (
                <>
                  <ChatWindowMemo
                    messages={filteredMessages}
                    selectedUser={selectedUser}
                    ref={messagesContainerRef}
                  />
                  {selectedUser && (
                    <FooterChat
                      socket={socket}
                      receiver={selectedUser?.userId!}
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      ) : (
        <AuthAdmin
          onChangePass={onChangePass}
          value={password}
          onLogin={onLoginAdmin}
        />
      )}
    </Section>
  )
}
