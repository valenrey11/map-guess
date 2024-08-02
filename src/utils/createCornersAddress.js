export function createCornersAddress(addressmarker) {
  const { house_number } = addressmarker.address
  const commaIndex = addressmarker.fullAddress.indexOf(',')
  const addressWithoutNumb = addressmarker.fullAddress.substring(commaIndex + 1).trim()
  // console.log(addressWithoutNumb)
  let big = 0
  let small = 0
  if (house_number < 100) {
    big = 99
    small = 0
  } else {
    big = 99 + Number(house_number) - (house_number % 100)
    small = house_number - ((house_number % 100) - 1)
  }
  let higerAddress = `${big}, ${addressWithoutNumb}`
  let lowerAddress = `${small}, ${addressWithoutNumb}`
  return [higerAddress, lowerAddress]
}
