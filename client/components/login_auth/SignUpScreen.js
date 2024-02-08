import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstname] = useState('');
  const [secondName, setSecondname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, secondName, phoneNumber, email, pin}),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data.message);
        navigation.navigate('Home');
      } else {
        console.error(data.errors);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstname}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Second Name"
        value={secondName}
        onChangeText={setSecondname}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Enter pin number"
        value={pin}
        onChangeText={setPin}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 5 }}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
