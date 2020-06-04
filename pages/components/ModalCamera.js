import React from 'react';
import { Text, Image, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome5, Feather } from "@expo/vector-icons";

import ToolbarComponent from './ToolbarComponent'
import styles from './../Styles';

export default class ModalCamera extends React.Component {

    camera = null;
    state = {
        capture: [],
        captured: false,
        //flash off by default
        flashMode: Camera.Constants.FlashMode.off,
        capturing: null,
        // start the back camera by default
        cameraType: Camera.Constants.Type.back,
        hasCameraPermission: null,
    };

    setFlashMode = (flashMode) => this.setState({ flashMode });
    setCameraType = (cameraType) => this.setState({ cameraType });
    handleCaptureIn = () => this.setState({ capturing: true });

    // handleCaptureOut = () => {
    //     if (this.state.capturing)
    //         this.camera.stopRecording();
    // };

    handleShortCapture = async () => {
        const photoData = await this.camera.takePictureAsync();
        this.setState({ capturing: false, capture: photoData, captured: true })
    };

    // handleLongCapture = async () => {
    //     const videoData = await this.camera.recordAsync();
    //     this.setState({ capturing: false, captures: [videoData, ...this.state.captures] });
    // };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    showPhotoOrCamera() {

        const { hasCameraPermission, flashMode, cameraType, capturing } = this.state;

        if (this.state.captured == true) {
            return (
            <View>
                <View style={{flex:1, height: '100%', width: '100%'}}>
                    <Image source={this.state.capture} />
                </View>
                <TouchableOpacity style={{position: 'absolute', left: 30, top: 40}} onPress={() => this.state.captured = false}>
                    <Feather name='x' color={'white'} size={32} style={styles.icon}/>
                </TouchableOpacity>

                <TouchableOpacity style={{position: 'absolute', right: 50, top: 40}} onPress={() => this.props.navigation.navigate('Upload')}>
                    <Feather name='check' color={'white'} size={32} style={styles.icon}/>
                </TouchableOpacity>
            </View>
        )
        }
            return (
                <React.Fragment>
                <View>
                    <Camera
                        type={cameraType}
                        flashMode={flashMode}
                        style={styles.preview}
                        ref={camera => this.camera = camera}
                    />
                    <TouchableOpacity style={{position: 'absolute', right: 50, top: 40}} onPress={() => this.props.navigation.navigate('Home')}>
                        <Feather name='x' color={'white'} size={32} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <ToolbarComponent
                capturing={capturing}
                    flashMode={flashMode}
                    cameraType={cameraType}
                    setFlashMode={this.setFlashMode}
                    setCameraType={this.setCameraType}
                    // onCaptureIn={this.handleCaptureIn}
                    // onCaptureOut={this.handleCaptureOut}
                    // onLongCapture={this.handleLongCapture}
                    onShortCapture={this.handleShortCapture}
                    />
                </React.Fragment>
            )
        }


    render() {
        const { hasCameraPermission, flashMode, cameraType, capturing } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }
        return (
            <View style={{flex:1}}>
                    {this.showPhotoOrCamera()}
            </View>

        );
    };
};
