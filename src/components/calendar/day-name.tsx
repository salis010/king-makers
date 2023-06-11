import React, { FunctionComponent } from 'react'

interface IDayName {
  dayName: string
}

export const DayName: FunctionComponent<IDayName> = ({ dayName }) =>
  <div className='flex items-center justify-center p-4 select-none bg-secondary-100'>
    {dayName}
  </div>
