import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './store/store';
import CartInitializer from './initialization/CartInitializer';
import MainStackNavigator from './navigation/MainStackNavigator';
import FontLoader from './initialization/FontLoader';


export default function App() {
  SplashScreen.preventAutoHideAsync();

  SplashScreen.hideAsync();

  return (
    <Provider store={store}>
      <CartInitializer>
        <FontLoader>
        <NavigationContainer>
            <StatusBar style="auto" />
            <MainStackNavigator />
        </NavigationContainer>
        </FontLoader>
      </CartInitializer>
    </Provider>
  );
};

