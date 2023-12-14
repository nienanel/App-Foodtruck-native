import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import PropTypes from 'prop-types';

const ItemDetailModal = ({ item, onClose }) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    if (!item) return null;

    const addItemToCart = () => {
        if (count > 0) {
            dispatch(addToCart({ ...item, quantity: count }));
        }
    };

    const updateCount = (increment) => {
        setCount(prevCount => {
            const newCount = prevCount + increment;
            return newCount < 0 ? 0 : newCount;
        });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!!item}
            onRequestClose={onClose}
        >
            <View className="flex-1 items-center justify-center">
                <View className="bg-red-500 rounded-lg p-10">
                    <Text className="text-white font-bold text-lg mb-2">{item.name}</Text>
                    <Text className="text-white">{item.description}</Text>
                    <Text className="text-black text-center font-bold mt-5">{item.price}</Text>
                    <TouchableOpacity onPress={onClose} className="absolute top-2 right-2">
                        <AntDesign name="closecircleo" size={24} color="black" />
                    </TouchableOpacity>
                    <View className="flex-row items-center space-x-3 mt-5 ml-5 p-2">
                        <TouchableOpacity onPress={() => updateCount(-1)}>
                            <AntDesign name="minuscircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <Text className="text-white font-bold text-lg">{count}</Text>
                        <TouchableOpacity onPress={() => updateCount(1)}>
                            <AntDesign name="pluscircleo" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={addItemToCart} className="bg-black rounded-lg p-2 mt-5 items-center">
                        <AntDesign name="shoppingcart" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

ItemDetailModal.propTypes = {
    item: PropTypes.object,
    onClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    // Estilos van aquí
});

export default ItemDetailModal;