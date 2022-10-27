import {TextInput, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const InputText = (props)=> {
    const { 
        icon = "", 
        value = "", 
        style = {}, 
        placeholder = "", 
        label= "",
        onChangeText} = props;
    return(
        <View> 
           {label && 
            <Text>{label}</Text>
           } 
           <View>
           <Icon.Button
             name="facebook"
             backgroundColor="#3b5998"
           >
           </Icon.Button>
            <TextInput 
                style={style}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            </View>
       </View>
    )
}

export default InputText;
