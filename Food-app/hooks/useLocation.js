import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { googleAPI } from "../services/googleAPI";
import { fetchAddressFromCoords } from "../services/locationService";

const useLocation = () => {
    const [location, setLocation] = useState(null)
    const [address, setAddress] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setError('Permission to access location was denied');
                    setIsLoading(false);
                    return;
                }
    
                let locationResult = await Location.getCurrentPositionAsync({});
                const { latitude, longitude } = locationResult.coords;
                setLocation({ latitude, longitude });
                console.log({ latitude, longitude });
    
                // Usar la función fetchAddressFromCoords para obtener la dirección
                const fetchedAddress = await fetchAddressFromCoords(latitude, longitude);
                setAddress(fetchedAddress);
                setIsLoading(false); // Asegúrate de establecer isLoading en false después de obtener la dirección
            } catch (error) {
                setError(error.message || "An unexpected error occurred");
                setIsLoading(false); // Asegúrate de establecer isLoading en false si hay un error
            }
        })();
    }, []);

    return { location, address, error, isLoading };
};

export default useLocation;