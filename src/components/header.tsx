import React, { FC } from 'react'
import { SearchBox } from '.'

export const Header: FC = () =>
  <section className='relative flex flex-col h-100'>
    <SearchBox />
  </section>
