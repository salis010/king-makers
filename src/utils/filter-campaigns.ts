import { ICampaign } from '../types'

interface IFilterCampaigns {
  campaigns: ICampaign[]
  fromDate: Date
  toDate: Date
}

export const filterCampaigns = ({ campaigns, fromDate, toDate }: IFilterCampaigns): ICampaign[] => {
  const campaignsToDisplay = campaigns.filter((campaign): boolean => {
    if (fromDate !== undefined && toDate !== undefined) {
      return campaign.startDate >= fromDate && campaign.endDate <= toDate
    }
    if (fromDate !== undefined) {
      return campaign.startDate >= fromDate
    }
    if (toDate !== undefined) {
      return campaign.endDate <= toDate
    }
    return false
  })

  return campaignsToDisplay
}
