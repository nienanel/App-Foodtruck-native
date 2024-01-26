import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { checkout, removeFromCart } from '../store/cartSlice';
import { colors } from '../constants/colors';
import AddIButton from '../components/AddButton';



const CartItem = ({ item, onRemove }) => (
    <View style={{ backgroundColor: 'red', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
        <Text style={{ fontSize: 16 }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{`$${item.price} x ${item.quantity}`}</Text>
        <TouchableOpacity onPress={() => onRemove(item)}>
            <Text style={{ color: 'white', fontSize: 16 }}>Remove</Text>
        </TouchableOpacity>
    </View>
);

const CartScreen = () => {
    const navigation = useNavigation()
    const { items: cartItems, totalPrice } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart({ id: item.id }))
        Alert.alert('Item removed from cart')
    };

    const handleCheckout = () => {
        dispatch(checkout())
        Alert.alert('Order placed successfully')
        navigation.navigate('MainTab')
    }

    return (
        <View style={styles.cartContainer}>
            <View style={styles.headerImageContainer}>
                <Image source={require('../assets/header2.png')} style={styles.headerImage} />
            </View>
            <View>
                <Text style={styles.cartTitle}>Your Cart</Text>
                <FlatList
                    data={cartItems}
                    keyExtractor={(item, index) => `cart-item-${index}`}
                    renderItem={({ item }) => (
                        <CartItem item={item} onRemove={removeItemFromCart}
                        />
                    )}
                    contentContainerStyle={styles.cartItemsContainer}
                />
                <Text style={styles.cartTotal}>{`Total Price: $${totalPrice.toFixed(2)}`}</Text>
                <View style={styles.buttonContainer}>
                    <AddIButton title={'Checkout'} onPress={handleCheckout} />
                </View>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    cartContainer: {
        backgroundColor: colors.white,
    },
    cartItemsContainer: {
        paddingHorizontal: 5,
        marginTop: 100,
    },
    cartTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: colors.secondary,
        backgroundColor: colors.white,
    },
    cartTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
        backgroundColor: colors.white,
    },
    headerImageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: colors.terciary,
    },
    headerImage: {
        height: "100%",
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
});
