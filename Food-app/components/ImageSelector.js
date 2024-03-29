import { StyleSheet, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AddIButton from "./AddButton";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { useDispatch, useSelector } from "react-redux";
import { setUserImage } from "../store/UserSlice";
import { storage } from "../services/firebaseConfig";
import { saveUserLocationData, upLoadImageToStorage } from "../services/firestoreService";

const ImageSelector = () => {
    const navigation = useNavigation()
    const [image, setImage] = useState("")
    const userDetails = useSelector(state => state.user.userDetails)
    const dispatch = useDispatch()

    const pickImage = async (method) => {
        let result = await method({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImage(uri);
        }
    };

    const confirmImage = async () => {
        const imageUrl = await upLoadImageToStorage(image);

        if (imageUrl && userDetails?.uid) {
            dispatch(setUserImage(imageUrl))
            navigation.navigate("User", { image: imageUrl })

            try {
                await saveUserLocationData(userDetails.uid, null, imageUrl)
                console.log("User data saved successfully");
            } catch (error) {
                console.error("Error saving user location data:", error)
            }
        } else {
            console.log("Image URL or User ID is missing.");
        }
    };
    if (isLoading) {
        return <ActivityIndicator size="large" style={styles.loader} />;
    }

    return (
        <View style={styles.Container}>
            <View style={styles.leftArrow}>
                <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} />
            </View>
            {
                image ?
                    <>
                        <Image
                            source={{ uri: image }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <AddIButton title="Take other photo" onPress={() => pickImage(ImagePicker.launchCameraAsync)} />
                        <AddIButton title="confirm photo" onPress={confirmImage} />
                    </>
                    :
                    <>
                        <View style={styles.noPhotoContainer}>
                            <Text style={styles.noPhotoText}>No photo selected</Text>
                        </View>
                        <AddIButton title="take photo" onPress={() => pickImage(ImagePicker.launchCameraAsync)} />
                        <AddIButton title="search gallery" onPress={() => pickImage(ImagePicker.launchImageLibraryAsync)} />
                    </>
            }
        </View>
    )
};

export default ImageSelector;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 4,
    },
    leftArrow: {
        position: 'absolute',
        left: 16,
        top: 16,
        backgroundColor: colors.terciary,
        borderRadius: 50,
        padding: 15,
        zIndex: 50,
        marginTop: 10
    },
    noPhotoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noPhotoText: {
        fontSize: 24,
        fontFamily: 'UrbanistBold',
        marginBottom: 20,
        color: colors.secondary,
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
    }
})