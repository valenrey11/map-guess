import { Rectangle, useMap } from 'react-leaflet'
import { mapStore } from '../store/mapStore'

export function CityBounds() {
  const { cityBounds, setCityBounds } = mapStore()

  const map = useMap()

  map.on('geosearch/showlocation', (result) => {
    const queryBounds = result.location.bounds
    console.log(queryBounds)
    setCityBounds(queryBounds)
    map.flyToBounds(queryBounds)
  })
  return cityBounds ? <Rectangle bounds={cityBounds}></Rectangle> : <div></div>
}
