import { TextInput, StyleSheet } from 'react-native';
import React, { Component } from 'react';

class Input extends Component {
  state = {}
  render() {
    return <TextInput style={styles.textInput} {...this.props} />;
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    height: "8%",
    backgroundColor: "rgb(242,242,242)",
    borderRadius: 30,
    paddingLeft: "3%",
    color: "rgb(188,188,188)",
    fontSize: 18
  }
});

export default Input;