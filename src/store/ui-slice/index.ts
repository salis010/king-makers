import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUI {
  isFilterPortalOpen: boolean
  isSearchBoxOpen: boolean
  searchTerm: string
}

export const uiInitialState: IUI = {
  isFilterPortalOpen: false,
  isSearchBoxOpen: false,
  searchTerm: ''
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setIsFilterPortalOpen: (state, action: PayloadAction<boolean>) => { state.isFilterPortalOpen = action.payload },
    setIsSearchBoxOpen: (state, action: PayloadAction<boolean>) => { state.isSearchBoxOpen = action.payload },
    setSearchTerm: (state, action: PayloadAction<string>) => { state.searchTerm = action.payload },
    clearSearch: state => { state.searchTerm = '' }
  }
})

export const {
  setIsFilterPortalOpen,
  setIsSearchBoxOpen,
  setSearchTerm,
  clearSearch
} = uiSlice.actions

export const ui = uiSlice.reducer
