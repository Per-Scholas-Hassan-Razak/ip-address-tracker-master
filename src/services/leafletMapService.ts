declare const L: typeof import("leaflet");
import { Location } from "../model/Location.js";

let map: L.Map | null = null;
let marker: L.Marker | null = null;

export const renderMap = (location: Location): void =>  {
  const coordinates: [number, number] = [location.lat, location.lng];
  if (!Number.isFinite(coordinates[0]) || !Number.isFinite(coordinates[1])) {
    throw new Error("Invalid location coordinates");
  }

  if (!map) {
    map = L.map("map").setView(coordinates, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    marker = L.marker(coordinates).addTo(map);
  } else {
    map.flyTo(coordinates, 13);
    marker?.setLatLng(coordinates);
  }
}
