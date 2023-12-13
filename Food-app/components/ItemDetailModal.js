import React from "react";
import { Modal, View, TouchableOpacity, Text } from "react-native";

const ItemDetailModal = ({ item, onClose }) => {

    if (!item) {
        return null;
    }
    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={!!item}
            onRequestClose={onClose}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text>{item.price}</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>     
            </View>
        </Modal>
    );
};

export default ItemDetailModal;