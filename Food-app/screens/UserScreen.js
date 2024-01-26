import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { colors } from '../constants/colors';
import AddButton from '../components/AddButton';


const UserScreen = () => {
    const userImage = useSelector(state => state.user.userImage)
    const navigation = useNavigation()
    const user = useSelector(state => state.user.userDetails)
    const userAddress = useSelector(state => state.user.userAddress)

    const { signOut } = useAuth()


    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={userImage ? { uri: userImage } : require("../assets/userDefault.png")}
                    style={styles.image}
                    resizeMode='cover'
                />
                <AddButton
                    title="Edit picture"
                    onPress={() => navigation.navigate("ImageSelector")}
                />
                <AddButton
                    title="Select Location"
                    onPress={() => navigation.navigate("LocationSelector")}
                />

            </View>
            <View className="w-[80%] bg-white p-20 rounded-md shadow-md shadow-black ring-offset-black items-center">
                <Text className="text-md font-bold text-left p-2">User Information</Text>
                <Text className="text-md font-bold text-left p-2">Name: {user?.name || "no name"}</Text>
                <Text className="text-md font-bold text-left p-2 ">Email: {user?.email}</Text>
                <Text className="text-md font-bold text-left p-2">Address: {userAddress}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
                    <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default UserScreen;

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