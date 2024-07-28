import { useMap } from 'react-leaflet'
import { fetchAllStreets } from '../services/fetchAllStreets'

export function useFetchAllStreets() {
  const { setStreetsFromBounds } = useMap()
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
      .catch((error) => {})
      .finally(() => {})
  }
  return { getAllSttreetsFromBounds: customHook }
}
