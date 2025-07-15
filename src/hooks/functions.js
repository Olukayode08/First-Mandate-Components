export const getFirstName = (fullName) => {
  if (!fullName) return ''
  return fullName.split(' ')[0]
}

export const separateDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString)
  const date = dateTime.toLocaleDateString()
  const time = dateTime.toLocaleTimeString()
  return { date, time }
}
