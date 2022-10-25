import React, {useState} from 'react';
import {Text, TextInput, View } from 'react-native';

// Custom components
import {Button} from '../../components/buttons';

// style
import global from '../../assets/styles/global';

const LogIn = ({navigation}) => {

  const {centerLayout, input, underLine, helpTextOne} = global;

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
      <Text style={[helpTextOne, underLine]} 
         onPress={() =>
          navigation.push('SignUp')
        }
      >
        Don't have an account ?
      </Text>
    </View>
  );
};

export default LogIn;
