import React, {useState} from 'react';
import {Text, TextInput, View, Image } from 'react-native';

// Custom components
import {Button, PlainButton} from '../../components/buttons';

// style
import flexBox from "../../assets/styles/flexBox";
import layoutOne from "../../assets/styles/layoutOne";
import global from '../../assets/styles/global';
import spaces from '../../assets/styles/spaces';

const {input, helpTextOne, logo} = global;
const {topView, contentView, mainView} = layoutOne;
const {flex1, centerY, centerX} = flexBox;
const {spaceX} = spaces;

const LogIn = ({navigation}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[flex1, mainView]}>
      <View style={[centerX, topView]}>
          <Image style={logo} source={require('../../assets/images/logo.png')} />
      </View>
      <View style={[spaceX,centerY, contentView]}>
      <TextInput
        style={input}
        placeholder="Enter Your Email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        secureTextEntry
        style={input}
        placeholder="Enter Your Password"
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button title="Sign in" />
      <Text style={helpTextOne} >
        Don't have an account? <PlainButton onPress={() =>
          navigation.push('SignUp')
        } title="Sign up" />
      </Text>
      </View>
    </View>
  );
};

export default LogIn;
