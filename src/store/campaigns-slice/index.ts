import { createSlice, createAsyncThunk, PayloadAction, current } from '@reduxjs/toolkit'
import { generateInitialCampaignsThunk } from './thunks'
import { filterCampaigns } from '../../utils'
import { ICampaigns, ICampaign, IFilterDates } from '../../types'

export const campaignsInitialState: ICampaigns = {
  campaigns: [],
  campaignsToDisplay: [],
  isFilterDashboardOpen: true,
  isDatePortalOpen: false,
  isSearchBoxOpen: false,
  searchTerm: '',
  filterDates: {},
  isDateError: false
}

const SLICE_NAME = 'campaigns'

export const generateInitialCampaigns = createAsyncThunk(`${SLICE_NAME}/generateInitialCampaigns`, generateInitialCampaignsThunk)

export const campaignSlice = createSlice({
  name: SLICE_NAME,
  initialState: campaignsInitialState,
  reducers: {
    addCampaigns: (state, action: PayloadAction<ICampaign[]>) => {
      const newCampaigns = action.payload.map(campaign => ({
        ...campaign,
        startDate: new Date(campaign.startDate),
        endDate: new Date(campaign.endDate)
      }))
      const totalCampaigns = [...state.campaigns, ...newCampaigns]

      state.searchTerm = ''
      state.isSearchBoxOpen = false
      state.isDateError = false
      state.filterDates = {}
      state.campaigns = totalCampaigns
      state.campaignsToDisplay = totalCampaigns
    },
    setIsFilterDashboardOpen: state => { state.isFilterDashboardOpen = !state.isFilterDashboardOpen },
    setFilterDates: (state, action: PayloadAction<IFilterDates>) => {
      state.filterDates = action.payload

      if (!state.isDateError) {
        state.campaignsToDisplay = filterCampaigns(current(state))
      }
    },
    setIsDateError: (state, action: PayloadAction<boolean>) => { state.isDateError = action.payload },
    clearFilter: state => {
      state.filterDates = {}
      state.campaignsToDisplay = state.campaigns
    },
    setIsSearchBoxOpen: (state, action: PayloadAction<boolean>) => { state.isSearchBoxOpen = action.payload },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload
      state.searchTerm = searchTerm

      if (!state.isDateError) {
        state.campaignsToDisplay = filterCampaigns(current(state))
      }
    },
    clearSearch: state => {
      state.searchTerm = ''
      if (!state.isDateError) {
        state.campaignsToDisplay = filterCampaigns(current(state))
      }
    }
  },
  extraReducers: builder => {
    // generate initial campaigns
    builder.addCase(generateInitialCampaigns.pending, () => {}) // TODO: show loader
    builder.addCase(generateInitialCampaigns.fulfilled, (state, action) => {
      console.log(action.payload)
      state.campaigns = action.payload
      state.campaignsToDisplay = action.payload
    })
    builder.addCase(generateInitialCampaigns.rejected, () => {
      console.log('There was an error with generating the initial campaigns:')
    })
  }
})

export const {
  addCampaigns,
  setIsFilterDashboardOpen,
  setFilterDates,
  setIsDateError,
  clearFilter,
  setIsSearchBoxOpen,
  setSearchTerm,
  clearSearch
} = campaignSlice.actions

export const campaigns = campaignSlice.reducer
