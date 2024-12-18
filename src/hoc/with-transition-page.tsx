import { ComponentType, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { TransitionContainer } from 'src/components/shared'

export const withTransitionPage = (Component: ComponentType) => () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <TransitionContainer>
      <Component />
    </TransitionContainer>
  )
}
