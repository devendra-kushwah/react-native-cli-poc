import {StyleSheet} from 'react-native';
import themeprovider from '../../assets/styles/theme';

const {buttonBG, buttonColor} = themeprovider;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: buttonBG,
    padding: 15,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  plainButton: {
    backgroundColor: 'tranparent',
    padding: 0,
    color: 'red',
    marginTop: 10,
  },
  plainButtonText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  textStyle: {
    fontSize: 15,
    color: buttonColor,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default styles;
