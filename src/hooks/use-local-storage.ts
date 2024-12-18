import { useEffect, useState } from 'react'
import { getStorageValue, setStorageValue } from 'src/utils'

export const useLocalStorage = (key: string, defData: string) => {
  const [state, setState] = useState<string>(() => {
    const localData = getStorageValue(key)

    return localData || defData
  })

  useEffect(() => setStorageValue(key, state), [key, state])

  return [state, setState] as const
}
