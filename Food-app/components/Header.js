import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { AntDesign } from "@expo/vector-icons";
import Search from './Search';
import { colors } from '../constants/colors';
import CartIcon from './CartIcon';

const Header = ({ onSearchSubmit }) => {
    const userAddress = useSelector(state => state.user.userAddress);

    const formatAddress = (address, maxLength = 25) => {
        if (address && address.length > maxLength) {
            return address.substring(0, maxLength) + "...";
        }
        return address; 
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerTop}>
                <Image
                    source={require("../assets/logo2.png")}
                    style={styles.logo}
                />
                <View style={styles.locationContainer}>
                    <Text style={styles.locationHeader}>{formatAddress(userAddress) || "Current Location"}</Text>
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
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 2,
    },
    locationHeader: {
        fontSize: 13,
        fontFamily: "UrbanistMedium",
        textAlign: "center",
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 5,
        marginLeft: 5,
        width: 170,
    },
})