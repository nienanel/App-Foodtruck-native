import React from 'react'
import { Video, ResizeMode } from "expo-av"
import { View, Text } from 'react-native'

const BackGroundVideo = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Video
                source={require("../assets/loginBackground.mp4")}
                rate={1.0}
                isMuted={true}
                resizeMode={ResizeMode.COVER}
                shouldPlay={true}
                isLooping
                className="absolute h-[100%] w-[100%] z-[-10] m-0"
            />
        </View>
    )
}

export default BackGroundVideo

