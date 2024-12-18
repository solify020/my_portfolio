import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Section,
  PageWrapper,
  Title,
  Paragraph,
  BrowserTabTitle,
  PagesHead,
} from 'src/components/shared'
import { useNavigateTo, useQualitiesList } from 'src/hooks'
import { ROUTES } from 'src/constants'
import { technologies } from './config'
import styles from './AboutMe.module.css'

export const AboutMe = () => {
  const { t } = useTranslation()
  const { qualities } = useQualitiesList()
  const { navigateTo } = useNavigateTo()

  return (
    <Section>
      <PageWrapper>
        <PagesHead
          title={t('pages.aboutMe.TITLE')}
          goBack={() => navigateTo(ROUTES.main)}
        />
        <Paragraph style={additionalStyles.paragraph}>
          {t('pages.aboutMe.HEY_NICE_MEET')} 👋
          <br /> {t('pages.aboutMe.MY_CAREER')}
        </Paragraph>
        <article>
          <Title size='sm' tag='h3'>
            {t('pages.aboutMe.TECHNOLOGIES_SUB_TITLE')}
          </Title>
          <ul style={{ marginBottom: '25px' }}>
            {technologies.map((item, i) => (
              <li style={{ listStyle: 'inside', marginBottom: '2px' }} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <Title size='sm' tag='h3'>
            {t('pages.aboutMe.LANG_SUB_TITLE')}
          </Title>
          <ul>
            <li className={styles.qualities}>
              <Paragraph>English: Intermediate</Paragraph>
            </li>
            <li className={styles.qualities}>
              <Paragraph>Ukrainian: Native</Paragraph>
            </li>
          </ul>
        </article>
        <article>
          <Title size='sm' tag='h3'>
            {t('pages.aboutMe.QUALITIES_SUB_TITLE')}
          </Title>
          <ul>
            {qualities.map(({ id, title, text }) => (
              <li key={id} className={styles.qualities}>
                <Paragraph style={{ textAlign: 'left' }}>{title}</Paragraph>
                <Paragraph style={{ textAlign: 'left' }}>{text}</Paragraph>
              </li>
            ))}
          </ul>
        </article>
        <article>
          <Title size='sm' tag='h3'>
            {t('pages.aboutMe.HOBBIES_SUB_TITLE')}
          </Title>
          <Paragraph style={additionalStyles.paragraph}>
            {t('pages.aboutMe.HOBBIES')}
          </Paragraph>
        </article>
        <article>
          <Title size='sm' tag='h3'>
            {t('pages.aboutMe.GOT_IN_DEV_SUB_TITLE')}
          </Title>
          <Paragraph style={additionalStyles.paragraph}>
            {t('pages.aboutMe.DEVELOPMENT')}
          </Paragraph>
        </article>
      </PageWrapper>
      <BrowserTabTitle title={t('pages.aboutMe.seo.TITLE')} />
    </Section>
  )
}

const additionalStyles = {
  paragraph: {
    textAlign: 'left' as CSSProperties['textAlign'],
    margin: '0 0 25px',
  },
}
