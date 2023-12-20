import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'

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
            <Pressable style={styles.leftIcon} onPress={() => navigation.goBack()}>
                <AntDesign name='left' size={25} color={colors.secondary} />
            </Pressable>
            <View style={styles.headerTop}>
                <Image
                    source={require("../assets/logo2.png")}
                    style={styles.logo}
                />
                <View style={styles.locationContainer}>
                    <Text style={styles.locationHeader}>Current Location</Text>
                    <AntDesign name="down" size={20} color={colors.secondary} />
                </View>
                <Pressable className="m-1" onPress={handlePressCartIcon}>
                    <AntDesign name="shoppingcart" size={38} color={colors.secondary} style={styles.cartIcon} />
                </Pressable>
            </View>
            <View className="mt-2 ">
                <Search onSearchSubmit={onSearchSubmit} />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 200,
    },
    headerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginTop: 5,
        marginLeft: 10
    },
    locationContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    locationHeader: {
        fontSize: 13,
        fontFamily: "UrbanistMedium",
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        width: 170,
    },
    cartIcon: {
        marginRight: 10,
        padding: 8,
        borderRadius: 100,
        backgroundColor: colors.terciary,
        width: 60,
        height: 60,
        textAlign: "center",
    },
    leftIcon: {
        position: 'absolute',
        left: 0,
        borderRadius: 50,
        padding: 12,
        zIndex: 50,
    },
})