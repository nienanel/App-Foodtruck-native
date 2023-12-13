import React from 'react'
import { SafeAreaView, Button, View, StyleSheet, Text, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// components
import Header from "../components/Header"
import CategoriesNav from '../components/CategoriesNav'
import FeaturedRow from '../components/FeaturedRow'
import Fetch from '../src/Fetch'

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <View>
                <CategoriesNav />
            </View>
            <Button onPress={() => navigation.navigate('ListDetail')} title="ListDetail" />
            <FeaturedRow
                title="FoodTrucks Nearby"
                description="option in your zone"
                feature="Featured"
            />
        </SafeAreaView>
    )
};

export default HomeScreen;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',

        gap: 10
    }
})