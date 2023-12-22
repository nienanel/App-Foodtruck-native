import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';

const PopUpCart = () => {
    const navigation = useNavigation();
    const { totalQuantity, totalPrice } = useSelector(state => state.cart);

    return (
        <View style={styles.popContainer}>
            <TouchableOpacity style={styles.popContent} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.textLenght}>{totalQuantity}</Text>
                <Text className="font-bold text-black text-lg">{totalQuantity > 1 ? 'Items' : 'Item'}</Text>
                <Text style={styles.textTotal} >{`$${(totalPrice || 0).toFixed(2)}`}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    popContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        zIndex: 50,
    },
    textLenght: {
        backgroundColor: colors.black,
        color: 'white',
        padding: 5,
        borderRadius: 5,
        fontSize: 15,
        width: 30,
        textAlign: 'center',
    },
    textTotal: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
        width: 60,
        padding: 1,
    },
    popContent: {
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 5,
    }
})

export default PopUpCart

