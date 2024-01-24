import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { googleAPI } from "../services/googleAPI";
import { fetchAddressFromCoords } from "../services/locationService";

const useLocation = () => {
    // const [location, setLocation] = useState({ latitude: null, longitude: null });
    const { latitude, longitude} = locationResult.coords
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                    setError('Permission to access location was denied')
                    setIsLoading(false)
                    return
                }

                let locationResult = await Location.getCurrentPositionAsync({});
                setLocation({
                    latitude: locationResult.coords.latitude,
                    longitude: locationResult.coords.longitude
                });

                const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&key=${googleAPI.mapStatic}`
                const response = await fetch(urlReverseGeocode)
                const data = await response.json()

                if (data.results.length > 0) {
                    const fetchedAddress = await fetchAddressFromCoords(latitude, longitude)
                    setAddress(fetchedAddress)
                } else {
                    setError('No address found for this location')
                }
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        })();
    }, []);

    return { location, address, error, isLoading };
};

export default useLocation;