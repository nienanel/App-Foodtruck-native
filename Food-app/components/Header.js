import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import Logo from "../assets/logo.jpg"
import { AntDesign } from "@expo/vector-icons"

const Header = () => {
    return (
        <View className="bg-red-200">
            <View className=" flex-row pb-3 items-center mt-2 space-x-1 p-3 ">
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
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
                <View className="flex-row flex-1 space-x-2 bg-slate-100 p-1 rounded-xl">
                    <AntDesign name="search1" size={20} color="red" />
                    <TextInput
                        placeholder="Search"
                        keyboardType="default"
                    />
                </View>
                <AntDesign name="filter" size={20} color="red" />
            </View>
        </View>
    )
}

export default Header;