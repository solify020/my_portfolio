import { useTranslation } from 'react-i18next'
import { ROUTES } from 'src/constants'
import {
  Section,
  Title,
  BrowserTabTitle,
  MarqueeBackground,
  ButtonLink,
} from '../shared'
import { Icon } from './Icon'
import styles from './NotFound.module.css'

export const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Section>
      <MarqueeBackground marqueeText='page 404'>
        <div className={styles.notFoundContainer}>
          <span className={styles.number}>
            404
            <div className={styles.icon}>
              <Icon />
            </div>
          </span>
          <Title tag='h1'>{t('pages.notFound.NOT_FOUND')}</Title>
          <Title size='sm' tag='h4'>
            {t('pages.notFound.RETURN_HOME')}
          </Title>
          <ButtonLink aria-label='Go to home page' to={ROUTES.main}>
            {t('button.GO_BACK')}
          </ButtonLink>
        </div>
      </MarqueeBackground>

      <BrowserTabTitle title={t('pages.notFound.NOT_FOUND_TAB')} />
    </Section>
  )
}
