import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Header, Table, Portal } from '../'
import { IState } from '../../types'

export const Home: FC = () => {
  const { isPortalOpen } = useSelector((state: IState) => state.ui)
  const style = `relative flex flex-col items-center h-screen ${isPortalOpen ? 'overflow-hidden' : ''}`

  return (
    <main
      className={style}
    >
      <Header />
      <Table />
      {isPortalOpen && <Portal />}
    </main>
  )
}
