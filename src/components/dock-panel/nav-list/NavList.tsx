import { useNavigationList } from 'src/hooks'
import styles from './NavList.module.css'

export const NavList = () => {
  const { navigationList } = useNavigationList()

  return (
    <ul className={styles.NavListContainer}>
      {navigationList.map(({ id, icon, href, text }) => (
        <li key={id} className={styles.navItem}>
          <a key={id} className={styles.link} href={href} aria-label={text}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
