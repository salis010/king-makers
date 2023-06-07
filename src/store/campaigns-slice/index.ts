import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { generateInitialCampaignsThunk } from './thunks'
import { ICampaign } from '../../types'

export interface ICampaigns {
  campaigns: ICampaign[]
}

export const campaignsInitialState: ICampaigns = {
  campaigns: []
}

const SLICE_NAME = 'campaigns'

export const generateInitialCampaigns = createAsyncThunk(`${SLICE_NAME}/generateInitialCampaigns`, generateInitialCampaignsThunk)

export const campaignSlice = createSlice({
  name: SLICE_NAME,
  initialState: campaignsInitialState,
  reducers: {
    addCampaigns: (state, action: PayloadAction<ICampaign[]>) => { state.campaigns = [...state.campaigns, ...action.payload] }
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
  addCampaigns
} = campaignSlice.actions

export const campaigns = campaignSlice.reducer
