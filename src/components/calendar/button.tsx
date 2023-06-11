import React, { FC } from 'react'

interface IButton {
  text: string
  onClick: () => void
}

export const Button: FC<IButton> = ({ text, onClick }) =>
  <button
    className='h-10 m-4 text-xl rounded-full w-28 bg-primary-200 text-grey-50'
    onClick={onClick}
  >
    {text}
  </button>
