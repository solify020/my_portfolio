import type { FC } from 'react'
import { ADD_HASH_SYMBOL } from 'src/constants'
import styles from './StackList.module.css'

type Props = {
  stackList?: string
}

export const StackList: FC<Props> = ({ stackList }) => {
  const list = stackList!.match(ADD_HASH_SYMBOL)

  return (
    <>
      {list?.map((item, i) => (
        <li key={i} className={styles.tag}>
          {item}
        </li>
      ))}
    </>
  )
}
