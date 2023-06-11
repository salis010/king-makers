import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUI {
  isPortalOpen: boolean
}

export const uiInitialState: IUI = {
  isPortalOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState: uiInitialState,
  reducers: {
    setIsPortalOpen: (state, action: PayloadAction<boolean>) => { state.isPortalOpen = action.payload }
  }
})

export const {
  setIsPortalOpen
} = uiSlice.actions

export const ui = uiSlice.reducer
