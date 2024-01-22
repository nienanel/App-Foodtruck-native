import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const Search = ({ onSearchSubmit }) => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const handleSearchSubmit = () => {
        navigation.navigate('Search', { searchQuery: search });
    };

    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="  Search"
                    keyboardType="default"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    style={styles.textInput}
                />
            </View>
            <TouchableOpacity onPress={handleSearchSubmit}>
                <AntDesign name="search1" size={25} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    );
};

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 20,
        marginRight: 8,
    },
    textInput: {
        flex: 1,
    },
})