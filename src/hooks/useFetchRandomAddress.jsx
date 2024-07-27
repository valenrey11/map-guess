import { fetchRandomAddress } from '../services/fetchRandomAddress'
import { mapStore } from '../store/mapStore'

export function useFetchRandomAddress() {
  const { setAddressLoading, setAddressMarkerAddress, setAddressMarkerCoords } = mapStore()
  const customHook = async (lati, long) => {
    setAddressLoading(true)
    return fetchRandomAddress(lati, long)
      .then((data) => {
        if (data.address.house_number) {
          console.log('si existia')
          const { lat, lon } = data
          const { house_number, road } = data.address
          setAddressMarkerCoords(lat, lon)
          setAddressMarkerAddress(house_number, road)
        } else {
          return false
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setAddressLoading(false)
      })
  }
  return { getRandomAddress: customHook }
}
