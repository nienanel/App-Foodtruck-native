import React from "react";
import { useFonts } from "expo-font";

const FontLoader = ({ children }) => {
    const [fontLoaded] = useFonts({
        UrbanistBold: require("../assets/fonts/Urbanist-Bold.ttf"),
        UrbanistMedium: require("../assets/fonts/Urbanist-Medium.ttf"),
    })

    if (!fontLoaded) {
        return null
    }

    return children
}

export default FontLoader;