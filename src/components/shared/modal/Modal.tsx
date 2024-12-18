import type { FC, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useOverLay } from 'src/hooks'
import { IoClose } from 'react-icons/io5'
import { ButtonWithIcon } from '../buttons'
import { AnimatedContainer } from '../animated-container'
import styles from './Modal.module.css'

type Props = {
  children: ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const { onCloseContent, contentRef } = useOverLay({ onClose, isOpen })

  return createPortal(
    <div className={styles.overlay} onClick={onCloseContent}>
      <AnimatedContainer ref={contentRef} className={styles.modalContent}>
        <ButtonWithIcon
          icon={<IoClose />}
          className={styles.closeButton}
          onClick={onClose}
          aria-label='Close the modal window'
        />
        {children}
      </AnimatedContainer>
    </div>,
    document.getElementById('root')!,
  )
}
