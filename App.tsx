import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {observer} from 'mobx-react';
import RootStack from './screens/RootStack';
const App = observer(() => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
});

export default App;
