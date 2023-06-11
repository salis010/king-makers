import { FROM, TO } from '../constants'
import { ICampaigns, ICampaign } from '../types'

export const filterCampaigns = (state: ICampaigns): ICampaign[] => {
  const { campaigns, searchTerm } = state
  const fromDate = state.filterDates?.[FROM]
  const toDate = state.filterDates?.[TO]

  const campaignsToDisplay = campaigns.filter((campaign): boolean => {
    let isMatch = true

    if (fromDate !== undefined && toDate !== undefined) {
      isMatch = campaign.startDate >= fromDate && campaign.endDate <= toDate
    } else if (fromDate !== undefined) {
      isMatch = campaign.startDate >= fromDate
    } else if (toDate !== undefined) {
      isMatch = campaign.endDate <= toDate
    }

    console.log(campaign.name, searchTerm, (new RegExp(searchTerm, 'i')).test(campaign.name))
    return searchTerm.length >= 2
      ? isMatch && (new RegExp(searchTerm, 'i')).test(campaign.name)
      : isMatch
  })

  return campaignsToDisplay
}
