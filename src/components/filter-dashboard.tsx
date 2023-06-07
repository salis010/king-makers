import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { DateFilter } from '.'
import { FROM, TO } from '../constants'
import { IState } from '../types'

export const FilterDashboard: FC = () => {
  const { isDateError } = useSelector((state: IState) => state.ui)

  return (
    <div className='flex items-center'>
      <DateFilter text={FROM} />
      <DateFilter text={TO} />
      {isDateError &&
        <span className='text-xl text-alert-100'>'From' date needs to be earlier than 'To' date!</span>}
    </div>
  )
}
