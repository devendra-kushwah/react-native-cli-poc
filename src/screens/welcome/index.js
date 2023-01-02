import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';

import { Button } from '../../components/buttons';
import { flexBox, layoutOne, global, spaces, shadow } from "../../assets/styles";

const { logo, screenTitle } = global;
const { topView, contentView, mainView } = layoutOne;
const { flex1, centerY, centerX, flexGrow } = flexBox;
const { spaceX, mb_1 } = spaces;
const { cardTopShadow } = shadow;

const Welcome = (props) => {
    const { navigation } = props;

    return (

        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "#edf6ff" }}>
                <View style={[centerX, topView]}>
                    <Image style={logo} source={require('../../assets/images/logo.png')} />
                </View>
                <View style={[flex1, spaceX, centerY, contentView, cardTopShadow]}>
                    <Text style={[screenTitle, { textAlign: "center" }]}>Welcome Screen</Text>
                    <Button onPress={() => navigation.push("Home")} style={spaces.mt_2} title="Home" />
                </View>
     
        </ScrollView>
    );
};

export default Welcome;
