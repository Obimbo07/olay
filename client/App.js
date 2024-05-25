import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import StackNavigator from './StackNavigator';
import LoadingSpinner from './components/Loading';
const myInitialState = {

}
const App = () => {
  return (
    
      <NavigationContainer>
      <Provider initalState={myInitialState} loading={<LoadingSpinner />}>
        <StackNavigator />
      </Provider>
      </NavigationContainer>
  );
};

export default App;
