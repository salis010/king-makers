import { ICampaign } from '../../../types'
import { generateRandomCampaigns } from '../../../utils'

export const generateInitialCampaignsThunk = async (n: number): Promise<ICampaign[]> =>
  await generateRandomCampaigns(n)
    .then(campaigns => campaigns)
    .catch()
