import { create } from 'zustand'

export const mapStore = create((set) => ({
    mapCenter: null,
    mapZoom: 13,
    mapMarker: [],
    cityBounds: null,
    addressMarker: { markerCoords: null, address: '', streets: [] },
    setMapCenter: (coords) => set(() => ({ mapCenter: coords })),
    setMapZoom: (zoomLevel) => set({ mapZoom: zoomLevel }),
    setMapMarker: (coordsMarker) => set({ mapMarker: coordsMarker }),
    setCityBounds: (bounds) => set({ cityBounds: bounds }),

    setAddressMarkerCoords: (lat, lon) =>
        set((state) => ({ addressMarker: { ...state.addressMarker, markerCoords: [lat, lon] } })),

    setAddressMarkerAddress: (house_number, road) =>
        set((state) => ({
            addressMarker: { ...state.addressMarker, address: `${road} ${house_number}` }
        }))
}))
