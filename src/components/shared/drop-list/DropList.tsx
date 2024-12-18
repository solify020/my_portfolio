import { FC, Fragment, ReactNode, useState } from 'react'
import { ButtonWithIcon } from '../buttons'
import styles from './DropList.module.css'

type DropListItem = { id: number; label: string | null; onClick: () => void }

type Props = {
  list: DropListItem[]
  buttonIcon: ReactNode
}

export const DropList: FC<Props> = ({ list, buttonIcon }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onToggleList = (callback?: () => void) => {
    setIsOpen(prevIsOpen => !prevIsOpen)
    callback && callback()
  }

  return (
    <div className={styles.dropListContainer}>
      <ButtonWithIcon icon={buttonIcon} onClick={() => onToggleList()} />
      {isOpen && (
        <ul className={styles.list}>
          {list.map(({ id, label, onClick }) => (
            <Fragment key={id}>
              {label && (
                <li
                  className={styles.item}
                  onClick={() => onToggleList(onClick)}
                >
                  {label}
                </li>
              )}
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  )
}
