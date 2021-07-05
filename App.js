import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

import tabs from './navigation/tabs'

import {Home, PlantDetail} from './screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Home" component={tabs} />
        <Stack.Screen name="PlantDetail" component={PlantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

