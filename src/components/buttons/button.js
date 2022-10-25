import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';

const Button = ({onPress, title, isDisabled = false}) => (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );


export default Button;
