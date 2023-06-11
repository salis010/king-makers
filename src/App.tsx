import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { addCampaigns } from './store/campaigns-slice'
import { Home } from './components/pages'
import { ICampaign } from './types'

// Note: to test 'AddCampaigns' from console, use the below array:
// const testCampaigns = [
//   { name: 'tiger', isActive: false, startDate: '2022-02-10T22:00:00.000Z', endDate: '2022-09-03T22:00:00.000Z', budget: 7689305 },
//   { name: 'elephant', isActive: true, startDate: '2020-09-12T22:00:00.000Z', endDate: '2023-12-23T22:00:00.000Z', budget: 1213524 },
//   { name: 'giraffe', isActive: true, startDate: '2018-12-31T22:00:00.000Z', endDate: '2025-05-18T22:00:00.000Z', budget: 2582872 },
//   { name: 'antelope', isActive: false, startDate: '2020-11-04T22:00:00.000Z', endDate: '2022-09-02T22:00:00.000Z', budget: 5007663 },
//   { name: 'impala', isActive: true, startDate: '2020-10-17T22:00:00.000Z', endDate: '2024-12-01T22:00:00.000Z', budget: 5581179 }
// ]

export const App: FC = () => {
  const dispatch = useDispatch()

  const AddCampaigns = (campaigns: ICampaign[]): void => {
    dispatch(addCampaigns(campaigns))
  }

  // @ts-expect-error
  window.AddCampaigns = AddCampaigns

  return <Home />
}
