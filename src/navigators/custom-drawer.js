import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const CustomDrawer = props => {
  const [mainDrawer, setMainDrawer] = useState(true);
  const [filteredItems, setFilteredItems] = useState([]);

  console.log(props?.drawerItems);

  const toggleMainDrawer = () => {
    setMainDrawer(true);
    setFilteredItems([]);
  };

  const onItemParentPress = key => {
    const filteredMainDrawerRoutes = props?.drawerItems?.find(e => {
      return e?.key === key;
    });

    if (filteredMainDrawerRoutes?.routes?.length === 1) {
      const selectedRoute = filteredMainDrawerRoutes?.routes[0];
      props?.navigation?.toggleDrawer();
      props?.navigation?.navigate(selectedRoute?.nav, {
        screen: selectedRoute?.routeName,
      });
    } else {
      setMainDrawer(false);
      setFilteredItems(filteredMainDrawerRoutes);
    }
  };

  const renderFilteredItemsDrawer = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => toggleMainDrawer()}
          style={styles.backButtonRow}>
          <Text style={[styles.backButtonText, styles.title]}>Back</Text>
        </TouchableOpacity>
        {filteredItems?.routes?.map(route => {
          return (
            <TouchableOpacity
              key={route.routeName}
              testID={route.routeName}
              onPress={() =>
                props.navigation.navigate(route.nav, {
                  screen: route.routeName,
                })
              }
              style={styles.item}>
              <Text style={styles.title}>{route.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const logOut = async () => console.log('log out');

  const renderMainDrawer = () => {
    return (
      <View>
        {props?.drawerItems?.map((parent, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => {
                onItemParentPress(parent?.key);
              }}>
              <View style={styles.parentItem}>
                <Text style={styles.title}>{parent?.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        {renderLogoutBtn()}
      </View>
    );
  };

  const renderLogoutBtn = () => {
    return (
      <View>
        <TouchableOpacity onPress={logOut} testID="customDrawer-logout">
          <View style={styles.parentItem}>
            <Text style={styles.title}>{'Log out'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.drawerContainer}>
      <View
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.centered}>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.logo}
          />
        </View>
        {mainDrawer ? renderMainDrawer() : renderFilteredItemsDrawer()}
      </View>
    </ScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    flexDirection: 'row',
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 75,
  },
  drawerContainer: {
    // backgroundColor: '#222222',
    // backgroundColor: 'red',
  },
  container: {
    flex: 1,
    // zIndex: 1000,
  },
  centered: {
    alignItems: 'center',
  },
  parentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    margin: 16,
    fontWeight: 'bold',
    // color: '#F0F0F0',
    textAlign: 'center',
  },
  backButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 17,
    paddingLeft: 3,
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 1,
  },
  backButtonText: {
    marginLeft: 10,
    // color: '#F0F0F0',
  },
});
