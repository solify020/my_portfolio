export type ChatContentType = {
  sender: string
  text: string
  status: string
  timestamp: number
}

export type MessageType = {
  sender: string
  text: string
  receiver?: string
  timestamp?: string
  messageId?: string
}

export type UserType = {
  userName: string
  messages: MessageType[]
  userId: string
}

export type UsersListType = {
  users: UserType[]
}

type UserInfoPayload = {
  userId: string
  userName: string
  message: string
}

export type AddMessagePayload = Omit<UserInfoPayload, 'userName'>

export type CreateUserPayload = Omit<UserInfoPayload, 'message'>

export type SendTelegramPayload = Pick<UserInfoPayload, 'message'>

export type UserIdPayload = Pick<UserInfoPayload, 'userId'>
