import { View, Text, Alert, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../firebaseConfig'
import { clearUser } from '../store/authSlice'
import { colors } from '../constants/colors'
import AddImageButton from '../components/AddImageButton'
import { setUserImage } from '../store/UserSlice'

const UserScreen = () => {
    const userImage = useSelector(state => state.user.userImage)
    const navigation = useNavigation()
    const user = useSelector(state => {
        console.log("nombre del usuario: ", state.auth.user)
        return state.auth.user
    })

    const dispatch = useDispatch()

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                dispatch(clearUser())
                Alert.alert('Cuenta cerrada')
                navigation.navigate('LogIn')

            })
            .catch(error => Alert.alert('Error', error.message))
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={userImage ? { uri: userImage } : require("../assets/userDefault.png")}
                    style={styles.image}
                    resizeMode='cover'
                />
                <AddImageButton
                    title="Edit picture"
                    onPress={() => navigation.navigate("ImageSelector")}
                />
            </View>
            <View className="w-[80%] bg-white p-20 rounded-md shadow-md shadow-black ring-offset-black items-center">
                <Text className="text-md font-bold text-left p-2">User Information</Text>
                <Text className="text-md font-bold text-left p-2">Name: {user?.name || "no name"}</Text>
                <Text className="text-md font-bold text-left p-2">Email: {user?.email}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        alignItems: 'center',
    },
    logoutButton: {
        marginTop: 20,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 5,
    },
    logoutButtonText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: colors.terciary,
    },
})