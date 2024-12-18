import type { FC } from 'react'
import { Title } from '../title/Title'
import { Paragraph } from '../paragraph'

type Props = {
  title: string
  subTitle: string
}

export const SectionHead: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Title withGradient tag='h2' style={{ textAlign: 'center' }}>
        {title}
      </Title>
      <div style={additionalStyles.subtitle}>
        <Paragraph style={additionalStyles.paragraph}>{subTitle}</Paragraph>
      </div>
    </>
  )
}

const additionalStyles = {
  paragraph: {
    margin: '0 0 40px',
  },
  subtitle: {
    maxWidth: '440px',
  },
}
