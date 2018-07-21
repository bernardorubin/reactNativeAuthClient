import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import validator from 'validator';
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
  handleRegister = () => {
    const { email, password, username } = this.state;
    if (validator.isEmail(email) && username.trim() && password.trim()) {
      // since we are running 2 localhost servers we use the ip address instead of localhost so it wont fail
      axios.post('http://192.168.1.64:3000/user/register', {
        email,
        password,
        username,
      }).then(res => {
        if(res.status == 201) {
          this.props.navigator.pop();
        }
      }).catch((err) => {
        alert(err)
      })
    } else {
      alert('You made an error');
    }
  }
  render() {
    const { container, signUpForm } = styles;
    return (
      <View style={container}>
        <View style={signUpForm}>
          <Input placeholder="Email" value={this.state.email} onChangeText={this.handleEmailChange}/>
          <Input placeholder="Username" value={this.state.username} onChangeText={this.handleUsernameChange}/>
          <Input placeholder="Password" value={this.state.password} onChangeText={this.handlePasswordChange} secureTextEntry/>
        </View>
        <CustomButton text="Sign Up" onPress={this.handleRegister}/>
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