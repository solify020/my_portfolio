import type { FC, HTMLAttributes, ReactNode } from 'react'
import { useOverLay } from 'src/hooks'
import { classNames } from 'src/utils'
import styles from './Drawer.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  side: 'left' | 'right'
}

export const Drawer: FC<Props> = ({
  isOpen,
  onClose,
  side,
  children,
  ...props
}) => {
  const { contentRef, onCloseContent } = useOverLay({ onClose, isOpen })

  const sideClass = side === 'left' ? styles.drawerLeft : styles.drawerRight

  return (
    <div {...props}>
      {isOpen && (
        <div className={styles.overlay} onClick={onCloseContent}></div>
      )}
      <div
        className={classNames(styles.drawer, sideClass, isOpen && styles.open)}
      >
        <div ref={contentRef} className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
