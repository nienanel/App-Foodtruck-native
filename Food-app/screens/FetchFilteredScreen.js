import React from 'react'
import FetchFiltered from '../src/FetchFiltered'

import Header from '../components/Header'
import CategoriesNav from '../components/CategoriesNav'
import { SafeAreaView, StyleSheet, View} from 'react-native'

const FetchFilteredScreen = ({ route }) => {
    const { selectedCategory } = route.params

    return (
        <SafeAreaView style={Styles.maincontainer}>
            <Header />
            <View style={Styles.container}>
                <CategoriesNav />
            </View>
            <View>
                <FetchFiltered selectedCategory={selectedCategory} />
            </View>
        </SafeAreaView>
    )
}

export default FetchFilteredScreen

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    maincontainer: {
        backgroundColor: 'white',
        flex: 1
    }
})