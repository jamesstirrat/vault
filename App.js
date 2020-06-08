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

//Import react-navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme } from 'react-native-paper';

//Import Icons
import Icon from 'react-native-vector-icons/FontAwesome';

//screens
import VaultScreen from './pages/VaultScreen';
import PostScreen from './pages/PostScreen';

//components
import AddPhotoModal from './pages/components/AddPhotoModal';
import AddTextModal from './pages/components/AddTextModal';
import ModalCamera from './pages/components/ModalCamera'

            const ModalStack = createBottomTabNavigator();

            function Modal() {
              return (
                <NavigationContainer mode="modal">
                  <Tab.Navigator>
                    <Tab.Screen
                      name="Photo"
                      component={AddPhotoModal}
                      options={{ headerShown: false, tabBarIcon: ({ tintColor }) => <Icon name="image" size={20} color="grey" /> }} />
                    <Tab.Screen
                      name="Camera"
                      component={ModalCamera}
                      options={{ headerShown: false, tabBarIcon: ({ tintColor }) => <Icon name="camera" size={20} color="grey" /> }} />
                    <Tab.Screen
                      name="Thoughts"
                      component={AddTextModal}
                      options={{ headerShown: false, tabBarIcon: ({ tintColor }) => <Icon name="font" size={20} color="grey" /> }} />
                  </Tab.Navigator>
                </NavigationContainer>
              );
            }

            const Stack = createStackNavigator();

            function App() {
              return (
                  // <PaperProvider theme={theme}>
                  //     <NavigationContainer theme={DarkTheme}>
                      <NavigationContainer>
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
                            options={{ title: 'View Post' }}
                          />
                          <Stack.Screen
                            name="addPhotoModal"
                            component={Modal}
                            options={{ headerMode: 'none', transparentCard: true }}
                          />
                        </Stack.Navigator>
                    </NavigationContainer>
                // </PaperProvider>
              );
            }

            export default App;
