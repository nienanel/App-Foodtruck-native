import { View, Text, Button } from 'react-native'
import React from 'react'
//components
import Fetch from '../src/Fetch'

const ListScreen = () => {


    return (
        <View className="flex-1 items-center justify-center">
            <Fetch />
        </View>
    )
}

export default ListScreen;