import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// components
import Header from "../components/Header"
import CategoriesNav from '../components/CategoriesNav'

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView className="bg-red-200">
            <Header />
            <CategoriesNav />
            <Button onPress={() => navigation.navigate('ListDetail')} title="ListDetail" />
            <Button onPress={() => navigation.navigate('List')} title="List" />
        </SafeAreaView>
    )
};

export default HomeScreen;
