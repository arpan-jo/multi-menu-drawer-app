import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HelloTwo = () => {
  return (
    <View>
      <Text style={styles.head}>Hello Two Screen</Text>
    </View>
  );
};

export default HelloTwo;

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
  },
});
