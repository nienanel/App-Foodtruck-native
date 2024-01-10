import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../firebaseConfig'
import { clearUser } from '../store/authSlice'
import { colors } from '../constants/colors'

const UserScreen = () => {
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
            })
            .catch(error => Alert.alert('Error', error.message))
    }

    return (
        <View className="flex-1 items-center justify-center">
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
})