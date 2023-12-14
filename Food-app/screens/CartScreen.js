import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart } from '../store/cartSlice';

const CartItem = React.memo(({ item, onRemove }) => (
    <View style={styles.itemContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.price}</Text>
        <TouchableOpacity onPress={() => onRemove(item)}>
            <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
    </View>
));

const CartScreen = () => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>CartScreen</Text>
            <FlatList
                data={cartItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem item={item} onRemove={removeItemFromCart} />
                )}
            />
            <Text style={styles.totalText}>Total Quantity: {totalQuantity}</Text>
            <Text style={styles.totalText}>Total Price: ${totalPrice.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // Estilos van aquí
});

export default CartScreen;