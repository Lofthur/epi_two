import type { Coords, GeoData } from '../types';

const getCoords = (): Promise<Coords> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is no supported'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }),
      (error) => reject(error)
    );
  });
};

export const fetchMapData = async (): Promise<GeoData> => {
  const { lat, lon } = await getCoords();

  const mapUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  const res = await fetch(mapUrl);

  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText}`);
  }

  const data = await res.json();

  return data;
};
