import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateInitialCampaigns } from '../store/campaigns-slice'
import { TableFilterDashboard, TableHeader, TableRow } from '.'
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
    <div className='w-full p-4'>
      <div className='w-full border rounded-lg border-grey-100'>
        <TableFilterDashboard />
        <TableHeader />
        {campaigns.map((campaign, i) => <TableRow key={`${campaign.name}-${i}`} campaign={campaign} />)}
      </div>
    </div>
  )
}
