import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloOne = () => {
  return (
    <View>
      <Text style={styles.head}>Hello One Screen</Text>
    </View>
  );
};

export default HelloOne;

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
  },
});
