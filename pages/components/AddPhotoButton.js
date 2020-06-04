import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, Animated } from "react-native";



export default class AddButton extends React.Component {
    mode = new Animated.Value(0);
    buttonSize = new Animated.Value(1);

    handlePressIn = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 0
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 0 ? 1 : 0
            })
        ]).start();

        console.log("On Long Press")
    };

    handlePressOut = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration: 0
            }),
            Animated.timing(this.buttonSize, {
                toValue: 1
            }),
            Animated.timing(this.mode, {
                toValue: this.mode._value === 1 ? 0 : 0
            })
        ]).start();

        console.log("On press out")
    };

    render() {
        const photoX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, -75]
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
            outputRange: [-20, 25]
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
                    <View style={styles.secondaryButton}>
                        <Text>A</Text>
                    </View>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: cameraX, top: cameraY }}>
                    <View style={styles.secondaryButton}>
                        <Text>A</Text>
                    </View>
                </Animated.View>

                <Animated.View style={{ position: "absolute", left: textX, top: textY }}>
                    <View style={styles.secondaryButton}>
                        <Text>A</Text>
                    </View>
                </Animated.View>

                <Animated.View style={[styles.button, sizeStyle]}>
                    <TouchableHighlight style={{height:72, width:72, alignItems: 'center', justifyContent: 'center'}} onLongPress={this.handlePressIn} onPressOut={this.handlePressOut} underlayColor="#7F58FF">
                        <Text>A</Text>
                    </TouchableHighlight>
                </Animated.View>
            </View>
        );
    }
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
