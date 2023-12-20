import React from 'react'
import FetchFiltered from '../src/FetchFiltered'
import CategoriesNav from '../components/CategoriesNav'
import {  StyleSheet, View, Image, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import PopUpCart from '../components/PopUpCart';

const FetchFilteredScreen = ({ route }) => {
    const navigation = useNavigation()
    const { selectedCategory } = route.params

    return (
        <View style={Styles.container}>  
        <Pressable style={Styles.leftIcon} onPress={() => navigation.goBack()}>  
            <AntDesign name='left' size={25} color='black' />
        </Pressable>
        <View style={Styles.imageContainer}>
            <Image source={require('../assets/header2.png')} style={Styles.headerImage} />
            </View>
            <View style={Styles.contentContainer}>
                <CategoriesNav />
            </View>
            <View style={Styles.contentContainer}>
                <FetchFiltered selectedCategory={selectedCategory} />
            </View>
            <PopUpCart />
        </View>
    )
}

export default FetchFilteredScreen

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    leftIcon: {
        position: 'absolute',
        left: 16,
        top: 16,
        backgroundColor: colors.terciary,
        borderRadius: 50,
        padding: 12,
        zIndex: 50,
    },
    contentContainer: {
        marginTop: 20,
        
    },
    headerImage: {
        height: 215,
        width: '100%', 
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.terciary,
        height: 210,
    }
})