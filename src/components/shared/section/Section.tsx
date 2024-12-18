import type { FC, HTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Section.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  id?: string
}

export const Section: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, id, ...props }, ref) => {
    return (
      <section className={styles.section} ref={ref} id={id} {...props}>
        <div className={styles.content}>{children}</div>
      </section>
    )
  },
)

export const MSection = motion(Section)
