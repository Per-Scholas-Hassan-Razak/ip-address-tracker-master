import { fetchIpGeolocationData } from "./services/geoLocationApiService.js";
import { Location } from "./model/Location.js";
import { GeolocationAPI } from "./model/GeolocationAPI.js";

let locationData: Location | null = null;
let geoLocationData : GeolocationAPI | null = null;

const renderLocationUI = () => {
  if (!locationData || !geoLocationData) return;

  document.getElementById("ip-address")!.textContent = geoLocationData.ip;
  document.getElementById("location")!.textContent = locationData.completeAddress;
  document.getElementById("timezone")!.textContent = `UTC ${locationData.timezone}`;
  document.getElementById("isp")!.textContent = geoLocationData.ispName;
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const rawData = await fetchIpGeolocationData();
    console.log("Geolocation data:", rawData);
    console.log(rawData.location.city, rawData.ip, rawData.isp);
    geoLocationData = new GeolocationAPI(rawData);
    locationData = geoLocationData.location
    renderLocationUI();
  } catch (err) {
    console.error("Error fetching IP data:", err);
  }
});
