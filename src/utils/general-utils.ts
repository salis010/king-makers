// export const getDayName = (n: number): string => {
//   switch (n) {
//     case 0: return 'Sunday'
//     case 1: return 'Monday'
//     case 2: return 'Tuesday'
//     case 3: return 'Wednesday'
//     case 4: return 'Thursday'
//     case 5: return 'Friday'
//     case 6: return 'Saturday'
//     default: return 'Error: no weekday could be matched'
//   }
// }

export const getMonthName = (n: number): string => {
  switch (n) {
    case 0: return 'January'
    case 1: return 'February'
    case 2: return 'March'
    case 3: return 'April'
    case 4: return 'May'
    case 5: return 'June'
    case 6: return 'July'
    case 7: return 'August'
    case 8: return 'September'
    case 9: return 'October'
    case 10: return 'November'
    case 11: return 'December'
    default: return 'Error: no month could be matched'
  }
}

// export const getYearNumberFromFolderName = (folderName: string): number => parseInt(folderName.slice(0, 4), 10)

// export const getMonthNumberFromDayName = (dayName: string): number => {
//   const month = dayName.slice(4, 6)

//   return parseInt(month[0] === '0' ? month[1] : month, 10) - 1
// }

// export const getDayNumberFromDayName = (dayName: string): number => {
//   const day = dayName.slice(6)

//   return parseInt(day[0] === '0' ? day[1] : day, 10)
// }

// export const getTodayISODate = (): string => {
//   const today = new Date()
//   // the below is done so that 'toISOString' does not return minutes, seconds, etc., but just zeroes for these variables
//   const date = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0)

//   return date.toISOString()
// }

export const getNumberOfDaysInMonth = (year: number, month: number): number => new Date(year, month + 1, 0).getDate()
