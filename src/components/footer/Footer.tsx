import { APP } from 'src/constants'
import styles from './Footer.module.css'
import { SocialList } from '../shared'

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <SocialList />
        <span className={styles.version}>{`v${APP.version}`}</span>
      </div>
    </footer>
  )
}
