import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'

import Logo from "../assets/logo.jpg"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import Search from './Search'
import { colors } from '../constants/colors'

const Header = ({ onSearchSubmit }) => {
    const navigation = useNavigation();

    const handlePressCartIcon = () => {
        navigation.navigate("Cart");
    }

    return (
        <View style={styles.container}>
            <View className=" flex-row pb-3 items-center mt-2 space-x-1 p-3">
                <View>
                    <Image
                        source={Logo}
                        style={{ width: 80, height: 80, borderRadius: 100}}
                    />
                </View>
                <View className="flex-1 p-2 flex-row">
                    <Text className="font-bold p-2 text-gray-400 text-xs">Deliver Now!</Text>
                    <Text style={styles.textHeader}>Current Location
                        <AntDesign name="down" size={20} color="black" />
                    </Text>
                </View>
                <Pressable className="m-1" onPress={handlePressCartIcon}>
                    <AntDesign name="shoppingcart" size={38} color="white" style={{ opacity: 0.8, left: 10 }} />
                </Pressable>
            </View>
            <View className="p-3">
            <Search onSearchSubmit={onSearchSubmit} />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },

    textHeader: {
        fontSize: 13,
        padding: 5,
        fontFamily: "UrbanistMedium",
        backgroundColor: colors.white,
        borderRadius: 10,
        marginLeft: 5,
        width: 160
    }
})