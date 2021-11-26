import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import DrawerNavigator from './drawer-navigator';

const {Screen, Navigator} = createStackNavigator();

const RootStack = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="MainDrawer" component={DrawerNavigator} />
    </Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
