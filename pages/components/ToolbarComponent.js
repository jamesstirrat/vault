import React from 'react';
import { RNCamera } from 'react-native-camera';
import { Col, Row, Grid } from "react-native-easy-grid";
import { StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import styles from '../Styles'

const { FlashMode: CameraFlashModes, Type: CameraTypes } = RNCamera.Constants;

export default ({
    capturing = false,
    cameraType = RNCameraTypes.back,
    flashMode = RNCameraFlashModes.off,
    setFlashMode, setCameraType,
    onCaptureIn, onCaptureOut, onLongCapture, onShortCapture,
}) => (
    <Grid style={styles.bottomToolbar}>
        <Row>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setFlashMode(
                    flashMode === CameraFlashModes.on ? CameraFlashModes.off : CameraFlashModes.on
                )}>
                    <Ionicons
                        name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>
            </Col>
            <Col size={2} style={styles.alignCenter}>
                <TouchableWithoutFeedback
                    onPressIn={onCaptureIn}
                    onPressOut={onCaptureOut}
                    onLongPress={onLongCapture}
                    onPress={onShortCapture}>
                    <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        {capturing && <View style={styles.captureBtnInternal} />}
                    </View>
                </TouchableWithoutFeedback>
            </Col>
            <Col style={styles.alignCenter}>
                <TouchableOpacity onPress={() => setCameraType(
                    cameraType === CameraTypes.back ? CameraTypes.front : CameraTypes.back
                )}>
                    <Ionicons
                        name="md-reverse-camera"
                        color="white"
                        size={30}
                    />
                </TouchableOpacity>

            </Col>
        </Row>
    </Grid>
);
