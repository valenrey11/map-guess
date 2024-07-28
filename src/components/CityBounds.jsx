import { Rectangle, useMap } from 'react-leaflet'
import { mapStore } from '../store/mapStore'

export function CityBounds() {
  const { cityBounds, setCityBounds, setBoundingBox } = mapStore()

  const map = useMap()

  map.on('geosearch/showlocation', (result) => {
    const queryBounds = result.location.bounds
    const queryBox = result.location.raw.boundingbox
    setCityBounds(queryBounds)
    setBoundingBox(queryBox)
    map.flyToBounds(queryBounds)
  })
  return cityBounds ? <Rectangle bounds={cityBounds}></Rectangle> : <div></div>
}
