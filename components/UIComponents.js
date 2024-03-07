import React from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, useState } from 'react-native';

export const LogInButton = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style = {styles.btnLogIn}>
        <Text style = {styles.btnLogInText}>Log in</Text>
      </TouchableOpacity>
    </>
  );
};

export const LogInInputExpedient = props => {
  inputState = props.inputState;
  return (
    <TextInput
      placeholder='ID'
      multiline={false}
      keyboardType='numeric'
      maxLength={props.maxLength ? props.maxLength: 524288}
      onChangeText={(text) => props.onChangeText(text)}
      style = {styles.txtInput}
    />
  );
};

export const LogInInputPassword = props => {
  return (
    <TextInput
      placeholder='Password'
      multiline={false}
      keyboardType='default'
      maxLength={props.maxLength ? props.maxLength: 524288}
      secureTextEntry={true}
      onChangeText={(text) => props.onChangeText(text)}
      style = {styles.txtInput}
    />
  );
};

const styles = StyleSheet.create({
  btnLogIn: 
  {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 60,
  },
  btnLogInText:
  {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  txtInput:
  {
    padding: 10,
    margin: 15,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'left',
    borderColor: '#aaa',
    width: 300,
    height: 60,
    fontSize: 16,
  },
});