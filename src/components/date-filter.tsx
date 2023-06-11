import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsPortalOpen } from '../store/ui-slice'
import { setIsDateError } from '../store/campaigns-slice'
import { Calendar } from '.'
import { FROM, TO } from '../constants'
import { IState, FilterDateType } from '../types'

interface IDateFilter {
  text: FilterDateType
}

export const DateFilter: FC<IDateFilter> = ({ text }) => {
  const { isPortalOpen } = useSelector((state: IState) => state.ui)
  const { isDateError, filterDates } = useSelector((state: IState) => state.campaigns)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const filterFromDate = filterDates?.[FROM]
  const filterToDate = filterDates?.[TO]

  const date = text === FROM ? filterFromDate : filterToDate
  const textColor = isDateError ? 'text-alert-100' : 'text-grey-50'

  const managePortal = (): void => {
    if (!isPortalOpen) {
      setIsOpen(prev => !prev)
      dispatch(setIsPortalOpen(true))
    } else {
      setIsOpen(prev => !prev)
      dispatch(setIsPortalOpen(false))
    }
  }

  useEffect(() => {
    if (filterFromDate !== undefined && filterToDate !== undefined) {
      dispatch(setIsDateError(filterFromDate > filterToDate))
    }
  }, [filterDates])

  return (
    <>
      <div className='relative'>
        <div
          className={`flex items-center justify-center px-4 py-2 mx-8 text-2xl rounded-full cursor-pointer bg-grey-150 ${textColor}`}
          onClick={managePortal}
        >
          {text}: {date?.toLocaleDateString() ?? '__/__/__'}
        </div>
        {isOpen &&
          <div className='absolute z-10 opacity-0.1 top-14 -right-28'>
            <Calendar managePortal={managePortal} filterDateType={text} filterDates={filterDates} />
          </div>}
      </div>
    </>
  )
}
