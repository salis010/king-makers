import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FilterDashboard } from '.'
import { FilterIcon } from '../images'
import { setIsFilterDashboardOpen, clearFilter } from '../store/ui-slice'
import { IState } from '../types'

export const TableFilterDashboard: FC = () => {
  const { isFilterDashboardOpen } = useSelector((state: IState) => state.ui)

  const dispatch = useDispatch()

  const filterHandler = (): void => {
    dispatch(setIsFilterDashboardOpen())
  }

  const clickHandler = (): void => {
    dispatch(clearFilter())
  }

  return (
    <div className='flex items-center justify-between px-4 py-6 border-b border-grey-100'>
      <div className='cursor-pointer' onClick={filterHandler}>
        <FilterIcon />
      </div>
      {isFilterDashboardOpen && <FilterDashboard />}
      <button
        className='px-4 py-2 text-2xl font-bold rounded-full bg-grey-150 text-grey-50'
        onClick={clickHandler}
      >
        Clear Filter
      </button>
    </div>
  )
}
