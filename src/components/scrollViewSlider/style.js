import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  dots: {
    // position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignSelf : 'center'
  },
  dot: {
    margin: 3,
    color: '#999'
  },
  activeDot: {
    color: '#000',
    margin: 3
  }
})

export default style;