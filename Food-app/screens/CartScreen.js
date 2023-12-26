import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, saveCart, loadCart, updateCartInfo, clearCart, } from '../store/cartSlice';
import { colors } from '../constants/colors';

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
    const { items: cartItems, totalPrice } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart({ id: item.id }));
    };

    return (
        <View style={styles.cartContainer}>
            <TouchableOpacity style={styles.cartItmes}>
                <FlatList
                    data={cartItems}
                    keyExtractor={(item, index) => `cart-item-${index}`}
                    renderItem={({ item }) => (
                        <CartItem item={item} onRemove={removeItemFromCart}
                        />
                    )}
                />
                <Text style={styles.cartTotal}>{`Total Price: $${totalPrice.toFixed(2)}`}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    cartContainer: {
        padding: 20,
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    cartItmes: {
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 5,
        flexDirection: 'column',
        justifyItems: 'center',
    },
    cartTotal: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        color: colors.secondary,
        backgroundColor: colors.white,
    }
});
