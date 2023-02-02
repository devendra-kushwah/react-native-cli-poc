import React, { useRef } from 'react';
import { FlatList, View, TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { data } from "./data";
import style from './style';

const { width, height } = Dimensions.get("window");

const FlatListSlider = (props) => {

  const {title= "", promo= "", url= {}} = props; 
   let flatListRef = useRef(<FlatList props={props} />);

  const renderItem = ({ item })=> {
      return(
        <TouchableOpacity onPress={()=> console.log("clicked")}>
          <Image source={{uri: item.url}} style={style.image} />
          <Text>{item.title}</Text>
        </TouchableOpacity>
      )
  }

  return (
    <View style={style.container}>
      <FlatList 
        data={data}
        activeOpacity={1}
        renderItem={renderItem}
        keyExtractor={(item, index)=> index.toString()}
        showsHorizontalScrollIndicator={false}
        ref={(ref)=> {
          flatListRef.current = ref
        }}
        style={style.slides}
      />
    </View>
  )
}

export default FlatListSlider;