import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HelloOne from '../screen/hello/hello-one';
import HelloTwo from '../screen/hello/hello-two';
import Home from '../screen/home';
import CustomDrawer from './custom-drawer';
import {drawerItemsMain} from './drawer-items-main';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      drawerContent={props => (
        <CustomDrawer drawerItems={drawerItemsMain} {...props} />
      )}>
      <Screen name="Home" component={Home} options={{headerTitle: 'Home'}} />
      <Screen
        name="HelloOne"
        component={HelloOne}
        options={{
          headerTitle: 'Hello One',
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
      />
      <Screen
        name="HelloTwo"
        component={HelloTwo}
        options={{headerTitle: 'Hello Two'}}
      />
    </Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
