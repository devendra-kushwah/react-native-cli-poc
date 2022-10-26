import {TextInput, Text, Image, View} from "react-native";
import {User} from "@styled-icons/boxicons-regular/User";

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
            <User />
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
