import { SocialList, Toolbar } from '../shared'
import { NavList } from './nav-list/NavList'
import styles from './DockPanel.module.css'

export const DockPanel = () => {
  return (
    <nav className={styles.dockPanelContainer}>
      <div className={styles.dockPanelContent}>
        <div className={styles.navList}>
          <NavList />
        </div>
        <div className={styles.socialList}>
          <SocialList />
        </div>
        <Toolbar />
      </div>
    </nav>
  )
}
