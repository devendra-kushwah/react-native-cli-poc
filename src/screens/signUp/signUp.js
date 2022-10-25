import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Button} from '../../components/buttons';
import global from '../../assets/styles/global';

const SignUp = ({ navigation }) => {
  // Global style
  const {container,centerLayout, input} = global;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  container
  const submitAction = () => {
    setData({
      name,
      email,
      password,
    });
  };

  return (
    <View style={centerLayout}>
      <TextInput
        style={input}
        placeholder="Name"
        onChangeText={value => setName(value)}
        value={name}
      />
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
      <Button onPress={() => submitAction()} title="Sign up" />
    </View>
  );
};

export default SignUp;
