import { ICampaign } from '../types'

export const generateRandomCampaigns = (n: number): ICampaign[] => {
  return Array.from({ length: n }, (_, i) => ({
    name: `${i}`,
    startDate: new Date(),
    endDate: new Date(),
    budget: n
  }))
}
