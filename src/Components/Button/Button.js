import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';

const { width, height } = Dimensions.get("screen");

class CustomButton extends Component {
  state = { };
  render() {
    return (
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: 'rgb(255,82,76)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  }
})

export default CustomButton;