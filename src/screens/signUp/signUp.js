import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';

// Custom components
import {Button} from '../../components/buttons';
// style
import global from '../../assets/styles/global';

const SignUp = ({ navigation }) => {
  // Global style
  const {centerLayout, input, underLine, helpTextOne} = global;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  
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
        type="password"
        style={input}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button onPress={() => submitAction()} title="Sign up" />
      <Text style={[helpTextOne, underLine]} onPress={()=> navigation.push("Login")}> Already have an account </Text>
    </View>
  );
};

export default SignUp;
