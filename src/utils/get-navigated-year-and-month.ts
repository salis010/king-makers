interface IYearAndMonth {
  year: number
  month: number
}

export const getNavigatedYearAndMonth = (year: number, month: number, variation: number): IYearAndMonth => {
  let newMonth = month + variation
  let newYear = year

  if (newMonth > 11) {
    newMonth = 0
    newYear = year + 1
  } else if (newMonth < 0) {
    newMonth = 11
    newYear = year - 1
  }

  return ({
    year: newYear,
    month: newMonth
  })
}
