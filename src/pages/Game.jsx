import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'
import { Map } from '../components/Map'
import { useEffect, useRef, useState } from 'react'
import { CityBounds } from '../components/CityBounds'
import { ButtonRandomAddress } from '../components/ButtonRandomAddress'
import { mapStore } from '../store/mapStore'
import { useFetchAllStreets } from '../hooks/useFetchAllStreets'

export function Game() {
  const { getAllSttreetsFromBounds } = useFetchAllStreets()
  const { mapCenter, setMapCenter, mapZoom, cityBounds, boundingBox, addressMarker } = mapStore()
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((e) => {
      let lat = e.coords.latitude
      let lon = e.coords.longitude
      setMapCenter([lat, lon])
    })
  }, [])
  useEffect(() => {
    if (boundingBox !== null) getAllSttreetsFromBounds(boundingBox)
  }, [boundingBox])

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl text-center h-full my-auto lg:py-16 lg:px-12'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Map-Guess
        </h1>
      </div>
      <div className='w-full h-96 px-5 flex justify-center items-center'>
        {mapCenter ? (
          <MapContainer
            center={mapCenter}
            zoom={mapZoom}
            scrollWheelZoom={false}
            className='h-full w-full'>
            <TileLayer
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={mapCenter}>
              <Popup>
                Tu ubicación. <br /> Aproximada.
              </Popup>
            </Marker>
            {addressMarker.markerCoords && (
              <Marker position={addressMarker.markerCoords}>
                <Popup>{addressMarker.address}</Popup>
              </Marker>
            )}
            <Map />
            <CityBounds />
          </MapContainer>
        ) : (
          <p className='text-gray-900 dark:text-white'>Cargando mapa...</p>
        )}
      </div>
      <div className='w-full px-5 py-5 flex flex-col justify-center gap-5'>
        <span className='w-fit mx-auto text-gray-900 dark:text-white'>{addressMarker.address}</span>
        <ButtonRandomAddress bounds={cityBounds} />
      </div>
    </section>
  )
}
