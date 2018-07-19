import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';

class CreateAccount extends Component {
  state = {};
  render() {
    const { container, signUpForm } = styles;
    return (
      <View style={container}>
        <View style={signUpForm}>
          <Input placeholder="Email"/>
          <Input placeholder="Username"/>
          <Input placeholder="Password"/>
        </View>
        <CustomButton text="Sign Up"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  signUpForm: {
    height: 225,
    justifyContent: 'space-around',
  }
});

export default CreateAccount;