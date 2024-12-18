import { FC, useEffect } from 'react'

type Props = {
  title: string
}

export const BrowserTabTitle: FC<Props> = ({ title }) => {
  useEffect(() => {
    document.title = title
    return () => {
      document.title = 'Frontend Developer | Vlad Kryvytchenko'
    }
  }, [title])

  return null
}
