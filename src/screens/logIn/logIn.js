import React, {useState} from 'react';
import {Text, TextInput, View, TouchableOpacity } from 'react-native';
import {Button} from '../../components/buttons';
import global from '../../assets/styles/global';


// Screen style

import styles from './style';

const LogIn = ({navigation}) => {
  // const navigation = useNavigation();
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
        {/* <Link style={styles.link} to={{screen: 'SignUp'}}>
          Sign up
        </Link> */}

       <TouchableOpacity
            // style={styles.button}
            onPress={() =>
              navigation.push('SignUp', {name : "SignUp"})
            }
          >
            <Text>SignUp sd</Text>
          </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LogIn;
