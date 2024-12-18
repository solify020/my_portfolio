import { usePortfolioList } from 'src/hooks'
import { SectionHead, CardsContainer } from '../shared'
import { useTranslation } from 'react-i18next'
import { withAnimationSection } from 'src/hoc'
import { ProjectCard } from './project-card/ProjectCard'

const PortfolioSection = () => {
  const { t } = useTranslation()
  const { portfolioList } = usePortfolioList()

  return (
    <>
      <SectionHead
        title={t('portfolio.TITLE')}
        subTitle={t('portfolio.SUBTITLE')}
      />
      <CardsContainer>
        {portfolioList.map(({ title, project, description, src, id }) => (
          <ProjectCard
            key={id}
            title={title}
            description={description}
            project={project}
            src={src}
            id={id}
          />
        ))}
      </CardsContainer>
    </>
  )
}

export const Portfolio = withAnimationSection(PortfolioSection)
