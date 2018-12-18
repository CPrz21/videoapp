import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default VerticalSeparator = (props) => {
  return(
    <View style={[
      styles.separator,
      {
        borderTopColor : (props.color) ? props.color : '#eaeaea'
      }
      ]}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1
  },
});
