/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//screens
import VaultScreen from './pages/VaultScreen';

//components
import AddPhotoModal from './pages/components/AddPhotoModal';
import AddTextModal from './pages/components/AddTextModal';
import ModalCamera from './pages/components/ModalCamera'

const ModalNavigator = createStackNavigator({
            default: createBottomTabNavigator({
                Photo: { screen: AddPhotoModal,
                        navigationOptions: {
                          headerMode: false,
                          tabBarIcon: ({ tintColor }) => <Feather name="image" size={24} color="grey" />
                         }
                      },
                Camera: { screen: ModalCamera,
                          navigationOptions: {
                            headerMode: false,
                            tabBarIcon: ({ tintColor }) => <Feather name="camera" size={24} color="grey" />,
                            tabBarVisible: false
                        }
                     },
                Text: { screen: AddTextModal,
                         navigationOptions: {
                           headerMode: false,
                           tabBarIcon: ({ tintColor }) => <Feather name="type" size={24} color="grey" />
                       }
                   },
               }),
             Upload: { screen: UploadScreen }
         },
             {
                transparentCard: true,
                headerMode: 'none',
                navigationOptions: {
                    headerVisible: false,
                    animationEnabled: false,
                    transitionConfig: () => ({
                          transitionSpec: {
                            duration:0,
                            timing: 0,
                            easing: Easing.step0,
                          },
                        })
                }
            });

const ModalContainer = createAppContainer(ModalNavigator);

const App = createStackNavigator({
  Vault: {
    screen: VaultScreen,
    navigationOptions: {
      headerShown: false
    },
  },
});
export default createAppContainer(App);
