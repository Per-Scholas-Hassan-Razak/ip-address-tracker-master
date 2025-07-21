import { API_BASE_URL, API_KEY } from "../config.js";
import { GeolocationAPIProps } from "../model/GeolocationAPI.js";

export const fetchIpGeolocationData = async (
  ipAddress: string = ""
): Promise<GeolocationAPIProps> => {
  const url = `${API_BASE_URL}?apiKey=${API_KEY}${
    ipAddress ? `&ipAddress=${ipAddress}` : ""
  }`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API fetch failed. Status: ${response.status}`);
    }
    const data: GeolocationAPIProps = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
