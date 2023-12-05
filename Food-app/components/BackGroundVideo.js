import React from 'react'
import { Video, ResizeMode } from "expo-av"
import { View, StyleSheet, Text } from 'react-native'

const BackGroundVideo = () => {
    return (
        <View style={styles.container}>
            <Video
                source={require("../assets/loginBackground.mp4")}
                rate={1.0}
                isMuted={true}
                resizeMode={ResizeMode.COVER}
                shouldPlay={true}
                isLooping
                style={styles.video}
            />
            <View >
                <Text style={styles.text}>Hello</Text>
            </View>
        </View>
    )
}

export default BackGroundVideo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    video: {
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
});