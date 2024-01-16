import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
