import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Button} from '../../components/buttons';
import global from '../../assets/styles/global';
import {Link} from '@react-navigation/native';

// Screen style

import styles from './style';

const LogIn = () => {
  // Global style
  const {container, input} = global;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={container}>
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
        <Link style={styles.link} to={{screen: 'SignUp'}}>
          Sign up
        </Link>
      </Text>
    </View>
  );
};

export default LogIn;
