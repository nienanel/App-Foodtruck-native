import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from '../components/TabBar';

//screens
import FetchFilteredScreen from '../screens/FetchFilteredScreen';
import SearchScreen from '../screens/SearchScreen';
import LogInScreen from '../screens/LogInScreen';
import CartScreen from '../screens/CartScreen';
import RegisterScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="LogIn" >
            <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} /> */}
            <Stack.Screen name="MainTab" component={TabBar} options={{ headerShown: false }} />
            <Stack.Screen name="FetchFilteredScreen" component={FetchFilteredScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Search" component={SearchScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default MainStackNavigator