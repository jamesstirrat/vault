import React from 'react';
import { Text, Image, View, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions'
import Icon from 'react-native-vector-icons/FontAwesome';

import ToolbarComponent from './ToolbarComponent'
import styles from './../Styles';

export default class ModalCamera extends React.Component {

    camera = null;
    state = {
        capture: [],
        captured: false,
        //flash off by default
        flashMode: RNCamera.Constants.FlashMode.off,
        capturing: null,
        // start the back camera by default
        cameraType: RNCamera.Constants.Type.back,
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
        const camera = await check(PERMISSIONS.IOS.CAMERA);
        const audio = await check(PERMISSIONS.IOS.AUDIO_RECORDING);
        const hasCameraPermission = (camera === RESULTS.GRANTED && audio === RESULTS.GRANTED);

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
                    <Icon name="camera" size={20} color="#1A86CB" />
                </TouchableOpacity>

                <TouchableOpacity style={{position: 'absolute', right: 50, top: 40}} onPress={() => this.props.navigation.navigate('Upload')}>
                    <Icon name="camera" size={20} color="#1A86CB" />
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
                        <Icon name="camera" size={20} color="#1A86CB" />
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
            //should return an option to change settings
            return null
        }
        return (
            <View style={{flex:1}}>
                    {this.showPhotoOrCamera()}
            </View>

        );
    };
};
