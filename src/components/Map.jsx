import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
export function Map() {
  const map = useMap()
  useEffect(() => {
    // const fetchData = async () => {
    //   const provider = new OpenStreetMapProvider()
    //   const results = await provider.search({ query: query })
    //   console.log(results)
    //   setResults(results)
    // }
    // fetchData()

    const searchControl = new GeoSearchControl({
      provider: new OpenStreetMapProvider({
        params: {
          countrycodes: 'AR' // Limita los resultados a Argentina
        }
      }),
      style: 'bar',
      autoComplete: true,
      autoCompleteDelay: 300
    }).addTo(map)

    return () => {
      map.removeControl(searchControl)
    }
  }, [map])
  return null
}
