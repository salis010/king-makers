import React, { FC } from 'react'
import { FilterIcon } from '../images'

export const TableFilterDashboard: FC = () =>
  <div className='flex items-center justify-between px-4 py-6 border-b border-grey-100'>
    <FilterIcon />
    <button className='px-4 py-2 text-2xl font-bold rounded-full bg-grey-150 text-grey-50'>Clear Filter</button>
  </div>
