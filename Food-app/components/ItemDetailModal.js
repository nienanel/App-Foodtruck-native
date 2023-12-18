import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, saveCart } from "../store/cartSlice";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../constants/colors";

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
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.title}>{item.name}</Text>
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
                    <TouchableOpacity onPress={addItemToCart} style={styles.cartButton}>
                        <AntDesign name="shoppingcart" size={30} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ItemDetailModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        backgroundColor: colors.secondary,
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    title: {
        fontSize: 22,
        fontFamily: 'UrbanistBold',
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
    },
    cartButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
    }
})