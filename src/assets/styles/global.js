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
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 25,
    borderRadius: 5,
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
  logoView: {
    backgroundColor: "#edf7ffe0"
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  screenTitle: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 40,
    color: "#000",
  }
});

export default global;
