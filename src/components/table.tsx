import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateInitialCampaigns } from '../store/campaigns-slice'
import { NUMBER_OF_CAMPAIGNS } from '../constants'
import { IState } from '../types'

export const Table: FC = () => {
  const { campaigns } = useSelector((state: IState) => state.campaigns)
  const dispatch = useDispatch()

  useEffect(() => {
    if (campaigns.length === 0) {
      dispatch(generateInitialCampaigns(NUMBER_OF_CAMPAIGNS))
    }
  }, [])

  return (
    <div>
      {campaigns.map((campaign, i) => <p key={`${campaign.name}-${i}`}>{campaign.name}</p>)}
    </div>
  )
}
