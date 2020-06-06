/*Example of SQLite Database in React Native*/
import React from 'react';

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

//Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

//screens
import VaultScreen from './pages/VaultScreen';
import PostScreen from './pages/VaultScreen';

//components
import AddPhotoModal from './pages/components/AddPhotoModal';
import AddTextModal from './pages/components/AddTextModal';
import ModalCamera from './pages/components/ModalCamera'
import UploadScreen from './pages/components/UploadScreen'

const ModalNavigator = createStackNavigator({
            default: createBottomTabNavigator({
                Photo: { screen: AddPhotoModal,
                        navigationOptions: {
                          headerMode: false,
                          tabBarIcon: ({ tintColor }) => <Icon name="image" size={20} color="grey" />
                         }
                      },
                Camera: { screen: ModalCamera,
                          navigationOptions: {
                            headerMode: false,
                            tabBarIcon: ({ tintColor }) => <Icon name="camera" size={20} color="grey" />,
                            tabBarVisible: false
                        }
                     },
                Thoughts: { screen: AddTextModal,
                         navigationOptions: {
                           headerMode: false,
                           tabBarIcon: ({ tintColor }) => <Icon name="font" size={20} color="grey" />
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
  Post: {
    screen: PostScreen,
    navigationOptions: {
      headerShown: true
    },
  },
  initialRouteName: 'Vault',
  addPhotoModal: { screen: ModalContainer }
            }, {
                mode: 'modal',
                headerMode: 'none',
                transparentCard: true,
        }

    )
export default createAppContainer(App);
