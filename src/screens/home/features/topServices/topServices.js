import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

import styles from "./style";
import DATA from "./cms";

const colors= [
  "#f3eff8",
  "#fefaf1",
  "#f0f4ff",
  "#f1fcfe",
  "#fdf2f2",
  "#fefde1",
  "#fcf1ea",
  "#fefde1",
  "#e9fef7",
  "#fef5ea",
  "#f1fcfe",
  "#fcebef"
]

const Item = ({ title, index }) => (
  <View style={[ styles.item, { backgroundColor: colors[index % colors.length] }]}>
    <Text style={styles.badge}>{title}</Text>
  </View>
);

const TopServices = () => {

  const renderItem = ({ item, index }) => (
    <Item index={index} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns="3"
      />
    </SafeAreaView>
  );
}



export default TopServices;