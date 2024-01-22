import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { colors } from '../constants/colors';
import { AntDesign } from "@expo/vector-icons"
import CartIcon from './CartIcon';
import { useSelector } from 'react-redux';
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createMaterialBottomTabNavigator()

const TabBar = () => {
    const userName = useSelector(state => state.auth.user?.name) || 'User';

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            }}
            activeColor='#f9a825'
            inactiveColor='black'
            barStyle={{
                backgroundColor: colors.secondary,
                height: 70,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <AntDesign name="home" size={25} color={color} /> }} />
            <Tab.Screen name="Cart" component={CartScreen} options={{ tabBarIcon: ({ color }) => <CartIcon color={color} size={25} /> }} />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={25} color={color} />,
                    tabBarLabel: userName
                }} />
        </Tab.Navigator>
    )
}

export default TabBar