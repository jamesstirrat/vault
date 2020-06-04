// MediaLibrary.getPermissionsAsync()
// Checks user's permissions for accessing media library. Alias for Permissions.getAsync(Permissions.CAMERA_ROLL).

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ModalContainer from '../../App'

const MAX_PHOTOS = 20;

export default class AddPhotoModal extends React.Component {
  //   state = {
  //       images: [],
  //       selected: null
  //   }
  //
  //   componentDidMount() {
  //       this.getPhoto();
  //   }
  //
  //   async getCameraRollPermissions() {
  //   const { Permissions } = Expo;
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  //   if (status === 'granted') {
  //   } else {
  //     /// Handle permissions denied;
  //     console.log('Uh oh! The user has not granted us permission.');
  //   }
  // }
  //
  //   getPhoto = async after => {
  //       const res = await MediaLibrary.getAssetsAsync({
  //           first: MAX_PHOTOS,
  //       })
  //
  //       this.setState({
  //           images: [ ...this.state.images, ...res.edges],
  //       })
  //       console.log('res', res)
  //   }
  //
  //   onSelect = selected => {
  //       this.setState({ selected });
  //   }
  //
  //   renderItem = ({ item }) => {
  //       return (
  //           <View style={styles.photoPickerWrapper}>
  //               <Image source={{ uri: item.node.image.uri}} style={styles.photoPickerImage}/>
  //           </View>
  //       )
  //   }
  //
  //   keyExtractor = (item) => item.node.image.filename;
  //
  //   render() {
  //       return(
  //                 <View style={{backgroundColor:"#000000CC", flex:1}}>
  //                   <View style={{ backgroundColor:"#ffffff", marginLeft: 0, marginRight: 0, marginTop: 180, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1, }}>
  //                       <View style={styles.header}>
  //                           <TouchableOpacity style={{position: 'absolute'}} onPress={() => this.props.navigation.navigate('Home')}>
  //                               <Text style={styles.buttonFont}>Back</Text>
  //                           </TouchableOpacity>
  //                           <Text style={styles.headerText}>Choose Photo</Text>
  //                           <TouchableOpacity style={{position: 'absolute', right: 0}} onPress={() => this.props.navigation.navigate('Upload')}>
  //                               <Text style={styles.buttonFont}>Continue</Text>
  //                           </TouchableOpacity>
  //                           <CameraRollPicker
  // callback={this.getSelectedImages} />
  //                       </View>
  //                   </View>
  //                </View>
  //       );
  //   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 16
},
  input: {
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: 'grey',
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 5
},
  headerText: {
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 16,
},
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    borderBottomColor: 'grey',
},
  createList: {
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
},
  buttonFont: {
    color: '#1A86CB',
    fontWeight: '400',
    fontSize: 16
},

imageWrapper: {
    width:100,
    height: 100
},
image: {
    flex: 1
}
});
