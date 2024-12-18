import { FC } from 'react'
import styles from './Loader.module.css'

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg'
}

const sizeWidth = {
  xs: '20px',
  sm: '30px',
  md: '40px',
  lg: '50px',
}

export const Loader: FC<Props> = ({ size = 'md' }) => {
  const width = sizeWidth[size]

  return <div style={{ width }} className={styles.loader} />
}
