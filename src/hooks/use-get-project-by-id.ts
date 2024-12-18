import { useMemo } from 'react'
import { usePortfolioList } from './use-portfolio-list'

export const useGetProjectById = (id: number) => {
  const { portfolioList } = usePortfolioList()

  const project = useMemo(
    () => portfolioList.find(item => item.id === id) || null,
    [id, portfolioList],
  )

  return { project }
}
