// MediaLibrary.getPermissionsAsync()
// Checks user's permissions for accessing media library. Alias for Permissions.getAsync(Permissions.CAMERA_ROLL).

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, FlatList } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import ModalContainer from '../../App'
import Myform from './Myform'

export default class AddPhotoModal extends React.Component {
    render() {
        return(
                  <KeyboardAvoidingView style={{backgroundColor:"#000000CC", flex:1}}>
                    <View style={{ backgroundColor:"#ffffff", marginLeft: 0, marginRight: 0, marginTop: 180, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1, }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={{position: 'absolute'}} onPress={() => this.props.navigation.navigate('Vault')}>
                                <Text style={styles.buttonFont}>Back</Text>
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Choose Photo</Text>
                            <TouchableOpacity style={{position: 'absolute', right: 0}} onPress={() => this.props.onSubmit()}>
                                <Text style={styles.buttonFont}>Post</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.photoUpload}>
                        <Myform />
                            <View style={styles.uploadTextInput}>
                                <Icon name="comments" size={20} color="grey" />
                                <TextInput style={{width: '100%', paddingLeft: 5, fontSize: 18}}
                                    placeholder="What do you want to say?"
                                    // onChangeText={this.changeText.bind(this)}
                                    multiline={true}
                                    />
                            </View>
                        </View>
                    </View>
                 </KeyboardAvoidingView>
        );
    }
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
},
uploadTextInput: {
  flexDirection: 'row',
  left: 20,
  width: '100%',
  top: 20
},
photoUpload: {
  flex: 1,
  flexDirection: 'column'
}
});
