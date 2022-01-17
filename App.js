import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './screens/StartScreen'
import TomTomMap from './screens/Map'

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="TomTomMap" component={TomTomMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack