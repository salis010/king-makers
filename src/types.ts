import { FROM, TO } from './constants'

export { IState } from './store'

export interface ICampaign {
  name: string
  isActive: boolean
  startDate: Date
  endDate: Date
  budget: number
}

export interface IFilterDates {
  FROM?: Date
  TO?: Date
}

export type FilterDateType = typeof FROM | typeof TO
