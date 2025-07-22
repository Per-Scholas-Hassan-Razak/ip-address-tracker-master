var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_BASE_URL, API_KEY } from "../config.js";
export const fetchIpGeolocationData = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (ipAddress = "") {
    const url = `${API_BASE_URL}?apiKey=${API_KEY}${ipAddress ? `&ipAddress=${ipAddress}` : ""}`;
    try {
        const response = yield fetch(url);
        if (!response.ok) {
            throw new Error(`API fetch failed. Status: ${response.status}`);
        }
        const data = yield response.json();
        return data;
    }
    catch (error) {
        throw error;
    }
});
