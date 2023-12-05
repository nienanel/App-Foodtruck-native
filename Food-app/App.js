import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationProvider } from './navigation/NavigationContext';


//screens
import HomeScreen from './screens/HomeScreen';
import ListDetailScreen from './screens/ListDetailScreen';
import ListScreen from './screens/ListScreen';
import LogInScreen from './screens/LogInScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  // const navigationRef = useRef();

  return (
    <NavigationContainer>
      <NavigationProvider>
        <Stack.Navigator initialRouteName="LogIn">
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen name="ListDetail" component={ListDetailScreen} />
        </Stack.Navigator>
      </NavigationProvider>
    </NavigationContainer >
  );
};

