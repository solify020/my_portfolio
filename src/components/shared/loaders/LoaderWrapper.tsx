import { FC, ReactNode } from 'react'
import styles from './Loader.module.css'

type Props = {
  children: ReactNode
}

export const LoaderWrapper: FC<Props> = ({ children }) => {
  return <div className={styles.loaderWrapper}>{children}</div>
}
