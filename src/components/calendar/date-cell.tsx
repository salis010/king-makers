import React, { FunctionComponent } from 'react'

interface IDateCell {
  date: number | undefined
  isSelectedDay: boolean
  onClick: (date: number) => void
}

export const DateCell: FunctionComponent<IDateCell> = ({ date, isSelectedDay, onClick }) => {
  const baseStyling = 'flex items-center justify-center w-6 h-6 p-6 m-2 cursor-pointer select-none'
  const dayStyling = isSelectedDay ? 'text-grey-50 bg-secondary-200 border rounded-full' : 'text-grey-200'

  const styling = baseStyling.concat(' ', dayStyling)

  const handleClick = (): void => {
    onClick(date as number)
  }

  return (
    <>
      {date === undefined
        ? <div />
        : <div className={styling} onClick={handleClick}>{date}</div>}
    </>
  )
}
