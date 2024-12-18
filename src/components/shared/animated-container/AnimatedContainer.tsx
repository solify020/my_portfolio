import { forwardRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { motionAnimatedContainer } from 'src/constants'

type Props = {
  children: ReactNode
  className?: string
}

export const AnimatedContainer = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => {
    return (
      <motion.div
        className={className}
        ref={ref}
        initial={motionAnimatedContainer.initial}
        animate={motionAnimatedContainer.animate}
        exit={motionAnimatedContainer.exit}
        transition={motionAnimatedContainer.transition}
      >
        {children}
      </motion.div>
    )
  },
)
