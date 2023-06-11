import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import { ui, uiInitialState, IUI } from './ui-slice'
import { campaigns, campaignsInitialState } from './campaigns-slice'
import { ICampaigns } from '../types'

export interface IState {
  campaigns: ICampaigns
  ui: IUI
}

const initialState: IState = {
  campaigns: campaignsInitialState,
  ui: uiInitialState
}

const reducer = {
  campaigns,
  ui
}

const initStore = (preloadedState = initialState): EnhancedStore => configureStore({
  reducer,
  preloadedState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export const store = initStore(initialState)
