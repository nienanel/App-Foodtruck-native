import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from './navigation/NavigationContext';
import { Provider } from 'react-redux';

import {store} from './store/store';

//screens
import HomeScreen from './screens/HomeScreen';
import FetchFilteredScreen from './screens/FetchFilteredScreen';
import SearchScreen from './screens/SearchScreen';
import LogInScreen from './screens/LogInScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
      <NavigationProvider>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FetchFilteredScreen" component={FetchFilteredScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationProvider>
      </Provider>
    </NavigationContainer >
  );
};

