import {TouchableOpacity, Text} from 'react-native';

import styles from './style';

const PlainButton = ({onPress, title, isDisabled = false}) => (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={styles.plainButton}>
      <Text style={styles.plainButtonText}>{title}</Text>
    </TouchableOpacity>
  );


export default PlainButton;
