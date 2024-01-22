import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { colors } from "../constants/colors";
import MapPreview from "./MapPreview";
import { googleAPI } from "../services/googleAPI";
import { useDispatch, useSelector } from "react-redux";
import AddIButton from "./AddButton";
import { setUserAddress } from "../store/UserSlice";
import { saveUserLocationData } from "../services/firestoreService";
import { GoBackArrow } from "./GoBackArrow";

const LocationSelector = ({ navigation }) => {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user.userDetails)


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setError("Permission to access location was denied");
                console.log("Permission to access location was denied");
                return
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        })();
        console.log(location)
    }, [])

    useEffect(() => {
        (async () => {
            if (location) {
                try {
                    const urlReverseGeocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`
                    const response = await fetch(urlReverseGeocode)
                    const data = await response.json()

                    if (data.results.length > 0) {
                        const fetchedAddress = data.results[0].formatted_address;
                        setAddress(fetchedAddress);
                        dispatch(setUserAddress(fetchedAddress));
                    } else {
                        console.log("No address found for this location.");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [location])

    const handleConfirmLocation = async () => {
        if (location && userDetails && userDetails.uid) {
            try {
                await saveUserLocationData(userDetails.uid, location, address)
                console.log("User data saved successfully");
                navigation.navigate("User")
            } catch (error) {
                console.error("Error saving user location data:", error)
            }
        }
    }

    return (
        <View style={styles.container}>
            <GoBackArrow />
            <Text style={styles.title}>My location</Text>
            {location ? (
                <View style={styles.noLocationContainer}>
                    <Text style={styles.textData}>
                        {address}
                    </Text>
                    <MapPreview location={location} />
                    <AddIButton style={styles.button} title={"Confirmn"} onPress={handleConfirmLocation} />
                </View>
            ) : (
                <>
                    <View style={styles.noLocationContainer}>
                        <Text>{error || "cargando mapa..."}</Text>
                    </View>
                </>
            )}
        </View >
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: colors.primary
    },
    noLocationContainer: {
        justifyContent: 'center',
        alignItems: 'center',


    },
    title: {
        fontSize: 24,
        fontFamily: 'UrbanistBold',
        color: colors.white,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: "90%",
        textAlign: 'center',

    },
    textData: {
        color: colors.black,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
    },
    icon: {
        position: 'absolute',
        left: 16,
        top: 16,
        backgroundColor: colors.terciary,
        borderRadius: 50,
        padding: 15,
        zIndex: 50,
        marginTop: 10
    },
})