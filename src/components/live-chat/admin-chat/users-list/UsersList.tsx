import { FC } from 'react'
import { ButtonWithIcon, Paragraph } from 'src/components/shared'
import { UserType } from 'src/types'
import { MdOutlineDelete } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import { classNames } from 'src/utils'
import styles from './UsersList.module.css'

type Props = {
  usersList?: UserType[]
  selectedUser: UserType | null
  isOpenUsersList: boolean
  onSelectUser: (user: UserType) => Promise<void>
  onDeleteUser: (user: UserType) => Promise<void>
  onResetSelectedUser: () => void
}

export const UsersList: FC<Props> = ({
  usersList,
  selectedUser,
  isOpenUsersList,
  onSelectUser,
  onDeleteUser,
  onResetSelectedUser,
}) => {
  return (
    <ul
      className={classNames(
        styles.userList,
        isOpenUsersList && styles.openUsersList,
      )}
    >
      {usersList?.map(user => (
        <li
          key={user?.userId}
          className={classNames(
            styles.item,
            selectedUser === user && styles.active,
          )}
        >
          <Paragraph
            className={classNames(
              styles.userName,
              selectedUser === user && styles.disabled,
            )}
            onClick={() => onSelectUser(user)}
          >
            {user?.userName}
          </Paragraph>
          {selectedUser === user && (
            <div className={styles.controlButtons}>
              <ButtonWithIcon
                icon={<MdOutlineDelete />}
                onClick={() => onDeleteUser(user)}
              />
              <ButtonWithIcon
                icon={<IoClose />}
                onClick={onResetSelectedUser}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
