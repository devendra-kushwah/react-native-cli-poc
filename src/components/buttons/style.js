import {StyleSheet} from 'react-native';
import themeprovider from '../../assets/styles/theme';
const {buttonBG, buttonColor} = themeprovider;

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: buttonBG,
    padding: 12,
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
    color: buttonBG,
    textDecorationLine: 'underline',
    fontWeight: "700"
  },
  textStyle: {
    fontSize: 15,
    color: buttonColor,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

});
export default styles;
