import React from 'react'
import { Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

function CategoryCard({ imgUrl, title, localImage, onSelectCategory }) {

    let source = imgUrl ? { uri: imgUrl } : localImage;
    const handlePress = () => {
        onSelectCategory(title)
    };


    return (
        <TouchableOpacity className="relative mr-3 mt-3" onPress={handlePress}>
            <Image source={source}
                style={{
                    width: 110,
                    height: 100,
                    resizeMode: "stretch",
                    borderRadius: 10,
                }}
            />
            <Text  className="absolute bottom-1 left-1 text-black text-center bg-red-200 font-bold w-[95px] rounded-md">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard


