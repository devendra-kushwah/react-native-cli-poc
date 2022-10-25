import {StyleSheet} from 'react-native';

const layoutOne = StyleSheet.create({
    mainView: {
        backgroundColor: "#edf6ff",
    },
    topView: {
        paddingVertical: 30,
        maxHeight: 164
      },
    contentView: {
        backgroundColor: "#fff",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
    }
})
export default layoutOne;