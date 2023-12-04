import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebaseConfig'

const Fetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const dataRef = firebase.firestore().collection('Menu')

    useEffect(() => {
        const FetchData = async () => {
            try {
                const querySnapshot = await dataRef.get();
                const items = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setData(items);
                setLoading(false);
            } catch (error) {
                console.error("error en el fetch de la data", error);
            }
        };
        FetchData();
        console.log(data);
    }, []);

    if (loading) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                <FlatList
                    style={{ width: '100%' }}
                    data={data}
                    numColumns={1}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable style={{ backgroundColor: 'red', padding: 16, borderRadius: 8, margin: 5 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
                                <Image source={{ uri: item.img }} style={{ width: 100, height: 100 }} />
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        );
    };

    export default Fetch;
