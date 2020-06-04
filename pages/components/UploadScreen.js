// TODO: Provide some sort of reward/feedback on upload

import React from 'react';
import { Text, Image, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';

import ToolbarComponent from './ToolbarComponent'
import styles from '../Styles';

class UploadScreen extends React.Component {
    constructor(props){
        super(props)
    }

    //uploadMedia function for uploading Media
    uploadMedia = () => {
        //upload to DB - add to vault, home screen
        // this.props.upload()
        // this.props.resetText()
        this.props.navigation.navigate('Home')
    }

    //viewPhoto function for viewing photo on full screen
    viewPhoto = () => {
        return
    }

    render() {
        return(
                  <View style={{backgroundColor:"#000000CC", flex:1}}>
                    <View style={{ backgroundColor:"#ffffff", marginLeft: 0, marginRight: 0, marginTop: 180, padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, flex: 1, }}>
                        <View style={styles.header}>
                            <TouchableOpacity style={{position: 'absolute'}} onPress={() => this.props.navigation.goBack()}>
                                <Text style={styles.buttonFont}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{position: 'absolute', right: 10}} onPress={() => this.uploadMedia()}>
                                <Text style={styles.buttonFont}>Upload</Text>
                            </TouchableOpacity>

                            <View style={styles.uploadTextInput}>
                                    <Text>{this.props.textInputValue}</Text>
                            </View>
                        </View>
                    </View>
                 </View>
        );
    }
}

export default UploadScreen;
