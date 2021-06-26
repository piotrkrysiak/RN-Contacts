import React from 'react';
import 'react-native-gesture-handler';
import GlobalProvider from './src/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer/>
    </GlobalProvider>
  );
};

export default App;
