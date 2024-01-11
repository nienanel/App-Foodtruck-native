import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import Search from './Search'
import { colors } from '../constants/colors'
import CartIcon from './CartIcon'

const Header = ({ onSearchSubmit }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <Image
                    source={require("../assets/logo2.png")}
                    style={styles.logo}
                />
                <View style={styles.locationContainer}>
                    <Text style={styles.locationHeader}>Current Location</Text>
                    <AntDesign name="down" size={20} color={colors.secondary} />
                </View>
                <CartIcon />
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
    },
    headerTop: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginRight: 20,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginTop: 5,
        marginLeft: 25,
    },
    locationContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 2,
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
})