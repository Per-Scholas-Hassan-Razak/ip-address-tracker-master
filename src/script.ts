
import { fetchIpGeolocationData } from "./services/geoLocationApiService.js";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const rawData = await fetchIpGeolocationData(); 
    console.log("Geolocation data:", rawData);

    // Example: access location info
    console.log(rawData.location.city, rawData.ip, rawData.isp);
  } catch (err) {
    console.error("Error fetching IP data:", err);
  }
});