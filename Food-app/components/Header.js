import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'
import Search from './Search'
import { colors } from '../constants/colors'
import CartIcon from './CartIcon'

const Header = ({ onSearchSubmit }) => {
    const navigation = useNavigation();
    // const cartItemCount = useSelector(state => state.cart.totalQuantity);

    // const handlePressCartIcon = () => {
    //     navigation.navigate("Cart");
    // }

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
    // cartIconWrapper: {
    //     position: "relative",
    //     marginRight: 20,
    // },
    // cartItemCountBadge: {
    //     position: "absolute",
    //     top: -5,
    //     right: -5,
    //     backgroundColor: colors.secondary,
    //     borderRadius: 10,
    //     width: 20,
    //     height: 20,
    //     justifyContent: "center",
    //     alignItems: "center",
    // },
    // cartItemCountText: {
    //     color: colors.white,
    //     fontSize: 12,
    //     fontFamily: "UrbanistBold",
    // },
    leftIcon: {
        backgroundColor: colors.white,
        position: "absolute",
        top: 20,
        left: 5,
        zIndex: 1,
        borderRadius: 10,
        padding: 5,
    }
})