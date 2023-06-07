export { IState } from './store'

export interface ICampaign {
  name: string
  isActive: boolean
  startDate: Date
  endDate: Date
  budget: number
}
