import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import {Button, PlainButton} from '../../components/buttons';
import InputText from "../../components/textInput"
import {flexBox, themeprovider, layoutOne, global, spaces, shadow} from "../../assets/styles";

const { helpTextOne, logo, screenTitle } = global;
const { topView, contentView, mainView } = layoutOne;
const { flex1, centerY, centerX, flexGrow } = flexBox;
const { spaceX, mb_1 } = spaces;
const { cardTopShadow } = shadow;

const LogInView = ({viewProps}) => {
  const {navigation, email, password, setEmail, setPassword} = viewProps;

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={[flex1, mainView]}>
        <View style={[centerX, topView]}>
            <Image style={logo} source={require('../../assets/images/logo.png')} />
        </View>
        <View style={[flex1, spaceX,centerY, contentView, cardTopShadow]}>
          {/* <Text style={screenTitle}>Sign in</Text> */}
          <InputText 
            label="Email"
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
            placeholder="Enter Your Password"
            onChangeText={value => setPassword(value)}
            value={password}
          />
          <Button onPress={()=> navigation.push("Home")} style={spaces.mt_2} title="Sign in" />
          <Text style={[helpTextOne, mb_1]} >
            Forgot password? <PlainButton onPress={() =>
              navigation.push('SignUp')
            } title="Reset" />
          </Text>
          <Text style={helpTextOne} >
          <PlainButton onPress={() =>
              navigation.push('SignUp')
            } title="Create New Accound?" />
          </Text>
        </View>
      </View>
     </ScrollView>
  );
};

export default LogInView;
