import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Button} from '../../components/buttons';

import global from '../../assets/styles/global';


// Screen style
import styles from './style';

const LogIn = ({navigation}) => {

  const {centerLayout, input} = global;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={centerLayout}>
      <TextInput
        style={input}
        placeholder="Email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={input}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button title="Log in" />
      <Text style={styles.helpText}>
        If you don't have account please{' '}
       <TouchableOpacity
            // style={styles.button}
            onPress={() =>
              navigation.push('SignUp', {name : "SignUp"})
            }
          >
            <Text>Signup</Text>
          </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LogIn;
