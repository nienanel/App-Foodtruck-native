import React, { useState } from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const ItemDetailModal = ({ item, onClose, totalQuantity, totalPrice }) => {
    const [count, setCount] = useState(0);
    const dispatch  = useDispatch();

    const addItemToCart = () => {
        if (count > 0) {
            dispatch(addToCart({ ...item, quantity: count }));
            console.log(count);
        }
    };

    const addProduct = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };
    const removeProduct = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    if (!item) {
        return null;
    }


    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={!!item}
                onRequestClose={onClose}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: 0.9 }}>
                    <View style={{ backgroundColor: 'red', padding: 20, height: 250 }}>
                        <View className="p-5 ">
                            <Text className="text-white text-center text-lg">{item.name}</Text>
                            <Text className="text-white top-2">{item.description}</Text>
                            <Text className="text-white top-5 text-center">{item.price}</Text>
                        </View>
                        <TouchableOpacity onPress={onClose} className="absolute top-5 right-5">
                            <AntDesign name="closecircleo" size={24} color="white" />
                        </TouchableOpacity>
                        <View className="flex-row justify-center align-center, top-5">
                            <TouchableOpacity onPress={removeProduct}>
                                <AntDesign name="minuscircleo" size={24} color="white" />
                            </TouchableOpacity>
                            <Text className="text-white mx-5">{item.length}</Text>
                            <TouchableOpacity onPress={addItemToCart}>
                                <AntDesign name="pluscircleo" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity className="absolute top-10">
                                <AntDesign name="shoppingcart" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text>Total Quantity: {totalQuantity}</Text>
                        <Text>Total Price: ${totalPrice}</Text> 
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ItemDetailModal;