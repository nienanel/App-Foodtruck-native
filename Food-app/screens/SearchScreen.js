import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../services/firebaseConfig';
import { colors } from '../constants/colors';
import Header from '../components/Header';
import { GoBackArrow } from '../components/GoBackArrow';

const SearchScreen = ({ route }) => {
    const navigation = useNavigation()
    const { searchQuery } = route.params
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fethData = async () => {
            try {
                const querySnapshot = await firebase.firestore().collection('Menu')
                    .orderBy('name')
                    .startAt(searchQuery.toLowerCase())
                    .endAt(searchQuery.toLowerCase() + '\uf8ff')
                    .get();

                const items = querySnapshot.docs.map(doc => doc.data());
                setSearchResults(items);
            } catch (error) {
                console.error("Error fetching search results", error)
            }
        }
        fethData()
    }, [searchQuery])

    const handleSelectItem = (item) => {
        navigation.navigate('FetchFilteredScreen', { categoryParam: item.category })
    }

    return (
        <View style={styles.container}>
            <GoBackArrow />
            <Header />
            <Text style={styles.title}>resultados de la busqueda</Text>
            <FlatList
                data={searchResults}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleSelectItem(item)} style={styles.listItem}>
                        <View>
                            <Image
                                source={{ uri: item.img }}
                                style={styles.itemImage}
                            />
                            <Text style={styles.itemTitle}>{item.name}</Text>
                            <Text tyle={styles.itemPrice}>{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item,index) => `search-item-${index}`}
                style={styles.list}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    title: {
        fontSize: 24,
        fontFamily: 'UrbanistBold',
        color: colors.secondary,
        textAlign: 'center',
        marginVertical: 20
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.secondary,
        paddingVertical: 10,
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 10
    },
    itemTitle: {
        fontSize: 18,
        color: "black",
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.secondary,
    }
})