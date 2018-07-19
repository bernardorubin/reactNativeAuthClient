import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Input from '../Components/Input/Input';
import CustomButton from '../Components/Button/Button';
import TextButton from '../Components/TextButton/TextButton';

type Props = {};
export default class App extends Component<Props> {
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
  render() {
    return <View style={styles.container}>
        <Image source={require("../../assets/images/logo.png")} style={styles.image} />
        <View style={styles.formContainer}>
          <Input placeholder="Username" onChangeText={this.handleChangeUsername} value={this.state.username} />
          <Input placeholder="Password" secureTextEntry onChangeText={this.handleChangePassword} value={this.state.password}/>
        </View>
        <View style={{ alignItems: "center", height: 150, justifyContent: "space-around" }}>
          <CustomButton />
          <TextButton />
        </View>
      </View>;
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