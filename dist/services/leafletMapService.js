let map = null;
let marker = null;
export const renderMap = (location) => {
    const coordinates = [location.lat, location.lng];
    if (!Number.isFinite(coordinates[0]) || !Number.isFinite(coordinates[1])) {
        throw new Error("Invalid location coordinates");
    }
    if (!map) {
        map = L.map("map").setView(coordinates, 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
        }).addTo(map);
        marker = L.marker(coordinates).addTo(map);
    }
    else {
        map.flyTo(coordinates, 13);
        marker === null || marker === void 0 ? void 0 : marker.setLatLng(coordinates);
    }
};
