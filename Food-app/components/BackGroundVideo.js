import React from 'react';
import { Video, ResizeMode } from "expo-av";
import { View, StyleSheet} from 'react-native';

const BackGroundVideo = () => {
    return (
        <View style={styles.backgroundVideo}>
            <Video
                source={require("../assets/loginBackground.mp4")}
                rate={1.0}
                isMuted={true}
                resizeMode={ResizeMode.COVER}
                shouldPlay={true}
                isLooping
                className="absolute h-[100%] w-[100vw] z-[-10] m-0"
            />
        </View>
    )
};

export default BackGroundVideo;

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})