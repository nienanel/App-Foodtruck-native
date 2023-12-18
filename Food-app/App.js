import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from './navigation/NavigationContext';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './store/store';

//screens
import HomeScreen from './screens/HomeScreen';
import FetchFilteredScreen from './screens/FetchFilteredScreen';
import SearchScreen from './screens/SearchScreen';
import LogInScreen from './screens/LogInScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontLoaded] = useFonts({
    UrbanistBold: require("./assets/fonts/Urbanist-Bold.ttf"),
    UrbanistMedium: require("./assets/fonts/Urbanist-Medium.ttf")
  })

  const handleOnLayout = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  },[fontLoaded])

  if (!fontLoaded) {
    return null
  }

  return (
      <View style={styles.container} onLayout={handleOnLayout}>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Provider store={store}>
          <NavigationProvider>
            <Stack.Navigator initialRouteName="LogIn" >
              <Stack.Screen name="LogIn" component={LogInScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerTintColor: "black" }}  />
              <Stack.Screen name="FetchFilteredScreen" component={FetchFilteredScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
          </NavigationProvider>
        </Provider>
      </NavigationContainer >  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})