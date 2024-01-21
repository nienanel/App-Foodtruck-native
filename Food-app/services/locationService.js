import { googleAPI } from "../services/googleAPI"; // Ensure this is correctly imported

const GOOGLE_API_KEY = googleAPI.mapStatic; // Ensure you have your API key stored securely

/**
 * Fetches a human-readable address from latitude and longitude coordinates using Google's Reverse Geocoding API.
 * @param {number} latitude - The latitude of the location.
 * @param {number} longitude - The longitude of the location.
 * @returns {Promise<string>} A promise that resolves to the formatted address.
 */
export const fetchAddressFromCoords = async (latitude, longitude) => {
    try {
        const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;
        const response = await fetch(urlReverseGeocode);
        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error("No address found for this location.");
        }

        const fetchedAddress = data.results[0].formatted_address;
        return fetchedAddress;
    } catch (error) {
        console.error("Error fetching address from coords:", error);
        throw error; // Re-throw the error so it can be handled by the calling function
    }
};