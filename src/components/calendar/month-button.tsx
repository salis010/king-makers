import React, { FunctionComponent } from 'react'

interface IMonthButton {
  variation: number
  handleChangeMonth: (variation: number) => void
}

export const MonthButton: FunctionComponent<IMonthButton> = ({ variation, handleChangeMonth }) => {
  const clickHandler = (): void => {
    handleChangeMonth(variation)
  }

  return (
    <button
      type='button'
      className='px-4 text-3xl font-bold outline-none border-secondary-50 text-secondary-50'
      onClick={clickHandler}
    >
      {variation === 1 ? '>' : '<'}
    </button>
  )
}
