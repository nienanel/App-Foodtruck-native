import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { selectCartItems, removeFromCart } from '../store/cartSlice'
import { useSelector, useDispatch } from 'react-redux'

const CartScreen = () => {
    const navigation = useNavigation()
    const cartItem = useSelector(selectCartItems)
    const totalQuantity = cartItem.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItem.reduce((total, item) => total + item.totalPrice, 0);
    const dispatch = useDispatch()

    const removeItemFromCart = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <View>
            <Text>CartScreen</Text>
            <FlatList
                data={cartItem}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                        <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <Text>Total Quantity: {totalQuantity}</Text>
            <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
        </View>
    )
}

export default CartScreen