import React, { FC } from 'react'
import { SearchBox } from '.'

export const Header: FC = () =>
  <div className='relative flex items-center justify-between w-full h-32 py-12 shadow-md bg-gradient-to-r from-primary-200 to-secondary-200'>
    <h1 className='pl-12 text-4xl font-bold text-grey-50'>Campaigns</h1>
    <SearchBox />
  </div>
