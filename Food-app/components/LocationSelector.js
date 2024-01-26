import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import useLocation from "../hooks/useLocation";
import { colors } from "../constants/colors";
import MapPreview from "./MapPreview";
import { useDispatch, useSelector } from "react-redux";
import AddIButton from "./AddButton";
import { setUserAddress } from "../store/UserSlice";
import { saveUserLocationData } from "../services/firestoreService";
import { GoBackArrow } from "./GoBackArrow";

const LocationSelector = ({ navigation }) => {
    const { location, address, error, isLoading } = useLocation()
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.user.userDetails)

    if (isLoading) {
        return <ActivityIndicator size="large" color={colors.secondary} />
    }

    const handleConfirmLocation = async () => {
        if (location.latitude && location.longitude && userDetails && userDetails.uid && address) {
            try {
                dispatch(setUserAddress(address))
                await saveUserLocationData(userDetails.uid, location, address)
                navigation.navigate("User")
            } catch (error) {
                console.log("Error saving user location data:", error)
            }
        }
    };

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
                    <AddIButton style={styles.button} title={"Confirm"} onPress={handleConfirmLocation} />
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
};

export default LocationSelector;

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