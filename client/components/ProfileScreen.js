import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';



const ProfileScreen = () => {

  const activeInvestments = [
    { id: '1', name: 'Tech Company', amount: 1000 },
    { id: '2', name: 'Renewable Energy', amount: 1500 },
    { id: '3', name: 'western Kid Trift', amount: 2000 },
    { id: '4', name: 'Tech Company', amount: 1000 },
    { id: '5', name: 'Renewable Energy', amount: 1500 },
    { id: '6', name: 'western Kid Trift', amount: 2000 },
  ];

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
      <View style={styles.profileHeader}>
        <View style={styles.profileText}>
          <Text>Hi Austin 👋</Text>
          <Text>Some text</Text>
          <Text>DOB: 12/11/2002</Text>

        </View>
        <TouchableOpacity style={styles.imageView}>
          <View>
            {/* <Image source={require('../assets/img.jpg')} style={styles.profileImage} /> */}
          </View>
        </TouchableOpacity>
      </View>
      <View>
      <View style={styles.transactBtns}>
           <TouchableOpacity style={styles.btns}>
            <Text style={styles.addButtonText} onPress={() => navigation.navigate('Withdraw')}>Withdraw</Text>
           </TouchableOpacity>

           <TouchableOpacity style={styles.btns}>
            <Text style={styles.addButtonText} onPress={() => navigation.navigate('Deposit')}>Deposit</Text>
           </TouchableOpacity>
      </View>
      </View>
      <View style={styles.investmentsContainer}>
       <Text>Here are your active Vm machines</Text>
       <FlatList 
        style={styles.cardList}
        data={activeInvestments}
        keyExtractor={(item) => item.id}
        renderItem={renderInvestmentCard}
        numColumns={2}
      />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  profileHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 2.5)',
    marginTop: 1,
    padding: 5,
  },
  profileText: {
    fontFamily: 'serif',
    fontSize: 12,
    fontWeight: '600',
  },
  profileImage: {
    height: '20em',
    width: 'auto',
  },
  imageView: {
    width: 100,
    height: 100, 
  },
  transactBtns:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    marginTop: 10,
    gap: 90,
    padding: 10,
  },
  btns: {
    backgroundColor: 'black',
    color: 'white',
    padding: 10,
  },
  addButtonText:{
    color: 'white',
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
  investmentsContainer: {
    padding: 10,
  }
});

export default ProfileScreen;
