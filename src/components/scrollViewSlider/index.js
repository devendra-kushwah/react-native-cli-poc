import React, { useState } from 'react';
import { ScrollView, View, Image, Dimensions, Text, SafeAreaView } from 'react-native';
import { data } from "./data";
import style from './style';

const { width, height } = Dimensions.get("window");

const ScrollViewSlider = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideOnChange = (event)=> {
     if(event){
      const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
      if(slide != activeSlide){
        setActiveSlide(slide);
      }
     }
  }

  return (
    <SafeAreaView style={style.container}>
       <View style={{height: height * 0.25, width: width,  borderRadius: 10}}>
           <ScrollView
             onScroll={(nativeEvent)=> slideOnChange(nativeEvent)}
             showsHorizontalScrollIndicator={false}
             pagingEnabled
             horizontal
             style={{height: height * 0.25, width: width,  borderRadius: 10}}
           >
            { data.map((item)=> {
                  return <Image 
                           resizeMode='stretch'
                           key={item.id}
                           source={{uri: item.url}}
                           style={{height: height * 0.25, width: width}}
                          />
            })}
           </ScrollView>
           <View style={style.dots}>
                 {data.map((item, index)=> {
                  console.log("🚀 ~ file: index.js:10 ~ ScrollViewSlider ~ activeSlide", activeSlide)

                  console.log("🚀 ~ file: index.js:43 ~ {data.map ~ index", index)
                  // return <Text key={item.id} style={activeSlide !== index ? style.activeDot: style.dot }></Text>
                  return <Text key={item.id} style={style.dot }></Text>
                 })}
           </View>
       </View>
    </SafeAreaView>
  )
}

export default ScrollViewSlider;