export function getCoordinates(address) {
  console.log(address)

  return fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json&limit=1`)
    .then((response) => {
      return response.json()
    })
    .catch((error) => {
      console.error(error)
      throw new Error('No results found')
    })
}
