import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native'

import Categories from './Categories'


export default function CategoriesNav() {
    const [ selectedCategory, setSelectedCategory ] = useState(null);
    const navigation = useNavigation();

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        navigation.navigate('FetchFilteredScreen', { selectedCategory: category });
    };

    return (
        <ScrollView className="bg-red-100 h-[18%] shadow-md shadow-black mt-2 mb-2"
            contentContainerStyle={{
                paddingBottom: 30,
            }}
        >
            <Categories onSelectCategory={handleCategorySelect} />
        </ScrollView>
    );
};
