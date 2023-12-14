import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { firebase } from '../firebaseConfig'

const SearchScreen = ({ route }) => {
    const { searchQuery } = route.params
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fethData = async () => {
            try {
                const querySnapshot = await firebase.firestore().collection('Menu')
                    .where('name', '>=', searchQuery.toLowerCase())
                    .where('name', '<=', searchQuery.toLowerCase() + '\uf8ff')
                    .get()

                const items = querySnapshot.docs
                .map(doc => doc.data())
                .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

                setSearchResults(items)
            } catch (error) {
                console.error("Error fetching search results", error)
            }
        }
        fethData()
        console.log(searchResults)
    }, [searchQuery])

    return (
        <View>
            <Text>resultados de la busqueda</Text>
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View>
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: 100, height: 100 }}
                            />
                            <Text>{item.name}</Text>
                            <Text>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default SearchScreen