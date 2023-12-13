import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const FoodTrucksCards = (
    {
        id,
        imgUrl,
        title,
        rating,
        short_description,
        adress,
        style,
        long,
        lat,
    }
) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow">
            <Image
                source={{
                    uri: imgUrl
                }}
                className="h-40 w-60 rounded-sm"
            />
            <View className="px-4 pb-4">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <AntDesign name="star" size={20} color="green" style={{ opacity: 0.5 }} />
                    <Text className="text-xs text-gray-500">{rating} • {style} </Text>
                </View>

                <View className="flex-row items-center space-x-2">
                    <Ionicons name="ios-location-outline" size={20} color="gray" />
                    <Text className="text-xs text-gray-500"> Nearby • {adress} </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodTrucksCards