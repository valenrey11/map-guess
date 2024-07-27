export function fetchRandomAddress(lat, lon) {
    return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
    )
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Error al obtener la dirección')
            }
            return response.json()
        })
        .catch((error) => {
            throw error
        })
}
