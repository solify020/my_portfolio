import { useEffect, useRef, MouseEvent } from 'react'

type Props = {
  onClose: () => void
  isOpen: boolean
}

export const useOverLay = ({ onClose, isOpen }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      contentRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const onCloseContent = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return { onCloseContent, contentRef }
}
