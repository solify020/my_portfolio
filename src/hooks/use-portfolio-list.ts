import { ASX_URL, MAVEN_URL, TUTTIFY_URL } from '../constants'
import {
  chowWow,
  chowWowFirst,
  chowWowSecond,
  betwie,
  betwieFirst,
  betwieSecond,
  tradingBot
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
      link: 'https://betwie.online',
      srcPageFirst: betwieFirst,
      srcPageSecond: betwieSecond,
      src: betwie,
      project: t('portfolio.projects.ASX.NAME'),
      title: t('portfolio.projects.ASX.DESCR'),
      description: t('portfolio.projects.ASX.MAIN_INFO'),
      about: [
        {
          paragraphFirst: {
            textOne: "Frontend and Backend - 1 developer, Sports Betting - 1 developer, Casino Game - 1 developer, DB Optimization - 1 developer",
            textTwo: t('portfolio.projects.ASX.about.p_1.TEXT_2'),
            textThree: t('portfolio.projects.ASX.about.p_1.TEXT_3'),
          },
          paragraphSecond: {
            textOne: "The app is developed using React for the frontend part and Laravel for the backend part. And Node.js for Sports API integration",
            textTwo: "Used BetsAPI and all the betting logic. Live sports and Upcoming 7 days sports. Multi sports like AFL, NFL, E-Sports, Snooker...",
            textThree: "The most comfortable Admin Panel. Crypto and Fiat payment.",
          },
          stack:
            '#Laravel #PHP #Mysql #React #Redux Toolkit #Node.js #Bets API #Stripe #Web3 #Material UI',
        },
      ],
    },
    {
      id: 3,
      link: '#',
      srcPageFirst: '#',
      srcPageSecond: '#',
      src: tradingBot,
      project: "Crypto AnySniper",
      title: "Crypto Trading Bot",
      description: "#Copy Trading, #Wallet Crawling, #Token Sniping, Telegram, Discord bot.",
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
          stack: '#Web3 #Solidity #Rust #Solana #Ethereum #Sui',
        },
      ],
    },
  ]

  return { portfolioList }
}
