import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handlePress = (value) => {
    if (pin.length < 4) {
      setPin(pin + value);
    }
  };

  const handleClear = () => {
    setPin('');
  };

  const handleSignIn = () => {
    // Implement your sign in logic here
    console.log('Signing in with PIN:', pin);
    // Assuming successful sign in, navigate to HomeScreen
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter PIN</Text>
      <View style={styles.pinContainer}>
        <Text style={styles.pin}>{pin}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {[1, 2, 3].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.button}
              onPress={() => handlePress(num)}
            >
              <Text style={styles.buttonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[4, 5, 6].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.button}
              onPress={() => handlePress(num)}
            >
              <Text style={styles.buttonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          {[7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.button}
              onPress={() => handlePress(num)}
            >
              <Text style={styles.buttonText}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => handlePress(0)}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClear}>
            <Text style={[styles.buttonText, { color: 'red' }]}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.signInButtonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  pin: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
    borderRadius: 10,
    borderColor: 'yellow',
    borderWidth: 2
  },
  zeroButton: {
    width: 170,
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  buttonText: {
    fontSize: 24,
  },
  signInButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
    borderRadius: 10,
    marginTop: 20,
  },
  signInButtonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default SignInScreen;
