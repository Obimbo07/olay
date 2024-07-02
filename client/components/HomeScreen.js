import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const navigation = useNavigation();

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
    <Pressable on onPress={() => handleVmClick(item)}>
      <View style={styles.investmentCard}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.text} >Amount: ${item.amount}</Text>
      </View>
    </Pressable>
  );

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Hello, {users.length > 0 ? users[0].email : 'Loading...'}</Text>
        <Pressable style={styles.profIcon} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={24} color="black" />
        </Pressable>
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

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText} onPress={() => navigation.navigate('AddInvestment')}>Add New Investment</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
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
    backgroundColor: '#0000',
    fontFamily: 'Poppins '
  },
  balanceSection: {
    alignItems: 'left',
    marginTop: 20,
  },
  balanceText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  balanceAmt: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  cardList: {
    display: 'flex',
  },
  investmentCard: {
    backgroundColor: 'black',
    fontFamily: 'Poppins',
    padding: 16,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    width: 170,
  },
  text: {
     fontFamily: 'Poppins',
     fontSize: 15,
     color: 'gold',
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
  profIcon: {
    backgroundColor: 'rgb(255, 215, 0)',
    padding: 5,
    borderColor: 'rgba(0, 0 ,0 ,0.2)',
    borderWidth: 3,
    borderRadius: 20,
  }
});

export default HomeScreen;
