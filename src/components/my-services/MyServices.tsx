import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHead, CardsContainer } from '../shared'
import { useServicesList } from 'src/hooks'
import { ServiceCard } from './service-card/ServiceCard'

export const MyServices = () => {
  const { t } = useTranslation()
  const { servicesList } = useServicesList()
  const [activeCards, setActiveCards] = useState<number[]>([])

  const onToggleCard = useCallback((id: number) => {
    setActiveCards(prevState =>
      prevState.includes(id)
        ? prevState.filter(cardId => cardId !== id)
        : [...prevState, id],
    )
  }, [])

  const isFlipped = (id: number) => activeCards.includes(id)

  return (
    <Section style={{ marginBottom: '50px' }} id='services'>
      <SectionHead
        title={t('myServices.TITLE')}
        subTitle={t('myServices.SUBTITLE')}
      />
      <CardsContainer columns={2}>
        {servicesList.map(({ title, text, id }) => (
          <ServiceCard
            onFlip={() => onToggleCard(id)}
            isFlipped={isFlipped(id)}
            title={title}
            text={text}
            order={id}
            key={id}
          />
        ))}
      </CardsContainer>
    </Section>
  )
}
