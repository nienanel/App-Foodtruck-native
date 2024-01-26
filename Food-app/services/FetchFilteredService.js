import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { ActivityIndicator } from 'react-native';
import ItemDetailModal from '../components/ItemDetailModal';
import useItems from '../hooks/useItems';

const FetchFiltered = ({ selectedCategory }) => {
    const {
        loading,
        filteredItems,
        selectedItem,
        handlePressItem,
        setSelectedItem
    } = useItems(selectedCategory);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={colors.secondary} />
                <Text>Loading...</Text>
            </View>
        )
    }


    return (
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 20,
                paddingBottom: 30,
                gap: 10,
                backgroundColor: colors.terciary,
                flexWrap: 'wrap',
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {filteredItems.map((item) => (
                <TouchableOpacity key={item.id} onPress={() => handlePressItem(item)}>
                    <View>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.cardTitle}>{item.name}</Text>
                            </View>
                            <Image
                                source={{ uri: item.img }}
                                style={{ width: "100%", height: 160, }}
                            />
                            <Text>{item.description}</Text>
                            <View>
                                <Text style={styles.itemPrice}>{"$" + item.price}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
            {selectedItem && <ItemDetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </ScrollView>
    )
};

export default FetchFiltered;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 10,
        width: "100%",
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        textAlign: 'center',
    },
    cardHeader: {
        backgroundColor: colors.terciary,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    }
})