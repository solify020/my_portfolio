import type { FC } from 'react'
import { TextContent } from '../text-content/TextContent'
import { AboutType, PortfolioListType } from 'src/types'
import styles from './Content.module.css'

type Props = {
  aboutProject?: AboutType[]
  project?: PortfolioListType | null
}

export const Content: FC<Props> = ({ aboutProject, project }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphFirst} />
        ))}
      </ul>

      <div className={styles.contentImg}>
        <img src={project?.srcPageFirst} alt='project picture' />
      </div>

      <div className={styles.contentImg}>
        <img src={project?.srcPageSecond} alt='project picture' />
      </div>

      <ul className={styles.text}>
        {aboutProject?.map((item, i) => (
          <TextContent key={i} text={item?.paragraphSecond} />
        ))}
      </ul>
    </div>
  )
}
