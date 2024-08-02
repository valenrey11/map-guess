export function fetchIntersectingStreets(lat, lon) {
  const query = `
    [out:json];
    (
      way(around:20, ${lat}, ${lon})["highway"];
    );
    out body;
    >;
    out skel qt;
  `
  return fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      data: query
    })
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    })
    .then((data) => {
      // Procesar datos aquí si es necesario
      return data
    })
    .catch((error) => {
      console.error('Error fetching intersecting streets:', error)
      return null
    })
}
