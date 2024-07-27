import { mapStore } from '../store/mapStore'

export function ButtonRandomAddress({ bounds }) {
  const { setAddressMarkerAddress, setAddressMarkerCoords } = mapStore()
  const handleGetRandomAddress = () => {
    function getRandomCoordinate(bounds) {
      const lat = Math.random() * (bounds?.[0][0] - bounds?.[1][0]) + bounds?.[1][0]
      const lon = Math.random() * (bounds?.[0][1] - bounds?.[1][1]) + bounds?.[1][1]
      return { lat, lon }
    }
    const { lat, lon } = getRandomCoordinate(bounds)

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data)
        if (data && data.address) {
          const { road, house_number, city, country } = data.address
          const { lat, lon } = data
          if (road && house_number) {
            setAddressMarkerAddress(house_number, road)
            setAddressMarkerCoords(lat, lon)
          } else {
            console.log('No se encontró ninguna dirección.')
            handleGetRandomAddress()
          }
        }
      })
      .catch((error) => {
        console.error('Error al obtener la dirección:', error)
      })
  }

  return (
    <button
      className='px-5 py-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center  dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
      type='button'
      onClick={handleGetRandomAddress}>
      Get random address
    </button>
  )
}
