import type { EnvVarsType } from '../types'

const commonEnvVars = {
  getEmail: import.meta.env.VITE_EMAIL,
  apiCaptchaSecretKey: import.meta.env.VITE_CAPTCHA_SEKRET_KEY,
  apiCaptchaSiteKey: import.meta.env.VITE_CAPTCHA_SITE_KEY,
  CVUrl: import.meta.env.VITE_CV_URL,
}

export const ENV_VARS_PROD: EnvVarsType = {
  ...commonEnvVars,
  apiServerUrl: import.meta.env.VITE_SERVER_URL,
  apiMailerUrl: import.meta.env.VITE_MAILER_API_URL,
  apiTelegramUrl: import.meta.env.VITE_API_TELEGRAM_URL,
  apiChatUrl: import.meta.env.VITE_API_CHAT_URL,
}

export const ENV_VARS_DEV: EnvVarsType = {
  ...commonEnvVars,
  apiServerUrl: 'http://localhost:3000',
  apiMailerUrl: 'http://localhost:3000/api/email',
  apiTelegramUrl: 'http://localhost:3000/api/telegram',
  apiChatUrl: 'http://localhost:3000/api/chat',
}
