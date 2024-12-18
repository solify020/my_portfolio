import { ComponentType } from 'react'
import { motionSection } from 'src/constants'
import { useAnimateDuringScroll } from 'src/hooks'
import { MSection } from 'src/components/shared'

type Props = {
  sectionId: string
}

export const withAnimationSection =
  (Component: ComponentType<Props>) =>
  ({ sectionId, ...props }: Props) => {
    const { refInView, controls } = useAnimateDuringScroll({})

    return (
      <MSection
        ref={refInView}
        animate={controls}
        initial={motionSection.initial}
        transition={motionSection.transition}
        style={{ marginBottom: '50px' }}
        id={sectionId}
      >
        <Component {...(props as Props)} />
      </MSection>
    )
  }
