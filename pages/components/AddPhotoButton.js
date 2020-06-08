import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Animated } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from '@react-navigation/compat';
import { useNavigation } from '@react-navigation/native';


class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);

    handlePressIn = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 0,
                useNativeDriver: false
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0,
                useNativeDriver: false
            })
        ]).start();

        console.log("On Long Press")
    };

    handlePressOut = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 0,
                useNativeDriver: false
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1,
                useNativeDriver: false
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 1 ? 0 : 0,
                useNativeDriver: false
            })
        ]).start();

        console.log("On press out")
    };

    render() {

        //getting navigation from props
        const { navigation } = this.props;

        const photoX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, -85]
        });

        const photoY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -110]
        });

        const cameraX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, -25]
        });

        const cameraY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -130]
        });

        const textX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-20, 35]
        });

        const textY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, -110]
        });

        const sizeStyle = {
            transform: [{ scale: this.buttonSize }]
        };

        return (
            <View style={{ position: "absolute", alignItems: "center" }}>
                <Animated.View style={{ position: "absolute", left: photoX, top: photoY }}>
                    <TouchableOpacity style={styles.secondaryButton} onPress={() => {navigation.navigate('Photo')}}>
                        <Icon name="image" size={20} color="#1A86CB" />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: cameraX, top: cameraY }}>
                    <TouchableOpacity style={styles.secondaryButton} onPress={() => {navigation.navigate('Camera')}}>
                        <Icon name="camera" size={20} color="#1A86CB" />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: textX, top: textY }}>
                    <TouchableOpacity style={styles.secondaryButton} onPress={() => {this.props.navigation.navigate('Thoughts')}}>
                        <Icon name="font" size={20} color="#1A86CB" />
                    </TouchableOpacity>
                </Animated.View>

                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableOpacity style={{height:72, width:72, alignItems: 'center', justifyContent: 'center'}} onPress={() => {navigation.navigate('Modal')}} onLongPress={this.handlePressIn} onPressOut={this.handlePressOut} underlayColor="#7F58FF">
                        <Icon name="plus" size={20} color="white" />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}

// Wrap and export
export default function(props) {
  const navigation = useNavigation();

  return <AddButton {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
//ADD BUTTON
button: {
  alignItems: "center",
  justifyContent: "center",
  width: 72,
  height: 72,
  borderRadius: 36,
  backgroundColor: "#1A86CB",
  position: "absolute",
  marginTop: -60,
  borderWidth: 3,
  borderColor: "#FFFFFF"
},
secondaryButton: {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: "white"
}
});
