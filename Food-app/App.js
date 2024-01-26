import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import { store } from './store/store';
import CartInitializer from './initialization/CartInitializer';
import AppInitialization from './initialization/AppInitialization';
import FontLoader from './initialization/FontLoader';
import { init } from './db';

init()
  .then(() => {
    console.log('Database initialized');
  })
  .catch(err => {
    console.error('Error initializing database:', err);
  })


export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      try {
        await SplashScreen.preventAutoHideAsync();

        await init();
        console.log('Database initialized');

        setIsAppReady(true);
      } catch (err) {
        console.error('Error initializing database:', err);
      }
    }

    prepareApp();
  }, []);

  useEffect(() => {
    if (isAppReady) {
      SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <Provider store={store}>
      <CartInitializer>
        <FontLoader>
          <NavigationContainer>
            <StatusBar style="auto" />
            <AppInitialization />
          </NavigationContainer>
        </FontLoader>
      </CartInitializer>
    </Provider>
  );
};

