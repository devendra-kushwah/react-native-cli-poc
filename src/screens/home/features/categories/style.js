import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#00b9ad61', // '#b9f6e2',
      paddingVertical: 7,
      paddingHorizontal: 15,
      marginVertical: 0,
      marginRight: 5,
      borderRadius: 30
    },
    badge: {
      fontSize: 12,
      color: "#000"
    }
  });

  export default styles;