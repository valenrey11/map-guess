export function fetchAllStreets(bounds) {
    const [south, north, west, east] = bounds;
    const query = `
    [out:json];
    (
        way["highway"]["name"~"."](${south},${west},${north},${east});
        );
        out body;
        
        out skel qt;
      `;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
}