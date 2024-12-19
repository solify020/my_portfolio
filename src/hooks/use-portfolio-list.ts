import { ASX_URL, MAVEN_URL, TUTTIFY_URL } from '../constants'
import {
  asx,
  asxPageFirst,
  asxPageSecond,
  maven,
  mavenPageRirst,
  mavenPageSecond,
  chowWow,
  chowWowFirst,
  chowWowSecond
} from '../assets'
import { useTranslation } from 'react-i18next'
import { PortfolioListType } from '../types'

export const usePortfolioList = () => {
  const { t } = useTranslation()
  const portfolioList: PortfolioListType[] = [
    {
      id: 1,
      link: "#",
      srcPageFirst: chowWowFirst,
      srcPageSecond: chowWowSecond,
      src: chowWow,
      project: "$ChowWow on SOL",
      title: "Token Sale Site",
      description: "Developed Token presale pad and Tokenomics Site. With strong skill in Solana and Rust. Skillful Next.js Frontend.",
      about: [
        {
          paragraphFirst: {
            textOne: "Frontend - 1 developer. Blockchain - 1 developer(Solify).",
            textTwo: "Developed from UI/UX design to Token sale Smart Contract with a talented Frontend Developer.",
            textThree: "Project has structured 9 parts. Overview(Token Presale), Token News, Gaming World, Token Features, Tokenomics, Roadmap, FAQ, Meme Competition, Funding Strategy",
          },
          paragraphSecond: {
            textOne: "Play-to-Earn Game",
            textTwo: "Developed Play-to-Earn Game for more Token buyers and Token sale",
            textThree: "While develop the project, Focused on Smart Contract, RWD and Pixel Perfect",
          },
          stack:
            '#Solana #Smart Contract #Rust #Next.js #TypeScript #i18next #Tailwind CSS #RWD',
        },
      ],
    },
    {
      id: 2,
      link: ASX_URL,
      srcPageFirst: asxPageFirst,
      srcPageSecond: asxPageSecond,
      src: asx,
      project: t('portfolio.projects.ASX.NAME'),
      title: t('portfolio.projects.ASX.DESCR'),
      description: t('portfolio.projects.ASX.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.ASX.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.ASX.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.ASX.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_2.TEXT_3'),
          },
          stack:
            '#Next #TypeScript #Redux Toolkit #RTK Query #Express #Stripe #SamSub #Keycloack #Radix UI',
        },
      ],
    },
    {
      id: 3,
      link: MAVEN_URL,
      srcPageFirst: mavenPageRirst,
      srcPageSecond: mavenPageSecond,
      src: maven,
      project: t('portfolio.projects.maven.NAME'),
      title: t('portfolio.projects.maven.DESCR'),
      description: t('portfolio.projects.maven.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: t('portfolio.projects.maven.about.p_1.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.maven.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: t('portfolio.projects.maven.about.p_2.TEXT_1'),
            textTwo: t('portfolio.projects.maven.about.p_2.TEXT_2'),
            textThree: t('portfolio.projects.maven.about.p_2.TEXT_3'),
          },
          stack: '#HTML #JavaScript #SCSS #GSAP #Gulp',
        },
      ],
    },
  ]

  return { portfolioList }
}
