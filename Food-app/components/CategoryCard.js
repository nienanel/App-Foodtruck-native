import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { colors } from '../constants/colors';

function CategoryCard({ imgUrl, title, localImage, onSelectCategory }) {

    let source = imgUrl ? { uri: imgUrl } : localImage;
    const handlePress = () => {
        onSelectCategory(title)
    };


    return (
        <TouchableOpacity className="relative mr-3 mt-3 " onPress={handlePress}>
            <Image source={source}
                style={{
                    width: 110,
                    height: 100,
                    resizeMode: "stretch",
                    borderRadius: 10,
                }}
            />
            <Text style={styles.textCard}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard


const styles = StyleSheet.create({
    textCard: {
        position: "absolute",
        bottom: 1,
        left: 1,
        color: "black",
        textAlign: "center",
        backgroundColor: colors.secondary,
        fontFamily: "UrbanistBold",
        borderRadius: 20,
        width: "100%",
        height: 20,
    }
})