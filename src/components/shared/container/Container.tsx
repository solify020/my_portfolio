import type { FC, HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { classNames } from 'src/utils'
import { motion } from 'framer-motion'
import styles from './Container.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(styles.container, className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

export const MContainer = motion(Container)
