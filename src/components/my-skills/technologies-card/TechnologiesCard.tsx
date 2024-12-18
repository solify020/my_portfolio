import { FaEthereum, FaReact, FaRobot } from 'react-icons/fa'
import { SiTypescript, SiRedux, SiEthereum, SiSolana } from 'react-icons/si'
import { Paragraph } from 'src/components/shared'
import styles from './TechnologiesCard.module.css'
import Sui from './sui.svg';

export const TechnologiesCard = () => {
  const technologies = [
    {
      name: 'Ethereum',
      icon: <SiEthereum color='#58C4DC' size='4em' />,
      id: 1,
    },
    {
      name: 'Solana',
      icon: <SiSolana color='#3078C6' size='4em' />,
      id: 2,
    },
    {
      name: 'Sui',
      icon: <img src={Sui} style={{width: '4em'}} />,
      id: 3,
    },
    {
      name: 'Telegram Bot, Discord Bot',
      icon: <FaRobot color='#6013C6' size='4em' />,
      id: 4,
    },
  ]

  return (
    <ul className={styles.technologiesCardContainer}>
      {technologies.map(({ id, icon, name }) => (
        <li key={id} className={styles.card}>
          <div className={styles.cardContent}>
            <div>{icon}</div>
            <Paragraph>{name}</Paragraph>
          </div>
        </li>
      ))}
    </ul>
  )
}
