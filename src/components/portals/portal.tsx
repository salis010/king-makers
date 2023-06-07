import React, { FC } from 'react'
import { CloseIcon } from '../../images/close-icon'

interface IPortal {
  close: () => void
}

export const Portal: FC<IPortal> = ({ children, close }) =>
  <div className='absolute left-0 z-20 flex justify-center w-full top-36 bg-grey-50'>
    <div className='relative py-12 border-4 my-96 w-600 border-grey-200 rounded-2xl'>
      <div
        className='absolute top-0 cursor-pointer right-8 top-8'
        onClick={close}
      >
        <CloseIcon />
      </div>
      {children}
    </div>
  </div>
