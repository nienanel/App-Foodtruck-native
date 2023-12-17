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
            <View className="flex-1 justify-center items-center">
                <View className="bg-red-300 p-5 rounded-lg">
                    <Text className="text-lg font-bold">{item.name}</Text>
                    <Text className="text-gray-700 my-3 text-center">{item.description}</Text>
                    <Text className="text-red-500 text-center font-semibold mb-2">{`Price: $${item.price}`}</Text>
                    <TouchableOpacity onPress={onClose} className="absolute top-2 right-2">
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <View className="flex-row items-center p-5 justify-center">
                        <TouchableOpacity onPress={() => updateCount(-1)}>
                            <AntDesign name="minuscircleo" size={30} color="white" />
                        </TouchableOpacity>
                        <Text className="text-lg font-bold mx-5">{count}</Text>
                        <TouchableOpacity onPress={() => updateCount(1)}>
                            <AntDesign name="pluscircleo" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={addItemToCart} className="bg-red-500 p-3 rounded-lg items-center">
                        <AntDesign name="shoppingcart" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ItemDetailModal;