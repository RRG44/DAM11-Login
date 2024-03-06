import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { LogInButton } from './components/UIComponents.js'

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    expediente.length == 6 ? 
      (password.length == 8?
        Alert.alert('LogIn exitoso'): Alert.alert('LogIn fallido', 'La constraseña debe tener al menos 8 caracteres.')) 
    : Alert.alert('LogIn fallido', 'El expediente debe tener 6 caracteres.');
  };

  return (
    <View style = {styles.mainContainer}>
      <View>
        <Text>LogIn</Text>
      </View>
      <View>
        <TextInput
          placeholder='Expediente'
          value={expediente}
          keyboardType='numeric'
          maxLength={6}
          multiline={false}
          onChangeText={(text) => setExpediente(text)}
        />
        <TextInput
          placeholder='Password'
          multiline={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <LogInButton onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
