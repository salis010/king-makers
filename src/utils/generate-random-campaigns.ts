import { CAMPAIGNS, DAY_IN_MILLISECONDS, MAX_OFFSET_IN_DAYS } from '../constants'
import { ICampaign } from '../types'

export const generateRandomCampaigns = async (n: number): Promise<ICampaign[]> =>
  await new Promise((resolve, reject) => {
    const differentCampaignNames = CAMPAIGNS.length
    const baseDate = new Date(2022, 5, 1)

    resolve(
      Array.from({ length: n }, (_, i) => {
        const startDate = new Date(baseDate.getTime() - (~~(Math.random() * MAX_OFFSET_IN_DAYS) * DAY_IN_MILLISECONDS))
        const endDate = new Date(baseDate.getTime() + (~~(Math.random() * MAX_OFFSET_IN_DAYS) * DAY_IN_MILLISECONDS))
        const today = new Date()
        const isActive = today >= startDate && today <= endDate

        return ({
          name: CAMPAIGNS[~~(Math.random() * differentCampaignNames)],
          isActive,
          startDate,
          endDate,
          budget: ~~(Math.random() * 10000000)
        })
      })
    )
  })
