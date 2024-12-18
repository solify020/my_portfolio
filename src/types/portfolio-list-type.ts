type TextType = Record<'textOne' | 'textTwo' | 'textThree', string>

export type AboutType = {
  paragraphFirst: TextType
  paragraphSecond: TextType
  stack: string
}

export type PortfolioListType = {
  id: number
  link: string
  srcPageFirst: string
  srcPageSecond: string
  src: string
  project: string
  title: string
  description: string
  about: AboutType[]
}
