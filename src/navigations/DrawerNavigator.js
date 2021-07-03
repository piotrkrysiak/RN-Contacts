import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './SideMenu';
import {useContext} from 'react';
import {GlobalContext} from '../context/Provider';

const getDrawerContent = (navigation, authDispach) => {
  return <SideMenu navigation={navigation} authDispach={authDispach} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispach} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispach)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
