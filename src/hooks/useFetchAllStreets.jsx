import { fetchAllStreets } from '../services/fetchAllStreets'
import { mapStore } from '../store/mapStore'

export function useFetchAllStreets() {
  const { setStreetsFromBounds } = mapStore()
  const customHook = (bounds) => {
    return fetchAllStreets(bounds)
      .then((data) => {
        const streetNames = new Set()
        data.elements.forEach((element) => {
          if (element.type === 'way' && element.tags && element.tags.name) {
            streetNames.add(element.tags.name)
          }
        })
        setStreetsFromBounds(Array.from(streetNames))
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => { })
  }
  return { getAllSttreetsFromBounds: customHook }
}
