/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import VaultScreen from './pages/VaultScreen';

const App = createStackNavigator({
  Vault: {
    screen: VaultScreen,
    navigationOptions: {
      headerShown: false
    },
  },
});
export default createAppContainer(App);
