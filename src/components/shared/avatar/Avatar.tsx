import { FC, HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  withBorder?: boolean
}

export const Avatar: FC<Props> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />
}
