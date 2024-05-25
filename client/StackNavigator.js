import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import SettingsScreen from './components/SettingsScreen';
import ProfileScreen from './components/ProfileScreen';
import SignUpScreen from './components/login_auth/SignUpScreen';
import SignInScreen from './components/login_auth/SignInScreen';
import AddInvestment from './components/Investment/AddInvestment';
import ShowInvestment from './components/Investment/ShowInvestment';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ tabBarVisible: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ title: 'Sign In' }} />
      <Stack.Screen name="AddInvestment" component={AddInvestment} />
      <Stack.Screen name="ShowInvestment" component={ShowInvestment} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
