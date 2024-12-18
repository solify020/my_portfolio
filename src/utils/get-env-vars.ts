import { ENV_VARS_PROD, ENV_VARS_DEV } from 'src/constants'
import type { EnvVarsType } from 'src/types'

export const getEnvVars = (isDev = false): EnvVarsType =>
  isDev ? ENV_VARS_DEV : ENV_VARS_PROD
