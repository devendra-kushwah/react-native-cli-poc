import {TextInput, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import style from "./style";

const InputText = (props)=> {
    const { 
        customStyle={},
        secure= false,
        iconName = "",
        iconColor= "#666", 
        buttonBg = "transparent",
        value = "", 
        placeholder = "Add placeholder", 
        label= "",
        onChangeText} = props;
    return(
        <View style={customStyle}> 
           {label && 
            <Text style={style.label}>{label}</Text>
           } 
           <View style={style.inputView}>
            { iconName && 
               <Icon.Button
                size={20}
                name={iconName}
                color={iconColor}
                backgroundColor={buttonBg}
                />
            }
            <TextInput
                secureTextEntry={secure}
                style={style.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            </View>
       </View>
    )
}

export default InputText;
