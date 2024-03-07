import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as UI from './components/UIComponents.js'

const App = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    id.length == 6 ? 
      (password.length >= 8?
        Alert.alert('Log in success'): Alert.alert('Log in fail', 'Passwords must be at leat 8 characters long.')) 
    : Alert.alert('Log in fail', 'IDs must be 6 characters long.');
  };

  return (
    <TouchableWithoutFeedback onPress = {() => Keyboard.dismiss()}>
      <View style = {styles.mainContainer}>
        <View style = {{marginTop: 200,}}>
          <Text style = {styles.title}>Log in</Text>
        </View>
        <View style = {styles.inputContainer}>
          <UI.LogInInputExpedient onChangeText = {setId} maxLength = {6}/>
          <UI.LogInInputPassword onChangeText = {setPassword} />
          <UI.LogInButton onPress={handleSubmit} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  inputContainer:
  {
    margin: 40,
    alignItems: 'center',
    width: '100%',
  },
  title:
  {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default App;