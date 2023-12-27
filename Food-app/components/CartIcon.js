import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/colors'
import { AntDesign } from '@expo/vector-icons'

const CartIcon = ({ color, size }) => {
    const cartItemCount = useSelector(state => state.cart.totalQuantity)
    const navigation = useNavigation()

    const handlePressCartIcon = () => {
        navigation.navigate("Cart")
    }

    return (
        <Pressable style={styles.cartIconWrapper} onPress={handlePressCartIcon}>
            <AntDesign name="shoppingcart" size={25} color={color || colors.secondary} />
            {cartItemCount > 0 && (
                <View style={styles.cartItemCountBadge}>
                    <Text style={styles.cartItemCountText}>{cartItemCount}</Text>
                </View>
            )}
        </Pressable>
    )
}

export default CartIcon;

const styles = StyleSheet.create({
    cartIconWrapper: {
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    cartItemCountBadge: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: colors.secondary,
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    cartItemCountText: {
        color: colors.white,
        fontSize: 12,
        fontFamily: "UrbanistBold",
        textAlign: "center",
    },
})