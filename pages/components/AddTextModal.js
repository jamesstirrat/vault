// TODO: KeyboardAvoidingView so modal reaches near top of screen
// On upload screen have a big blue upload button on bottom right of screen
// Continue button is greyed until user enters text

// <TextInput style={{paddingLeft: 5, fontSize: 14}}
//     placeholder="What do you want to say?"
//     onChangeText={(textInputValue) => this.setState({textInputValue})}
//     defaultValue={this.state.textInputValue}/>

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ModalContainer from '../../App'

class AddTextModal extends React.Component {

    // changeText(value) {
    //   this.props.textChanged(value);
    // }
    //
    // continueUpload = (value)  => {
    //     this.props.navigation.navigate('Upload')
    // }
    //
    // render() {
    //     return(
    //               <KeyboardAvoidingView style={{backgroundColor:"#000000CC", flex:1}}>
    //                 <View style={{ backgroundColor:"#ffffff", marginLeft: 0, marginRight: 0, marginTop: 180, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1, }}>
    //                     <View style={styles.header}>
    //                         <TouchableOpacity style={{position: 'absolute'}} onPress={() => this.props.navigation.navigate('Home')}>
    //                             <Text style={styles.buttonFont}>Back</Text>
    //                         </TouchableOpacity>
    //                         <Text style={styles.headerText}>Write Something</Text>
    //                         <TouchableOpacity style={{position: 'absolute', right: 0}} onPress={this.continueUpload}>
    //                             <Text style={styles.buttonFont}>Continue</Text>
    //                         </TouchableOpacity>
    //
    //                     </View>
    //                     <View style={styles.uploadTextInput}>
    //                         <Feather name="message-square" size={18} color="grey" />
    //                         <TextInput style={{flex: 1, width: '100%', height: '100%', paddingLeft: 5, fontSize: 18}}
    //                             placeholder="What do you want to say?"
    //                             onChangeText={this.changeText.bind(this)}
    //                             multiline={true}
    //
    //                             />
    //                     </View>
    //                 </View>
    //              </KeyboardAvoidingView>
    //     );
    // }
}

export default AddTextModal;

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
  header: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    height: 40
  },
  buttonFont: {
    color: '#1A86CB',
    fontWeight: '400',
    fontSize: 16,
},
  headerText: {
    position: 'absolute',
    alignSelf: 'center',
    fontWeight: '400',
    fontSize: 16
  },
  uploadTextInput: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 20,
    top: 75,
    width: '100%'
  }
});
