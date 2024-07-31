import { create } from 'zustand'

export const mapStore = create((set) => ({
  mapCenter: null,
  mapZoom: 13,
  mapMarker: [],
  cityBounds: null,
  boundingBox: null,
  streetsFromBounds: null,
  addressMarker: {
    markerCoords: null,
    address: { address: '', house_number: '', road: '' },
    fullAddress: '',
    cornerStreetsCoords: { biggerCorner: null, smallerCorner: null },
    cornerStreets: [],
    isLoading: false
  },
  reactSelectStreets: { str1: null, str2: null },
  setMapCenter: (coords) => set(() => ({ mapCenter: coords })),
  setMapZoom: (zoomLevel) => set({ mapZoom: zoomLevel }),
  setMapMarker: (coordsMarker) => set({ mapMarker: coordsMarker }),
  setCityBounds: (bounds) => set({ cityBounds: bounds }),
  setBoundingBox: (bounds) => set({ boundingBox: bounds }),
  setStreetsFromBounds: (streets) => set({ streetsFromBounds: streets }),

  setFullAddress: (address) =>
    set((state) => ({
      addressMarker: { ...state.addressMarker, fullAddress: address }
    })),
  addReactSelectStreet: (street, str) =>
    set({
      reactSelectStreets: streets
    }),

  setAddressMarkerCoords: (lat, lon) =>
    set((state) => ({ addressMarker: { ...state.addressMarker, markerCoords: [lat, lon] } })),

  setAddressMarkerAddress: (house_number, road) =>
    set((state) => ({
      addressMarker: {
        ...state.addressMarker,
        address: {
          ...state.addressMarker.address,
          address: `${road} ${house_number}`,
          house_number: house_number,
          road: road
        }
      }
    })),
  setAddressLoading: (loading) =>
    set((state) => ({
      addressMarker: { ...state.addressMarker, isLoading: loading }
    })),
  setAddressMarkerCornerStreets: (loading) =>
    set((state) => ({
      addressMarker: { ...state.addressMarker, isLoading: loading }
    })),
  setSmallerCorner: (lat, lon) =>
    set((state) => ({
      addressMarker: {
        ...state.addressMarker,
        cornerStreetsCoords: {
          ...state.addressMarker.cornerStreetsCoords,
          smallerCorner: [lat, lon]
        }
      }
    })),
  setBiggerCorner: (lat, lon) =>
    set((state) => ({
      addressMarker: {
        ...state.addressMarker,
        cornerStreetsCoords: {
          ...state.addressMarker.cornerStreetsCoords,
          biggerCorner: [lat, lon]
        }
      }
    }))
}))
