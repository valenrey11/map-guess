import { fetchRandomAddress } from '../services/fetchRandomAddress'
import { mapStore } from '../store/mapStore'

export function useFetchRandomAddress() {
  const { setAddressLoading, setAddressMarkerAddress, setAddressMarkerCoords, setFullAddress } =
    mapStore()
  const customHook = async (lati, long) => {
    setAddressLoading(true)
    return fetchRandomAddress(lati, long)
      .then((data) => {
        if (data.address.house_number) {
          const {
            house_number,
            road,
            neighbourhood,
            suburb,
            city,
            state_district,
            state,
            postcode,
            country
          } = data.address
          const addressParts = [
            house_number,
            road,
            neighbourhood,
            suburb,
            city,
            state_district,
            state,
            postcode,
            country
          ].filter(part => part !== undefined && part !== '').join(', ')
          setFullAddress(addressParts)
          const { lat, lon } = data
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
