import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '../components/TabBar';

//screens
import FetchFilteredScreen from '../screens/FetchFilteredScreen';
import SearchScreen from '../screens/SearchScreen';
import LogInScreen from '../screens/LogInScreen';
import CartScreen from '../screens/CartScreen';
import RegisterScreen from '../screens/RegistrationScreen';
import UserScreen from '../screens/UserScreen';
import ImageSelectorScreen from '../components/ImageSelector';
import LocationSelector from '../components/LocationSelector';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LogIn" >
            <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainTab" component={TabBar} options={{ headerShown: false }} />
            <Stack.Screen name="FetchFilteredScreen" component={FetchFilteredScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="ImageSelector" component={ImageSelectorScreen} options={{ headerShown: false }} />
            <Stack.Screen name="LocationSelector" component={LocationSelector} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator