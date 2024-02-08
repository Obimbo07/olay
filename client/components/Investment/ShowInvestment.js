import React from 'react';
import { View, Text } from 'react-native';

const ShowInvestment = ({ route }) => {
  const { id, name, amount } = route.params.investment;
  
  return (
    <View>
      <Text>Investment ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Amount: ${amount}</Text>
    </View>
  );
};

export default ShowInvestment;
