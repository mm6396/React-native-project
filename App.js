import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Import the screen components from their files
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ReserveScreen from './src/screens/ReserveScreen';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Feedback" component={FeedbackScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen name="Reserve" component={ReserveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}