import { Rectangle, useMap } from 'react-leaflet'

export function CityBounds({ bounds, setBounds }) {
  const map = useMap()

  map.on('geosearch/showlocation', (result) => {
    const queryBounds = result.location.bounds
    setBounds(queryBounds)
    map.flyToBounds(queryBounds)
  })
  return bounds ? <Rectangle bounds={bounds}></Rectangle> : <div></div>
}
