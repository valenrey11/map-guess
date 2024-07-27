export function getRandomCoordinate(bounds) {
    const lat = Math.random() * (bounds?.[0][0] - bounds?.[1][0]) + bounds?.[1][0]
    const lon = Math.random() * (bounds?.[0][1] - bounds?.[1][1]) + bounds?.[1][1]
    return { lat, lon }
}