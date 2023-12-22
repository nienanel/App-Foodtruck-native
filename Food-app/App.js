import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from './navigation/NavigationContext';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './store/store';
import CartInitializer from './initialization/CartInitializer';

//screens
import HomeScreen from './screens/HomeScreen';
import FetchFilteredScreen from './screens/FetchFilteredScreen';
import SearchScreen from './screens/SearchScreen';
import LogInScreen from './screens/LogInScreen';
import CartScreen from './screens/CartScreen';
import RegisterScreen from './screens/RegistrationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontLoaded] = useFonts({
    UrbanistBold: require("./assets/fonts/Urbanist-Bold.ttf"),
    UrbanistMedium: require("./assets/fonts/Urbanist-Medium.ttf")
  })

const [fontsLoaded] = useFonts({
  UrbanistBold: require("./assets/fonts/Urbanist-Bold.ttf"),
  UrbanistMedium: require("./assets/fonts/Urbanist-Medium.ttf")
})

if (!fontLoaded || !fontsLoaded) {
  return null;
}

SplashScreen.hideAsync();

  return (
    <Provider store={store}>
      <CartInitializer>
        <NavigationContainer>
          <NavigationProvider>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="LogIn" >
              <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="FetchFilteredScreen" component={FetchFilteredScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
            
          </NavigationProvider>
        </NavigationContainer>
      </CartInitializer>
    </Provider>
  );
};

