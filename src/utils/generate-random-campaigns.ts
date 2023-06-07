import { CAMPAIGNS, DAY_IN_MILLISECONDS, MAX_OFFSET_IN_DAYS } from '../constants'
import { ICampaign } from '../types'

export const generateRandomCampaigns = async (n: number): Promise<ICampaign[]> =>
  await new Promise((resolve, reject) => {
    const differentCampaignNames = CAMPAIGNS.length
    const date = new Date(2022, 5, 1)

    resolve(
      Array.from({ length: n }, (_, i) => ({
        name: CAMPAIGNS[~~(Math.random() * differentCampaignNames)],
        startDate: new Date(date.getTime() - (~~(Math.random() * MAX_OFFSET_IN_DAYS) * DAY_IN_MILLISECONDS)),
        endDate: new Date(date.getTime() + (~~(Math.random() * MAX_OFFSET_IN_DAYS) * DAY_IN_MILLISECONDS)),
        budget: ~~(Math.random() * 10000000)
      }))
    )
  })
