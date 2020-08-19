import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import {Bar} from './components';

const App = () => {
  return (
    <NavigationContainer>
      <Bar />
      <Routers />
    </NavigationContainer>
  );
};

export default App;