import { withAnimationSection } from 'src/hoc'
import { useEducationList } from 'src/hooks'
import { SectionWithTimeline } from '../section-with-timeline'

export const EducationSection = () => {
  const { educationList } = useEducationList()

  return (
    <SectionWithTimeline
      title='education.TITLE'
      subTitle='education.SUBTITLE'
      list={educationList}
    />
  )
}

export const Education = withAnimationSection(EducationSection)
