import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ShowInvestment = ({ route }) => {
  const { id, name, amount } = route.params.investment;
  
  return (
    <View>
      <Text>Investment ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Amount: ${amount}</Text>
      <View>
        <TouchableOpacity style={styles.investButton}>
          <Text style={styles.investButtonText}>Invest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  investButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  investButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ShowInvestment;
