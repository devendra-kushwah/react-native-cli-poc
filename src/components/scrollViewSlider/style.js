import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  dots: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    alignSelf : 'center'
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#999',
    margin: 3,
    borderRadius: 10
  },
  activeDot: {
    backgroundColor: 'red',
  }
})

export default style;