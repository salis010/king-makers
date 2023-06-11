import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Header, Table, Portal } from '../'
import { IState } from '../../types'

export const Home: FC = () => {
  const { isPortalOpen } = useSelector((state: IState) => state.ui)

  return (
    <main
      className='relative flex flex-col items-center h-screen'
    >
      <Header />
      <Table />
      {isPortalOpen && <Portal />}
    </main>
  )
}
