import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/types'
import { setName, setJoined, setId, resetUserData } from '../slices'
import { useCallback } from 'react'

export const useAuthUser = () => {
  const dispatch = useDispatch()
  const userName = useSelector((state: RootState) => state.userAuth.name)
  const isJoined = useSelector((state: RootState) => state.userAuth.joined)
  const userId = useSelector((state: RootState) => state.userAuth.userId)

  const setUserName = useCallback(
    (email: string) => dispatch(setName(email)),
    [dispatch],
  )
  const setJoinedUser = useCallback(
    (join: boolean) => dispatch(setJoined(join)),
    [dispatch],
  )
  const setUserId = useCallback(
    (userId: string) => dispatch(setId(userId)),
    [dispatch],
  )
  const onLeave = useCallback(() => dispatch(resetUserData()), [dispatch])

  return {
    userName,
    userId,
    isJoined,
    setUserName,
    setJoinedUser,
    setUserId,
    onLeave,
  }
}
