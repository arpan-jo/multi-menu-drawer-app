import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import CustomHeader from '../navigators/custom-header';

const Home = () => {
  return (
    <View>
      <Text style={styles.head}>Hello Home Screen</Text>

      {/* <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={styles.logo}
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  head: {
    fontSize: 30,
    textAlign: 'center',
  },
  logo: {
    width: 100,
    height: 75,
  },
});
