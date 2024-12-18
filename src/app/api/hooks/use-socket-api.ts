import { useEffect, useRef } from 'react'
import { getEnvVars } from 'src/utils'
import { io, Socket } from 'socket.io-client'

const env = getEnvVars()

type UseSocketProps = {
  userName: string
  connectSocket: boolean
}

export const useSocketApi = ({
  userName,
  connectSocket,
}: UseSocketProps): Socket | null => {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    if (connectSocket) {
      const socket = io(env.apiServerUrl)
      socketRef.current = socket
      socket.emit('join', { userName })

      return () => {
        socket.emit('leave', { userName })
        socket.disconnect()
        socket.off()
      }
    }
  }, [userName, connectSocket])

  return socketRef.current
}
