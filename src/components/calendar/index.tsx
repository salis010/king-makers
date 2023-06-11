import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilterDates } from '../../store/campaigns-slice'
import { DayName } from './day-name'
import { MonthButton } from './month-button'
import { DateCell } from './date-cell'
import { Button } from './button'
import { getNumberOfDaysInMonth, getMonthName, getNavigatedYearAndMonth } from '../../utils'
import { FilterDateType, IFilterDates } from '../../types'

interface ICalendar {
  managePortal: () => void
  filterDateType: FilterDateType
  filterDates?: IFilterDates
}

export const Calendar: FC<ICalendar> = ({ managePortal, filterDateType, filterDates }) => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const [displayedYear, setDisplayedYear] = useState(year)
  const [displayedMonth, setDisplayedMonth] = useState(month)
  const [selectedDay, setSelectedDay] = useState(day)

  const dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const offset = new Date(displayedYear, displayedMonth, 1).getDay()
  const daysInMonth = getNumberOfDaysInMonth(displayedYear, displayedMonth)

  const emptyCells = [...Array(offset)].map((d, i) => ({ key: i, d: undefined }))
  const dateCells = [...Array(daysInMonth)].map((d, i) => ({ key: offset + i, d: i + 1 }))
  const cells = [...emptyCells, ...dateCells]

  const dispatch = useDispatch()

  const handleChangeMonth = (variation: number): void => {
    const { year: newYear, month: newMonth } = getNavigatedYearAndMonth(displayedYear, displayedMonth, variation)

    setDisplayedYear(newYear)
    setDisplayedMonth(newMonth)
  }

  const handleSelectDay = (day: number): void => {
    setSelectedDay(day)
  }

  const changeFilterDate = (): void => {
    const newDate = new Date(displayedYear, displayedMonth, selectedDay)
    const newFilterDates = { ...filterDates, [filterDateType]: newDate }

    dispatch(setFilterDates(newFilterDates))
    managePortal()
  }

  return (
    <div>
      <div className='flex flex-col w-full text-2xl border rounded-lg w-280 bg-secondary-100 border-primary-200 bg-grey-50'>
        <div className='flex items-center justify-between p-4 text-xl font-bold border select-none text-grey-100 bg-primary-200 border-primary-200 text-secondary-50'>
          <MonthButton variation={-1} handleChangeMonth={handleChangeMonth} />
          {`${getMonthName(displayedMonth)} ${displayedYear}`}
          <MonthButton variation={1} handleChangeMonth={handleChangeMonth} />
        </div>
        <div className='grid grid-cols-7 text-xl'>
          {dayNames.map((name, i) => <DayName key={`${name}-${i}`} dayName={name} />)}
        </div>
        <div className='grid grid-cols-7 text-xl'>
          {cells.map((cell) => (
            <DateCell
              key={cell.key}
              date={cell.d}
              isSelectedDay={cell.d === selectedDay}
              onClick={handleSelectDay}
            />
          ))}
        </div>
        <div className='flex justify-between'>
          <Button text='Cancel' onClick={managePortal} />
          <Button text='OK' onClick={changeFilterDate} />
        </div>
      </div>
    </div>
  )
}
