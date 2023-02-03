import React, { useState } from 'react';
import { ScrollView, View, Image, Dimensions, Text, SafeAreaView } from 'react-native';
import { data } from "./data";
import style from './style';

const { width, height } = Dimensions.get("window");

const ScrollViewSlider = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slide, setSlide] = useState(data)

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
            {/* Slide Items */}
            { slide.map((item)=> {
                  return <Image 
                           resizeMode='stretch'
                           key={item.id}
                           source={{uri: item.url}}
                           style={{height: height * 0.25, width: width}}
                          />
            })}
           </ScrollView>
           {/* Dots */}
           <View style={style.dots}>
                 {slide.map((item, index)=> {
                  return <Text key={item.id} style={activeSlide == index ? style.activeDot : style.dot }>●</Text>
                 })}
           </View>
       </View>
    </SafeAreaView>
  )
}

export default ScrollViewSlider;