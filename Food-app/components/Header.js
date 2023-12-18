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
                        style={{ width: 70, height: 70, borderRadius: 100 }}
                    />
                </View>
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text style={styles.textHeader}>Current Location
                        <AntDesign name="down" size={20} color="white" />
                    </Text>
                </View>
                <Pressable className="p-1 mb-2 mr-3" onPress={handlePressCartIcon}>
                    <AntDesign name="shoppingcart" size={35} color="white" />
                </Pressable>
            </View>
            <Search onSearchSubmit={onSearchSubmit} />
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary
    },

    textHeader: {
        fontSize: 20,
        fontFamily: "UrbanistBold",
    }
})