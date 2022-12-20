import React, { useState, useRef } from 'react';
import { Text, View, Image, ScrollView, StyleSheet, DrawerLayoutAndroid } from 'react-native';
import SearchBar from "../../components/searchBar";
import { flexBox, themeprovider, layoutOne, global, spaces, shadow } from "../../assets/styles";
import {Button} from "../../components";
const { topView, contentView, mainView } = layoutOne;
const { flex1, centerY } = flexBox;
const { spaceX, mb_1 } = spaces;
const { cardTopShadow } = shadow;
import style from "./style";

const HomeView = ({ viewProps }) => {

  const { navigation } = viewProps;

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <ScrollView style={style.view}>
      <Button
          style={{marginBottom: 10}}
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      <View>
        <SearchBar placeholder="Search for service" />
        {/* <Image style={logo} source={require('../../assets/images/logo.png')} /> */}
      </View>
      <View>
  
      </View>
    </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default HomeView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});
