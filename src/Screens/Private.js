import { View, Text, TouchableOpacity, StyleSheet, AsyncStorage } from 'react-native';
import startAuth from './startAuthScreen';
import React, { Component } from 'react';

//shortcut ccs
class PrivateScreen extends Component {
  state = {};
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
        <Text>This is a Private View</Text>
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
  },
  buttonContainer: {
    height: '8%',
    width: '90%',
    backgroundColor: 'orange',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  }
})

export default PrivateScreen;