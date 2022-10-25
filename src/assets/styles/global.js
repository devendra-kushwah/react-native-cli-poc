import {StyleSheet} from 'react-native';
import themeprovider from './theme';

const {inputBorderColor} = themeprovider;

const global = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: inputBorderColor,
    padding: 12,
    width: '100%',
    marginBottom: 25,
    borderRadius: 5,
  },
  centerLayout: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  helpTextOne: {
    color: '#999',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: "700"
  },
});

export default global;
