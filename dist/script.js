var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchIpGeolocationData } from "./services/geoLocationApiService.js";
import { GeolocationAPI } from "./model/GeolocationAPI.js";
import { renderMap } from "./services/leafletMapService.js";
import { isValidIp } from "./utils/validation.js";
let locationData = null;
let geoLocationData = null;
const form = document.getElementById("ip-address-input-form");
const spanError = document.getElementById("ip-validation-error");
const input = document.getElementById("ip-address-input");
input.addEventListener("input", () => {
    const value = input.value.trim();
    if (!value || isValidIp(value)) {
        spanError.textContent = "";
        spanError.classList.add("hidden");
        input.classList.remove("input-error");
    }
    else {
        spanError.textContent = "Invalid IP address format (e.g.123.45.67.89)";
        spanError.classList.remove("hidden");
        input.classList.add("input-error");
    }
});
const renderLocationUI = () => {
    if (!locationData || !geoLocationData)
        return;
    document.getElementById("ip-address").textContent = geoLocationData.ip;
    document.getElementById("location").textContent =
        locationData.completeAddress;
    document.getElementById("timezone").textContent = `UTC ${locationData.timezone}`;
    document.getElementById("isp").textContent = geoLocationData.ispName;
};
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rawData = yield fetchIpGeolocationData();
        console.log("Geolocation data:", rawData);
        console.log(rawData.location.city, rawData.ip, rawData.isp);
        geoLocationData = new GeolocationAPI(rawData);
        console.log("geolocation data : ", geoLocationData);
        locationData = geoLocationData.location;
        console.log("location data : ", locationData);
        renderLocationUI();
        renderMap(locationData);
    }
    catch (err) {
        console.error("Error fetching IP data:", err);
    }
}));
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const ipAddress = input.value.trim();
    if (!ipAddress)
        return;
    if (!isValidIp(ipAddress)) {
        spanError.textContent = "Invalid IP address format (e.g., 11.111.111.22)";
        spanError.classList.remove("hidden");
        input.classList.add("input-error");
        return;
    }
    try {
        const rawData = yield fetchIpGeolocationData(ipAddress);
        geoLocationData = new GeolocationAPI(rawData);
        locationData = geoLocationData.location;
        renderLocationUI();
        renderMap(locationData);
    }
    catch (err) {
        console.error("Error fetching IP data for user input:", err);
        alert("Failed to fetch data. Please try again.");
    }
    finally {
        input.value = "";
    }
}));
