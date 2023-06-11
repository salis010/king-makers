import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { generateInitialCampaignsThunk } from './thunks'
import { ICampaign, IFilterDates } from '../../types'

export interface ICampaigns {
  campaigns: ICampaign[]
  isFilterDashboardOpen: boolean
  isDatePortalOpen: boolean
  isSearchBoxOpen: boolean
  searchTerm: string
  filterDates?: IFilterDates
  isDateError: boolean
}

export const campaignsInitialState: ICampaigns = {
  campaigns: [],
  isFilterDashboardOpen: true,
  isDatePortalOpen: false,
  isSearchBoxOpen: false,
  searchTerm: '',
  isDateError: false
}

const SLICE_NAME = 'campaigns'

export const generateInitialCampaigns = createAsyncThunk(`${SLICE_NAME}/generateInitialCampaigns`, generateInitialCampaignsThunk)

export const campaignSlice = createSlice({
  name: SLICE_NAME,
  initialState: campaignsInitialState,
  reducers: {
    // addCampaigns: (state, action: PayloadAction<ICampaign[]>) => { state.campaigns = [...state.campaigns, ...action.payload] }
    setIsFilterDashboardOpen: state => { state.isFilterDashboardOpen = !state.isFilterDashboardOpen },
    setIsDatePortalOpen: (state, action: PayloadAction<boolean>) => { state.isDatePortalOpen = action.payload },
    setFilterDates: (state, action: PayloadAction<IFilterDates>) => { state.filterDates = action.payload },
    setIsDateError: (state, action: PayloadAction<boolean>) => { state.isDateError = action.payload },
    clearFilter: state => { state.filterDates = undefined },
    setIsSearchBoxOpen: (state, action: PayloadAction<boolean>) => { state.isSearchBoxOpen = action.payload },
    setSearchTerm: (state, action: PayloadAction<string>) => { state.searchTerm = action.payload },
    clearSearch: state => { state.searchTerm = '' }
  },
  extraReducers: builder => {
    // generate initial campaigns
    builder.addCase(generateInitialCampaigns.pending, () => {}) // TODO: show loader
    builder.addCase(generateInitialCampaigns.fulfilled, (state, action) => {
      state.campaigns = action.payload
    })
    builder.addCase(generateInitialCampaigns.rejected, () => {
      console.log('There was an error with generating the initial campaigns:')
    })
  }
})

export const {
  // addCampaigns,
  setIsFilterDashboardOpen,
  setIsDatePortalOpen,
  setFilterDates,
  setIsDateError,
  clearFilter,
  setIsSearchBoxOpen,
  setSearchTerm,
  clearSearch
} = campaignSlice.actions

export const campaigns = campaignSlice.reducer
