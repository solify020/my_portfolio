import type { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { Paragraph, StackList, Title } from 'src/components/shared'
import { useGetProjectById } from 'src/hooks'
import { classNames } from 'src/utils'
import styles from './ProjectCard.module.css'

type Props = {
  id: number
  src: string
  title: string
  project: string
  description: string
}

export const ProjectCard: FC<Props> = ({
  src,
  title,
  description,
  project,
  id,
}) => {
  const { project: data } = useGetProjectById(id)

  return (
    <li className={styles.projectCardContainer}>
      <article>
        <Link to={ROUTES.dynamic.projectId(id)}>
          <div className={styles.banner}>
            <img src={src} alt='project banner' />
          </div>
          <div className={styles.content}>
            <Title tag='h4' className={styles.nameProject}>
              {project}
            </Title>

            <Paragraph className={classNames(styles.textContent, styles.title)}>
              {title}
            </Paragraph>
            <Paragraph className={styles.textContent}>{description}</Paragraph>
            <ul className={styles.tags}>
              {data?.about?.map((item, i) => (
                <StackList key={i} stackList={item?.stack} />
              ))}
            </ul>
          </div>
        </Link>
      </article>
    </li>
  )
}
