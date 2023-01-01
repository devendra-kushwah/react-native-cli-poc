import React from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';

import styles from "./style";
import DATA from "./cms";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.badge}>{title}</Text>
  </View>
);

const Categories = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showChevron={true}
      />
    </SafeAreaView>
  );
}



export default Categories;