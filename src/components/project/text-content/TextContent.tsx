import type { FC } from 'react'
import { Paragraph } from 'src/components/shared'

type Props = {
  text?: { textOne: string; textTwo: string; textThree: string }
}

export const TextContent: FC<Props> = ({ text }) => {
  const quantityParagraph = [
    { text: text?.textOne, id: 1 },
    { text: text?.textTwo, id: 2 },
    { text: text?.textThree, id: 3 },
  ]

  return (
    <>
      {quantityParagraph.map(({ text, id }) => (
        <li key={id}>
          <Paragraph style={{ textAlign: 'left' }}>{text}</Paragraph>
        </li>
      ))}
    </>
  )
}
