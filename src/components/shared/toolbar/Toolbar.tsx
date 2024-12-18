import { useContext } from 'react'
import { ThemeContext } from 'src/providers'
import { LANG, LANGUAGES, THEME } from 'src/constants'
import { classNames } from 'src/utils'
import { BsSun, BsMoon } from 'react-icons/bs'
import { useChangeLanguage } from 'src/hooks'
import styles from './Toolbar.module.css'

export const Toolbar = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const { currentLanguage, onChangeLanguage } = useChangeLanguage()

  const onChangeTheme = () =>
    changeTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)

  const themeButtons = [
    {
      id: 1,
      icon: <BsSun />,
      value: THEME.LIGHT,
    },
    {
      id: 2,
      icon: <BsMoon />,
      value: THEME.DARK,
    },
  ]

  return (
    <div className={styles.toolbarContainer}>
      <button
        className={styles.toolbarSwitch}
        aria-pressed={theme === THEME.DARK}
        onClick={onChangeTheme}
        aria-label={
          theme === THEME.DARK ? themeButtons[0].value : themeButtons[1].value
        }
      >
        {theme === THEME.DARK ? themeButtons[0].icon : themeButtons[1].icon}
      </button>
      <button
        className={classNames(styles.toolbarSwitch, styles.switchLang)}
        aria-pressed={currentLanguage === LANGUAGES.ENG}
        onClick={() =>
          onChangeLanguage(
            currentLanguage === LANGUAGES.ENG ? LANG[1].value : LANG[0].value,
          )
        }
        aria-label={
          currentLanguage === LANGUAGES.ENG ? LANG[1].value : LANG[0].value
        }
      >
        {currentLanguage === LANGUAGES.ENG ? LANG[1].label : LANG[0].label}
      </button>
    </div>
  )
}
