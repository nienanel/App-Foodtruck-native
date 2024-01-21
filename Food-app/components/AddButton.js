import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const AddIButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            {title && <Text style={styles.editPhotoText}>{title}</Text>}
        </TouchableOpacity>
    )
}

export default AddIButton

const styles = StyleSheet.create({
    button: {
        bottom: 1,
        left: 1,
        textAlign: "center",
        backgroundColor: colors.secondary,
        fontFamily: "UrbanistBold",
        borderRadius: 20,
        width: 110,
        height: 35,
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