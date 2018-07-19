import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Validator from 'validator';
import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';

class CreateAccount extends Component {
  state = {
    email: '',
    password: '',
    username: '',
  };
  handleEmailChange = email => this.setState({ email });
  handleUsernameChange = username => this.setState({ username });
  handlePasswordChange = password => this.setState({ password });
  render() {
    const { container, signUpForm } = styles;
    return (
      <View style={container}>
        <View style={signUpForm}>
          <Input placeholder="Email" value={this.state.email} onChangeText={this.handleEmailChange}/>
          <Input placeholder="Username" value={this.state.username} onChangeText={this.handleUsernameChange}/>
          <Input placeholder="Password" value={this.state.password} onChangeText={this.handlePasswordChange}/>
        </View>
        <CustomButton text="Sign Up" />
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