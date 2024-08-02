import { fetchIntersectingStreets } from '../services/fetchIntersectingStreets'
import { getCoordinates } from '../services/getCoordinates'
import { mapStore } from '../store/mapStore'

export function useProcessAddresses() {
    const { addressMarker, setAddressMarkerCornerStreets } = mapStore()
    const customHook = async (addresses) => {
        try {
            const results = await Promise.all(addresses.map((address) => getCoordinates(address)))
            const validResults = results.filter((result) => result !== null)
            const queries = validResults.map((res) => {
                const { lat, lon } = res[0]
                return fetchIntersectingStreets(lat, lon)
            })
            const responses = await Promise.all(queries)
            responses.forEach((data) => {
                const streets = data.elements
                    .filter((element) => element.type === 'way' && element.tags && element.tags.name)
                    .map((element) => {
                        if (element.tags.name !== addressMarker.address.road) {
                            return element.tags.name
                        }
                    })
                const cornerStreet = streets.filter((street) => street !== undefined)
                setAddressMarkerCornerStreets(cornerStreet[0])
            })
        } catch (error) {
            console.error('Error processing addresses:', error)
        }
    }
    return { processAddresses: customHook }
}
