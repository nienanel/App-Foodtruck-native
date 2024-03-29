import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../store/categoriesSlice';

import Categories from './Categories'
import { colors } from '../constants/colors';


export default function CategoriesNav() {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const handleCategorySelect = (category) => {
        dispatch(setSelectedCategory(category))
        navigation.navigate('FetchFilteredScreen', { selectedCategory: category })
    }

    return (
        <ScrollView style={styles.catNavContainer}
            contentContainerStyle={{
                paddingBottom: 30,
            }}
        >
            <Categories onSelectCategory={handleCategorySelect} />
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    catNavContainer: {
        backgroundColor: colors.primary,
        marginHorizontal: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 15,
        marginBottom: 15,
    },
})