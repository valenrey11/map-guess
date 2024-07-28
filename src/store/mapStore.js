import { create } from 'zustand'

export const mapStore = create((set) => ({
    mapCenter: null,
    mapZoom: 13,
    mapMarker: [],
    cityBounds: null,
    boundingBox: null,
    streetsFromBounds: null,
    addressMarker: { markerCoords: null, address: '', streets: [], isLoading: false },
    setMapCenter: (coords) => set(() => ({ mapCenter: coords })),
    setMapZoom: (zoomLevel) => set({ mapZoom: zoomLevel }),
    setMapMarker: (coordsMarker) => set({ mapMarker: coordsMarker }),
    setCityBounds: (bounds) => set({ cityBounds: bounds }),
    setBoundingBox: (bounds) => set({ boundingBox: bounds }),
    setStreetsFromBounds: (streets) => set({ streetsFromBounds: streets }),



    setAddressMarkerCoords: (lat, lon) =>
        set((state) => ({ addressMarker: { ...state.addressMarker, markerCoords: [lat, lon] } })),

    setAddressMarkerAddress: (house_number, road) =>
        set((state) => ({
            addressMarker: { ...state.addressMarker, address: `${road} ${house_number}` }
        })),
    setAddressLoading: (loading) => set(state => ({
        addressMarker: { ...state.addressMarker, isLoading: loading }
    }))

}))
