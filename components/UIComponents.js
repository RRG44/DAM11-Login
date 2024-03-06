import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const LogInButton = props => {
  return (
    <>
      <TouchableOpacity onPress={props.onPress} style = {styles.btnLogIn}>
        <Text style = {styles.btnLogInText}>LogIn</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  btnLogIn: 
  {
    backgroundColor: 'blue'
  },
  btnLogInText:
  {
    color: 'white',
  },
});