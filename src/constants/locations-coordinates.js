const COORDINATES = [
  // default position
  { lat: 48.868614, lng: 2.362222 },
  { lat: 48.8620123, lng: 2.33 },
  { lat: 48.8677, lng: 2.343 },
  { lat: 48.863, lng: 2.358 },
  { lat: 48.855, lng: 2.358 },
  { lat: 48.84, lng: 2.35 },
  { lat: 48.85, lng: 2.337 },
  { lat: 48.83, lng: 2.345 },
  { lat: 48.87, lng: 2.31 },
  { lat: 48.88, lng: 2.337 },
  { lat: 48.877, lng: 2.352 },
  { lat: 48.86, lng: 2.38 },
  { lat: 48.8351068, lng: 2.3996672 }
]

export const setCoordinatesWithLocation = (location, setNewCenter) => {
  setNewCenter(COORDINATES[location])
};
