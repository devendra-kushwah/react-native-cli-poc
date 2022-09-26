import {StyleSheet} from 'react-native';
import themeprovider from './theme';

const {inputBorderColor} = themeprovider;

const global = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  container: {
    padding: 15,
    width: '100%',
    maxWidth: 400,
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 2,
    borderColor: inputBorderColor,
    padding: 12,
    width: '100%',
    marginBottom: 25,
    borderRadius: 5,
  },
});

export default global;
