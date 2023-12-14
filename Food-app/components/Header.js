import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import Logo from "../assets/logo.jpg"
import { AntDesign } from "@expo/vector-icons"
import Search from './Search'

const Header = ({ onSearchSubmit }) => {
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
            <Search onSearchSubmit={onSearchSubmit} />
        </View>
    )
}

export default Header;