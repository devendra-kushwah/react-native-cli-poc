import {StyleSheet} from 'react-native';
import themeprovider from '../../assets/styles/theme';
const {inputBorderColor} = themeprovider;

const style = StyleSheet.create({
    inputView: {
        borderWidth: 2,
        borderColor: inputBorderColor,
        width: '100%',
        marginBottom: 15,
        borderRadius: 5,
        flexDirection: "row-reverse",
        padding: 0,
        alignItems: "center",
        backgroundColor: "#fff"
    },
    input: {
        flex: 1,
        paddingLeft: 15
    },
    label : {
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 5,
      color: "#000"
    },

})

export default style;