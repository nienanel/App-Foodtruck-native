import React, { useState } from 'react'
import { Text, TouchableOpacity, Image, } from 'react-native'

function CategoryCard({ imgUrl, title, localImage, onSelectCategory }) {

    let source = imgUrl ? { uri: imgUrl } : localImage;
    const handlePress = () => {
        onSelectCategory(title)
    };


    return (
        <TouchableOpacity className="relative mr-3 mt-3" onPress={handlePress}>
            <Image source={source}
                style={{
                    width: 95,
                    height: 90,
                    resizeMode: "stretch",
                    borderRadius: 10,
                }}
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
