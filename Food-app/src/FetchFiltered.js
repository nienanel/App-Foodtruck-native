import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { loadCart } from '../store/cartSlice';
import { firebase } from "../firebaseConfig";

import { AntDesign } from '@expo/vector-icons';

import ItemDetailModal from '../components/ItemDetailModal';
import { colors } from '../constants/colors';

const FetchFiltered = ({ selectedCategory }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const dataRef = useCallback(() => {
        return firebase.firestore().collection('Menu');
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let query = dataRef();
                if (selectedCategory) {
                    query = query.where('category', '==', selectedCategory);
                }
                const querySnapshot = await query.get()
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                    category: doc.data().category,
                }));
                setData(items);
            } catch (error) {
                console.error("Error al cargar los datos", error);
            }
        }

        const loadCartData = () => {
            dispatch(loadCart());
        }

        fetchData();
        loadCartData();
        setLoading(false);
    }, [selectedCategory, dataRef, dispatch]);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <AntDesign name="loading1" size={50} color="white" />
            </View>
        )
    }


    const handlePressItem = (item) => {
        setSelectedItem(item)
    }

    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 20,
                paddingBottom: 30,
                gap: 10,
                backgroundColor: colors.terciary,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >

            {data.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handlePressItem(item)} className="flex-1">
                    <View className="shadow-md shadow-black rounded-lg overflow-hidden">
                        <View style={styles.cardContainer}>
                            <View className="p-2">
                                <Text className="text-lg font-semibold text-center border-b-2 border-red-500">{item.name}</Text>
                            </View>
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: "100", height: 160, }}
                            />
                            <Text className="text-gray-700 my-3 text-center">{item.description}</Text>
                            <View className="flex justify-between items-center">
                                <Text className="text-red-500 font-semibold mb-2">{"$" + item.price}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            {selectedItem && <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </ScrollView>
    )
}

export default FetchFiltered

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    }
})