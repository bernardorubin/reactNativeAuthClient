import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';
import startPrivate from './StartPrivateScreen';
import axios from 'axios';

export default class App extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }
  state = {
    username: '',
    password: '',
  }
  handleChangeUsername = text => {
    // this.setState({ username: text });
    this.setState(() => {
      return { username: text }
    }, () => {
      //setstate is asynchronous, it can receive this callback
      console.log(this.state.username)
    })
  }
  handleChangePassword = text => {
    this.setState(() => {
      return { password: text }
    })
  }
  handlePushScreen = () => {
    this.props.navigator.push({
      screen: 'client.CreateAccount',
      title: 'Sign Up',
    });
  }
  handleLogin = () => {
    const { username, password } = this.state;
    if (username && password) {
      axios.post('http://192.168.1.64:3000/user/login', {
        username,
        password
      }).then((res) => {
        startPrivate();
      }).catch(err => {
        alert(`Wrong Username or password, here's your error -> ${err}` );
      })
    } else {
      alert('Both username and password fields are required');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.image} />
        <View style={styles.formContainer}>
          <Input placeholder='Username' onChangeText={this.handleChangeUsername} value={this.state.username} />
          <Input placeholder='Password' secureTextEntry onChangeText={this.handleChangePassword} value={this.state.password}/>
        </View>
        <View style={{ alignItems: 'center', height: 150, justifyContent: 'space-around' }}>
          <CustomButton text="Sign In" onPress={this.handleLogin}/>
          <TextButton onPress={this.handlePushScreen} text='Sign Up'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  },
  formContainer: {
    height: 150,
    justifyContent: 'space-around',
  },
  image: {
    height: 100,
    width: 100,
    marginTop: '35%',
    marginBottom: '25%',
  }
});