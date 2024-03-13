import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';
import StackNavigator from './StackNavigator';

const App = () => {
  return (
    
      <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
      </NavigationContainer>
  );
};

export default App;
