import React from 'react';
import { Text, View, Image } from 'react-native';
import SearchBar from "../../components/searchBar";
import InputText from "../../components/textInput"
import {flexBox, themeprovider, layoutOne, global, spaces, shadow} from "../../assets/styles";

const {topView, contentView, mainView} = layoutOne;
const {flex1, centerY } = flexBox;
const {spaceX, mb_1} = spaces;
const {cardTopShadow} = shadow;
import style from "./style";

const HomeView = ({viewProps}) => {

  const {navigation, email, setEmail, } = viewProps;

  return (
    <View style={[flex1, mainView]}>
      <View style={[ style.view]}>
         <SearchBar placeholder="Search for service" />
          {/* <Image style={logo} source={require('../../assets/images/logo.png')} /> */}
      </View>
      <View style={[spaceX,centerY, contentView, cardTopShadow]}>
        {/* <Text style={screenTitle}>Sign in</Text> */}
        <InputText 
          label="Email"
          placeholder="Enter Your Email"
          onChangeText={value => setEmail(value)}
          value={email}
        />
   
      </View>
     </View>
  );
};

export default HomeView;
