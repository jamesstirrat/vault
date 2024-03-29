// TODO: Add Dark Mode to APP
// Settings on tapping avatar on top right
// Fix upload refresh on post
// Table contains data type
// Different types/combinations uploads
// Rendering different types on feeds
// Rendering View Post when post is tapped
// Get Search to work
// Sign Up/Sign In for App Backups (with settings on top right avatar)

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
//Import react-navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createCompatNavigatorFactory } from '@react-navigation/compat';
import { NavigationContainer } from '@react-navigation/native';

//Redux
import { Provider } from 'react-redux';
import Store from './pages/store/Index'

//Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

//screens
import VaultScreen from './pages/VaultScreen';
import PostScreen from './pages/PostScreen';
import SettingsScreen from './pages/SettingsScreen';

//components
import AddPhotoModal from './pages/components/AddPhotoModal';
import AddTextModal from './pages/components/AddTextModal';
import ModalCamera from './pages/components/ModalCamera'

import styles from './pages/Styles'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numberOfUploads: 0
        }
        this.handleNewUpload = this.handleNewUpload.bind(this)
    }

    //Callback funtion
    handleNewUpload() {
        this.setState((prevState) => {
            return {
                numberOfUploads: prevState.numberOfUploads +1
            };
        });
    }

    render() {
            const Tab = createBottomTabNavigator();

            function Modal() {    
            this.props.handleNewUpload()
              return (
                  <Tab.Navigator
                    headerMode='none'
                    screenOptions={{
                      cardStyle: { backgroundColor: 'transparent' },
                      cardOverlayEnabled: true,}}
                    mode='modal'
                    >
                    <Tab.Screen
                      name="Photo"
                      component={AddPhotoModal}
                      options={{ animationEnabled: true, headerShown: false, tabBarIcon: ({ tintColor }) => <Icon name="image" size={20} color="grey" /> }} />
                    <Tab.Screen
                      name="Camera"
                      component={ModalCamera}
                      options={{ headerShown: false, tabBarVisible: false, tabBarIcon: ({ tintColor }) => <Icon name="camera" size={20} color="grey" /> }} />
                    <Tab.Screen
                        name="Thoughts"
                        options={{ headerShown: false, tabBarIcon: ({ tintColor }) => <Icon name="font" size={20} color="grey" /> }} >
                        {props => <AddTextModal {...props} handleNewUpload={this.props.handleNewUpload} />}
                      </Tab.Screen>
                  </Tab.Navigator>
              );
            }

            const Stack = createStackNavigator();

            function Main() {
              return (
                    <Stack.Navigator
                      initialRouteName="Home"
                    >
                      <Stack.Screen
                        name="Vault"
                        component={VaultScreen}
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="Post"
                        component={PostScreen}
                        options={{ title: 'View Post', headerRight: () => (<TouchableOpacity><Icon style={styles.iconContainer} name="ellipsis-h" size={32} color="#147EFB" /></TouchableOpacity>) }}
                      />
                      <Stack.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{ title: 'Settings'}}
                      />
                    </Stack.Navigator>
              );
            }

                return (
                    <NavigationContainer>
                        <Stack.Navigator
                          initialRouteName="Home"
                          mode='modal'
                          screenOptions={{
                              cardStyle: { backgroundColor: 'transparent' },
                              cardOverlayEnabled: true
                          }}
                        >
                            <Stack.Screen name="Vault"
                                options={{headerShown: false }}>
                              {props => <Main {...props} numberOfUploads={this.state.numberOfUploads} />}
                            </Stack.Screen>

                            <Stack.Screen name="Modal"
                                options={{ headerShown: false }}>
                              {props => <Modal {...props} handleNewUpload={this.handleNewUpload} />}
                            </Stack.Screen>
                        </Stack.Navigator>
                    </NavigationContainer>
                );
            }
        }
