import { useRef, useEffect } from 'react'

type Props = {
  isVisibleElement: boolean
}

export const useDraggable = <T extends HTMLElement>({
  isVisibleElement,
}: Props) => {
  const elementRef = useRef<T>(null)
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const element = elementRef.current

    const onMouseDown = (e: MouseEvent) => {
      if (!e.target || !(e.target instanceof HTMLElement)) return

      const target = e.target as HTMLElement

      if (!target.classList.contains('drag-handle')) return

      e.preventDefault()
      pos.current = {
        x: e.clientX - (element?.offsetLeft || 0),
        y: e.clientY - (element?.offsetTop || 0),
      }
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (element) {
        element.style.left = `${e.clientX - pos.current.x}px`
        element.style.top = `${e.clientY - pos.current.y}px`
      }
    }

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }

    if (isVisibleElement && element) {
      element.addEventListener('mousedown', onMouseDown)
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
      if (element) {
        element.removeEventListener('mousedown', onMouseDown)
      }
    }
  }, [isVisibleElement])

  return elementRef
}
