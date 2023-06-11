import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getDateFromString } from '../../utils'

export interface IUI {
  isPortalOpen: boolean
  isFilterDashboardOpen: boolean
  isDatePortalOpen: boolean
  isSearchBoxOpen: boolean
  searchTerm: string
  filterFromDate?: Date
  filterToDate?: Date
  isDateError: boolean
}

export const uiInitialState: IUI = {
  isPortalOpen: false,
  isFilterDashboardOpen: true,
  isDatePortalOpen: false,
  isSearchBoxOpen: false,
  searchTerm: '',
  isDateError: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setIsPortalOpen: (state, action: PayloadAction<boolean>) => { state.isPortalOpen = action.payload },
    setIsFilterDashboardOpen: state => { state.isFilterDashboardOpen = !state.isFilterDashboardOpen },
    setFilterFromDate: (state, action: PayloadAction<string>) => { state.filterFromDate = getDateFromString(action.payload) },
    setFilterToDate: (state, action: PayloadAction<string>) => { state.filterToDate = getDateFromString(action.payload) },
    setIsDateError: (state, action: PayloadAction<boolean>) => { state.isDateError = action.payload },
    clearFilter: state => {
      state.filterFromDate = undefined
      state.filterToDate = undefined
    },
    setIsSearchBoxOpen: (state, action: PayloadAction<boolean>) => { state.isSearchBoxOpen = action.payload },
    setSearchTerm: (state, action: PayloadAction<string>) => { state.searchTerm = action.payload },
    clearSearch: state => { state.searchTerm = '' }
  }
})

export const {
  setIsFilterDashboardOpen,
  setIsPortalOpen,
  setFilterFromDate,
  setFilterToDate,
  setIsDateError,
  clearFilter,
  setIsSearchBoxOpen,
  setSearchTerm,
  clearSearch
} = uiSlice.actions

export const ui = uiSlice.reducer
