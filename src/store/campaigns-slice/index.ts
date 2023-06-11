import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { generateInitialCampaignsThunk } from './thunks'
import { filterCampaigns } from '../../utils'
import { FROM, TO } from '../../constants'
import { ICampaign, IFilterDates } from '../../types'

export interface ICampaigns {
  campaigns: ICampaign[]
  campaignsToDisplay: ICampaign[]
  isFilterDashboardOpen: boolean
  isDatePortalOpen: boolean
  isSearchBoxOpen: boolean
  searchTerm: string | null
  filterDates: IFilterDates
  isDateError: boolean
}

export const campaignsInitialState: ICampaigns = {
  campaigns: [],
  campaignsToDisplay: [],
  isFilterDashboardOpen: true,
  isDatePortalOpen: false,
  isSearchBoxOpen: false,
  searchTerm: null,
  filterDates: {},
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
    setFilterDates: (state, action: PayloadAction<IFilterDates>) => {
      state.filterDates = action.payload

      if (!state.isDateError) {
        const campaigns = state.campaigns
        const fromDate = state.filterDates?.[FROM]
        const toDate = state.filterDates?.[TO]

        state.campaignsToDisplay = filterCampaigns({ campaigns, fromDate, toDate })
      }
    },
    setIsDateError: (state, action: PayloadAction<boolean>) => { state.isDateError = action.payload },
    clearFilter: state => {
      state.filterDates = {}
      state.campaignsToDisplay = state.campaigns
    },
    setIsSearchBoxOpen: (state, action: PayloadAction<boolean>) => { state.isSearchBoxOpen = action.payload },
    setSearchTerm: (state, action: PayloadAction<string>) => { state.searchTerm = action.payload },
    clearSearch: state => { state.searchTerm = '' }
  },
  extraReducers: builder => {
    // generate initial campaigns
    builder.addCase(generateInitialCampaigns.pending, () => {}) // TODO: show loader
    builder.addCase(generateInitialCampaigns.fulfilled, (state, action) => {
      state.campaigns = action.payload
      state.campaignsToDisplay = action.payload
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
