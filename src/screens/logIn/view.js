import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

import {Button, PlainButton} from '../../components/buttons';
import {flexBox, layoutOne, global, spaces, shadow} from "../../assets/styles";

const {input, helpTextOne, logo, screenTitle} = global;
const {topView, contentView, mainView} = layoutOne;
const {flex1, centerY, centerX} = flexBox;
const {spaceX} = spaces;
const {cardTopShadow} = shadow;

const LogInView = ({viewProps}) => {
  const {navigation, email, password, setEmail, setPassword} = viewProps;

  return (
    <View style={[flex1, mainView]}>
      <View style={[centerX, topView]}>
          <Image style={logo} source={require('../../assets/images/logo.png')} />
      </View>
      <View style={[spaceX,centerY, contentView, cardTopShadow]}>
        <Text style={screenTitle}>Sign in</Text>
  
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
        Forgot password? <PlainButton onPress={() =>
          navigation.push('SignUp')
        } title="Reset" />
      </Text>
      <Text style={helpTextOne} >
        Don't have an account? <PlainButton onPress={() =>
          navigation.push('SignUp')
        } title="Sign up" />
      </Text>
     
      </View>
     </View>
  );
};

export default LogInView;
