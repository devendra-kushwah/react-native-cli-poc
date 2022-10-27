import React from 'react';
import {TextInput, View, Text, Image} from 'react-native';

import {Button, PlainButton} from '../../components/buttons';
import InputText from "../../components/textInput"
import {flexBox, themeprovider, layoutOne, global, spaces, shadow} from "../../assets/styles";

const {input, helpTextOne, logo, screenTitle} = global;
const {topView, contentView, mainView} = layoutOne;
const {flex1, centerY, centerX} = flexBox;
const {spaceX, mb_1} = spaces;
const {cardTopShadow} = shadow;

const SignUpView = ({viewProps }) => {
 const {
   navigation,
   name,
   email,
   password,
   setName,
   setEmail,
   setPassword,
   submitAction
} = viewProps;

  return (
    <View style={[flex1, mainView]}>
        <View style={[centerX, topView]}>
          <Image style={logo} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={[spaceX,centerY, contentView, cardTopShadow]}>
          {/* <Text style={screenTitle}> Sign up</Text> */}
          <InputText
            label="Name"
            style={input}
            placeholder="Enter Your Name"
            onChangeText={value => setName(value)}
            value={name}
          />
          <InputText
            label="Email"
            style={input}
            placeholder="Enter Your Email"
            onChangeText={value => setEmail(value)}
            value={email}
          />
          <InputText
            customStyle={mb_1}
            label="Password"
            iconName="eye"
            secure
            iconColor={themeprovider.buttonBG}
            style={input}
            placeholder="Password"
            onChangeText={value => setPassword(value)}
            value={password}
          />
          <Button onPress={() => submitAction()} title="Sign up" />
          <Text style={helpTextOne}>
            Already have an account
              <PlainButton onPress={()=> navigation.push("Login")} title=" Sign in" />
          </Text>
        </View>
    </View>
  );
};

export default SignUpView;
