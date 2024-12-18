import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import {
  useChatMessages,
  useAuthUser,
  useDeleteChatByUserIdMutation,
  useDeleteChatHistoryByUserIdMutation,
  useDeleteUserByUserIdMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useLazyGetUserByIdQuery,
} from 'src/app'
import { UserType } from 'src/types'
import { useTranslation } from 'react-i18next'

type Props = {
  skipFetchUsersList: boolean
  userId?: string
}

export const useChatManagement = ({ skipFetchUsersList, userId }: Props) => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null)

  const { t } = useTranslation()
  const { onLeave } = useAuthUser()
  const { messages, setNewMessages, addNewMessage } = useChatMessages()

  const [deleteUser, { isLoading: isLoadingDelete }] =
    useDeleteUserByUserIdMutation()

  const [deleteChat, { isLoading: isLoadingDeleteChat }] =
    useDeleteChatByUserIdMutation()

  const [deleteChatHistory, { isLoading: isLoadingDeleteChatHistory }] =
    useDeleteChatHistoryByUserIdMutation()

  const [
    getUserById,
    {
      data: userById,
      isLoading: isLoadingUserById,
      isFetching: isFetchingUserById,
    },
  ] = useLazyGetUserByIdQuery()

  const { data: usersList, refetch: refetchUsersList } = useGetAllUsersQuery(
    undefined,
    { skip: skipFetchUsersList },
  )

  const {
    data: userMessages,
    isLoading: isLoadingMessages,
    isFetching: isFetchingMessages,
    isError: isErrorMessages,
    refetch: refetchUserById,
  } = useGetUserByIdQuery({ userId: userId! }, { skip: !userId?.length })

  const onSelectUser = useCallback(
    async (user: UserType) => {
      setSelectedUser(user)
      try {
        await getUserById({ userId: user.userId }).unwrap()
      } catch {
        toast.error(t('toast.error.FAILED_GET_MESSAGES'))
      }
    },
    [getUserById, t],
  )

  const onDeleteUser = useCallback(
    async (user: UserType) => {
      try {
        await deleteUser({ userId: user.userId }).unwrap()
        refetchUsersList()
        setNewMessages([])
        setSelectedUser(null)
        toast.success(t('toast.success.SUCCESS_DELETE_USER'))
      } catch {
        toast.error(t('toast.error.FAILED_DELETE_USER'))
      }
    },
    [deleteUser, refetchUsersList, setNewMessages, t],
  )

  const onDeleteChat = useCallback(async () => {
    try {
      await deleteChat({ userId: userId! }).unwrap()
      onLeave()
      setNewMessages([])
    } catch {
      toast.error(t('toast.error.FAILED_DELETE_CHAT'))
    }
  }, [deleteChat, onLeave, setNewMessages, t, userId])

  const onDeleteChatHistory = useCallback(async () => {
    try {
      await deleteChatHistory({ userId: userId! }).unwrap()
      setNewMessages([])
    } catch {
      toast.error(t('toast.error.FAILED_DELETE_CHAT_HISTORY'))
    }
  }, [deleteChatHistory, setNewMessages, t, userId])

  const onResetSelectedUser = () => setSelectedUser(null)

  const refetchUsers = () => {
    onResetSelectedUser()
    refetchUsersList()
  }

  return {
    selectedUser,
    messages,
    usersList,
    userById,
    userMessages,
    isLoadingUserById,
    isFetchingUserById,
    isLoadingMessages,
    isFetchingMessages,
    isErrorMessages,
    isLoadingDelete,
    isLoadingDeleteChat,
    isLoadingDeleteChatHistory,
    onDeleteChatHistory,
    deleteChat,
    onLeave,
    onDeleteChat,
    setNewMessages,
    addNewMessage,
    onSelectUser,
    onDeleteUser,
    refetchUsers,
    onResetSelectedUser,
    deleteUser,
    refetchUserById,
    getUserById,
    refetchUsersList,
  }
}
