import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, saveCart, loadCart } from '../store/cartSlice';

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
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCart());
    }, [dispatch]);

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart({ id: item.id }));
        dispatch(saveCart(cartItems.filter(cartItem => cartItem.id !== item.id)));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightgray' }}>
            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => `cart-item-${index}`}
                renderItem={({ item }) => (
                    <CartItem item={item} onRemove={removeItemFromCart} />
                )}
            />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>{`Total Price: $${totalPrice.toFixed(2)}`}</Text>
        </View>
    );
};

export default CartScreen;
