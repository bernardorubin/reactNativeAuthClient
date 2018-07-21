import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import startAuth from './startAuthScreen';
import React, { Component } from 'react';

//shortcut ccs
class PrivateScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  }
  handleLogout = () => {
    AsyncStorage.removeItem('x-auth').then(() => {
      return startAuth();
    }).catch(() => {
      return startAuth();
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Private View</Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={this.handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgb(255,82,76)',
  },
  buttonContainer: {
    height: '8%',
    width: '90%',
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 34,
    color: 'white',
  },
  message: {
    color: 'white',
    fontSize: 43,
    marginBottom: '20%',
    marginTop: '15%',
  }
})

export default PrivateScreen;