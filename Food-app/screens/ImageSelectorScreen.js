import { StyleSheet, Image, View, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import AddImageButton from "../components/AddImageButton";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { useDispatch } from "react-redux";
import { setUserImage } from "../store/UserSlice";

const ImageSelector = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [image, setImage] = useState("")
    const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImage(uri);
        }
    }

    const searchGallery = async () => {
        let result =await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled && result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri;
            setImage(uri);
        }
    }
    const confirmImage = () => {
        if (image) {
            dispatch(setUserImage(image))
            navigation.navigate("User", { image })
        }
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
                        <AddImageButton title="Take other photo" onPress={takeImage} />
                        <AddImageButton title="confirm photo" onPress={confirmImage} />
                    </>
                    :
                    <>
                        <View style={styles.noPhotoContainer}>
                            <Text style={styles.noPhotoText}>No photo selected</Text>
                        </View>
                        <AddImageButton title="take photo" onPress={takeImage} />
                        <AddImageButton title="search gallery" onPress={searchGallery} />
                    </>
            }
        </View>
    )
}

export default ImageSelector

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