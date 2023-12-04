import React, { useLayoutEffect } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from "../assets/logo.jpg"

import { AntDesign } from "@expo/vector-icons"
// components
import Categories from "../components/Categories"
import ListScreen from './ListScreen'
import Fetch from '../src/Fetch'

function HomeScreen() {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [navigation])

    return (
        <SafeAreaView className="bg-slate-200 pt-5">

            {/* Header */}
            <View className="flex-row pb-3 items-center mx-4 space-x-2 p-4 ">
                <View>
                    <Image
                        source={Logo}
                        style={{ width: 70, height: 70, borderRadius: 100 }}
                    />
                </View>
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <AntDesign name="down" size={20} color="red" />
                    </Text>
                </View>
                <AntDesign name="user" size={30} color="red" />
            </View>

            {/* Search */}
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                <View className="flex-row flex-1 space-x-2 bg-slate-100 p-3 rounded-xl">
                    <AntDesign name="search1" size={20} color="red" />
                    <TextInput
                        placeholder="Search"
                        keyboardType="default"
                    />
                </View>
                <AntDesign name="filter" size={20} color="red" />
            </View>

            {/* Body */}
            <ScrollView className="bg-slate-400"
                contentContainerStyle={{
                    paddingBottom: 50
                }}
            >
                <Categories />
            </ScrollView>

            {/* Menu */}
    
            <Button onPress={() => navigation.navigate('ListDetail')} title="ListDetail" />
            <Button onPress={() => navigation.navigate('List')} title="List" />

        </SafeAreaView>
    )
}

export default HomeScreen
