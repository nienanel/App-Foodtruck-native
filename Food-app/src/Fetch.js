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
        // console.log(data);
    }, []);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 10 }}>Menu</Text>
            </View>
            <FlatList
                style={{ width: '100%', height: '100%' }}
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable>
                        <View className="bg-slate-400 p-4">
                            <Text className="font-bold text-center">{item.name}</Text>
                            <Image source={{ uri: item.img }} style={{ width: 125, height: 105 }} />
                            <Text className="text-center">{item.price}</Text>
                        </View>
                    </Pressable>
                )}
                contentContainerStyle={{ alignItems: 'center', gap: 15, padding: 10, flexDirection: 'column', justifyContent: 'center', height: '100%', width: '100%', backgroundColor: 'red' }}
            />
        </View>
    );
};

export default Fetch;
