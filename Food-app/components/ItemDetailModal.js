import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, saveCart } from "../store/cartSlice";
import { AntDesign } from '@expo/vector-icons';

const ItemDetailModal = ({ item, onClose }) => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const addItemToCart = () => {
        if (count > 0) {
            const newItem = { ...item, quantity: count };
            dispatch(addToCart(newItem));
            dispatch(saveCart([...cartItems, newItem]));
            onClose();
        }
    };

    const updateCount = (increment) => {
        setCount(prevCount => Math.max(0, prevCount + increment));
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!!item}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 20 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{item.name}</Text>
                    <Text style={{ color: 'white' }}>{item.description}</Text>
                    <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20 }}>{`Price: $${item.price}`}</Text>
                    <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => updateCount(-1)}>
                            <AntDesign name="minuscircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginHorizontal: 10 }}>{count}</Text>
                        <TouchableOpacity onPress={() => updateCount(1)}>
                            <AntDesign name="pluscircleo" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={addItemToCart} style={{ backgroundColor: 'black', borderRadius: 10, padding: 10, marginTop: 20, alignItems: 'center' }}>
                        <AntDesign name="shoppingcart" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ItemDetailModal;