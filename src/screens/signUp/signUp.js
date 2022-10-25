import React, {useState} from 'react';
import {TextInput, View, Text, Image} from 'react-native';

// Custom components
import {Button} from '../../components/buttons';

// style
import flexBox from "../../assets/styles/flexBox";
import layoutOne from "../../assets/styles/layoutOne";
import global from '../../assets/styles/global';
import spaces from '../../assets/styles/spaces';


const {input, helpTextOne, logo} = global;
const {topView, contentView, mainView} = layoutOne;
const {flex1, centerY, centerX} = flexBox;
const {spaceX} = spaces;

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
    <View style={[flex1, mainView]}>
        <View style={[centerX, topView]}>
          <Image style={logo} source={require('../../assets/images/logo.png')} />
      </View>
    <View style={[spaceX,centerY, contentView]}>
      <TextInput
        style={input}
        placeholder="Enter Your Name"
        onChangeText={value => setName(value)}
        value={name}
      />
      <TextInput
        style={input}
        placeholder="Enter Your Email"
        onChangeText={value => setEmail(value)}
        value={email}
      />
      <TextInput
        secureTextEntry
        type="Enter Your password" 
        style={input}
        placeholder="Password"
        onChangeText={value => setPassword(value)}
        value={password}
      />
      <Button onPress={() => submitAction()} title="Sign up" />
      <Text style={[helpTextOne, underLine]} onPress={()=> navigation.push("Login")}> Already have an account </Text>
    </View>
    </View>
  );
};

export default SignUp;
