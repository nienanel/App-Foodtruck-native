import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';

export const GoBackArrow = () => {
    const navigation = useNavigation()

    return <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()} style={styles.icon} />
};

const styles = {
    icon: {
        position: 'absolute',
        left: 2,
        top: 16,
        backgroundColor: colors.terciary,
        borderRadius: 50,
        padding: 10,
        zIndex: 50,
        marginTop: 10
    },
}