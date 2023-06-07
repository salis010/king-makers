export const getDateFromString = (str: string): Date => {
  const [year, month, day] = str.split('-')

  return new Date(+year, +month - 1, +day)
}
