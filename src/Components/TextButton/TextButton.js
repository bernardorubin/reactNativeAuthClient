import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class TextButton extends Component {
  state = {};
  render() {
    return (
      <TouchableOpacity>
        <Text style={styles.textButton}>Create an Account</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    color: 'rgb(174,149,149)',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'rgb(174,149,149)',
  }
});

export default TextButton;