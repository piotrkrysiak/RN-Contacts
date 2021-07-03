import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

const AppNavContainer = () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const [isAutenticated, setIsAutenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('token');
      if (user) {
        setAuthLoaded(true);
        setIsAutenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAutenticated(false);
      }
    } catch (error) {}
  };

  console.log('isLoggedIn :>>', isAutenticated);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isLoggedIn || isAutenticated ? (
            <DrawerNavigator />
          ) : (
            <AuthNavigator />
          )}
        </NavigationContainer>
      ) : (
        <ActivityIndicator/>
      )}
    </>
  );
};

export default AppNavContainer;
