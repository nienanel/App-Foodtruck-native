import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const Search = ({ onSearchSubmit }) => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const handleSearchSubmit = () => {
        navigation.navigate('Search', { searchQuery: search });
    }

    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
            <View className="flex-row flex-1 space-x-2 bg-slate-100 p-1 rounded-xl">
                <TextInput
                    placeholder="Search"
                    keyboardType="default"
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                />
            </View>
            <TouchableOpacity onPress={handleSearchSubmit}>
                <AntDesign name="search1" size={25} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}

export default Search