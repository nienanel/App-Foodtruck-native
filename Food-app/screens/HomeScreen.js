import React from 'react'
import { SafeAreaView, View, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
// components
import Header from "../components/Header"
import CategoriesNav from '../components/CategoriesNav'
import FeaturedRow from '../components/FeaturedRow'
import { colors } from '../constants/colors'

function HomeScreen() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={Styles.container}>
            <Header />
            <View>
                <CategoriesNav />
            </View>
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
        height: '100%',
        width: '100%',
        backgroundColor: colors.white,
        gap: 5
    },
})