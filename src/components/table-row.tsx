import React, { FC } from 'react'
import { ActiveIcon, InactiveIcon } from '../images'
import { ICampaign } from '../types'

interface ITableRow {
  campaign: ICampaign
}

export const TableRow: FC<ITableRow> = ({ campaign }) =>
  <div className='grid grid-cols-5 py-4 pl-4 text-2xl border-b border-grey-100 text-grey-200'>
    <span>{campaign.name}</span>
    {campaign.isActive ? <ActiveIcon /> : <InactiveIcon />}
    <span>{campaign.startDate.toLocaleDateString()}</span>
    <span>{campaign.endDate.toLocaleDateString()}</span>
    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(campaign.budget)}</span>
  </div>
