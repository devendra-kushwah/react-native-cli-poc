import React from 'react';
import { View, TextInput } from 'react-native';
import style from './style';

const SearchBar = (props) => {
    const { placeholder = "" } = props;
  return (
    <View style={style.view}>
      <TextInput customStyle={style.search} placeholder={placeholder} />
    </View>
  )
}

export default SearchBar;