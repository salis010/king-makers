import React, { FC } from 'react'

export const TableHeader: FC = () =>
  <div className='grid grid-cols-5 py-6 pl-4 text-2xl font-bold border-b text-grey-150 border-grey-100'>
    <span>Name</span>
    <span>Active</span>
    <span>Start Date</span>
    <span>End Date</span>
    <span>Budget</span>
  </div>
