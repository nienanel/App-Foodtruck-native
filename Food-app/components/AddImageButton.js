import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const AddImageButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.editPhoto} onPress={onPress}>
        {title && <Text style={styles.editPhotoText}>{title}</Text>}
    </TouchableOpacity>
    )
}

export default AddImageButton

const styles = StyleSheet.create({
    editPhoto: {
        bottom: 1,
        left: 1,
        color: "black",
        textAlign: "center",
        backgroundColor: colors.secondary,
        fontFamily: "UrbanistBold",
        borderRadius: 20,
      width: 100,  
        height: 30,
        marginTop: 10,
        justifyContent: "center",
        marginBottom: 20,
    },
    editPhotoText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})