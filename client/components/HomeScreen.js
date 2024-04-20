import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/userSlice';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch])

  const balance = 5000;
  const activeInvestments = [
    { id: '1', name: 'Tech Company', amount: 1000 },
    { id: '2', name: 'Renewable Energy', amount: 1500 },
    { id: '3', name: 'western Kid Trift', amount: 2000 },
    { id: '4', name: 'Tech Company', amount: 1000 },
    { id: '5', name: 'Renewable Energy', amount: 1500 },
    { id: '6', name: 'western Kid Trift', amount: 2000 },
  ];

  const handleVmClick = (investment) => {
    navigation.navigate('ShowInvestment', { investment });
  }

  
  const renderInvestmentCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleVmClick(item)}>
      <View style={styles.investmentCard}>
        <Text>{item.name}</Text>
        <Text>Amount: ${item.amount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, {users.length > 0 ? users[0].email : 'Loading...'}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>


      <View style={styles.balanceSection}>
        <Text style={styles.balanceText}>Balance: </Text>
        <Text style={styles.balanceAmt}> $ {balance} </Text>
      </View>

      <Text>Below are your active Vm Investments</Text>

      <FlatList 
        style={styles.cardList}
        data={activeInvestments}
        keyExtractor={(item) => item.id}
        renderItem={renderInvestmentCard}
        numColumns={2}
      />

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText} onPress={() => navigation.navigate('AddInvestment')}>Add New Investment</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  headerTitle: {
    fontSize: 24,
    color: '#0000',
    fontWeight: 'bold',
  },
  balanceSection: {
    alignItems: 'left',
    marginTop: 20,
  },
  balanceText: {
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: 'bold',
  },
  balanceAmt: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cardList: {
    display: 'flex',
  },
  investmentCard: {
    backgroundColor: '#e1e1e1',
    padding: 16,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    width: 170,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
