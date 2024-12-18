import type { FC } from 'react'
import styles from './Head.module.css'
import { PagesHead } from 'src/components/shared'

type Props = {
  projectTitle?: string
  imgSrc?: string
  goBack: () => void
}

export const Head: FC<Props> = ({ goBack, projectTitle, imgSrc }) => {
  return (
    <>
      <PagesHead goBack={goBack} title={projectTitle} />
      <div className={styles.headImg}>
        <img src={imgSrc} alt={'project banner'} />
      </div>
    </>
  )
}
