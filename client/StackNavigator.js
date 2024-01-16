import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ tabBarVisible: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
