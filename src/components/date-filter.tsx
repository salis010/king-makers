import React, { FC, useState, useEffect } from 'react'
import { CloseIcon } from '../images'
import { useSelector, useDispatch } from 'react-redux'
import { setFilterFromDate, setFilterToDate, setIsDateError } from '../store/ui-slice'
import { FROM } from '../constants'
import { IState } from '../types'

interface IDateFilter {
  text: string
}

export const DateFilter: FC<IDateFilter> = ({ text }) => {
  const { filterFromDate, filterToDate, isDateError } = useSelector((state: IState) => state.ui)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  const date = text === FROM ? filterFromDate?.toLocaleDateString() : filterToDate?.toLocaleDateString()
  const textColor = isDateError ? 'text-alert-100' : ' text-grey-50'

  const clickHandler = (): void => {
    setIsOpen(prev => !prev)
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    text === FROM
      ? dispatch(setFilterFromDate(event.target.value))
      : dispatch(setFilterToDate(event.target.value))

    setIsOpen(false)
  }

  useEffect(() => {
    if (filterFromDate !== undefined && filterToDate !== undefined) {
      dispatch(setIsDateError(filterFromDate > filterToDate))
    }
  }, [filterFromDate, filterToDate])

  return (
    <>
      {!isOpen &&
        <div
          className={`flex items-center justify-center px-4 py-2 mx-8 text-2xl rounded-full cursor-pointer bg-grey-150 ${textColor}`}
          onClick={clickHandler}
        >
          {text}: {date}
        </div>}
      {isOpen &&
        <div className='flex items-center justify-between pr-2 mr-8 text-2xl border-2 rounded-md text-grey-200 border-grey-200'>
          <label className='px-2'>{text}:</label>
          <input
            className='outline-none'
            type='date'
            onChange={changeHandler}
            value={date}
          />
          <div className='cursor-pointer' onClick={clickHandler}>
            <CloseIcon isSmall />
          </div>
        </div>}
    </>
  )
}
