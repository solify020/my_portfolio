import type { FC, ReactNode } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import { Toast } from 'src/components/shared'
import { APP } from 'src/constants'
import { logger } from 'src/utils'

import styles from './Layout.module.css'
import './root-css/variables.css'
import './root-css/index.css'
import './root-css/reset.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  logger('version:', APP.version)
  return (
    <>
      <div className={styles.app}>{children}</div>
      <SpeedInsights />
      <Analytics />
      <Toast />
    </>
  )
}
