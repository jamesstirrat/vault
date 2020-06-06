import React from 'react';

import { View, TextInput, SafeAreaView, Button, Text, Alert, Image, TouchableOpacity, StyleSheet, ScrollView, Platform, TouchableWithoutFeedback, StatusBar, TouchableHighlight, Dimensions, FlatList } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

import styles from './Styles'

export default class VaultScreen extends React.Component {
    //when we pass a variable through react navigation, how do we access it? eg we want to access the param itemSelected that was passed in navigation
    state = {
      item: null
    };

    async componentDidMount() {
        const { item } = this.state
        // db.transaction(tx => {
        //     tx.executeSql(`SELECT FROM items where id = ?;`, [item], (tx, results) => {
        //         //set constants for each piece of data returned. Eg data type, caption, date made
        //       });
        //   })
      }

    renderItems = () => {
        //same as in feed. If type is photo then render the photo etc etc. If caption is not null render caption. Some constant renders eg. date of post
    }

    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>

        <View style={{flex:1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: '800'}}> Post Data Here </Text>
        </View>

        {this.renderItems}

        </SafeAreaView>
      );
    }
}
