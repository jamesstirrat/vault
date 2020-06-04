import React from 'react';

import { View, TextInput, SafeAreaView, Button, Text, Alert, Image, TouchableOpacity, StyleSheet, ScrollView, Platform, TouchableWithoutFeedback, StatusBar, TouchableHighlight, Dimensions, FlatList } from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

import styles from './Styles'
import VaultHeader from './components/VaultHeader'
import AddButton from './components/AddPhotoButton'
import Myform from './components/Myform';

export default class VaultScreen extends React.Component {
  state = {
    items: [],
    itemsFormatted: [],
    photo_id: null,
    value: ''
  };

  formatItems = () => {
      const { items } = this.state
      const newItems = []
      const numberOfFullRows = Math.floor(items.length / 3);
      let numberOfElementsLastRow = 1
      // items.length - (numberOfFullRows * 3);

      while (numberOfElementsLastRow !== 3 && numberOfElementsLastRow !== 0) {
          newItems.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
      }
      return this.setState({ itemsFormatted: newItems })
  };

  renderItem = ({ item }) => {
    const { items } = this.state;
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity style={styles.item} onPress={this.deletePhoto} key={item.id}>
              <Image source={{ uri: item.value }} style={{ flex: 1, width: '100%', height: undefined }} />
      </TouchableOpacity>
        );
    };

  selectPhoto = () => {
    const { photo_id } = this.state;
    console.log(this.photo_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM items where id = ?',
        [photo_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              value: results.rows.item(0),
            });
          } else {
              Alert.alert(
                'Failed',
                'Not Found',
                [
                  {
                    text: 'Try Again',
                  },
                ],
                { cancelable: false }
              );
            this.setState({
              value: '',
            });
          }
        }
      );
    });
  };


  deletePhoto = () => {

    this.selectPhoto()

    const { photo_id } = this.state;

    console.log('delete attempt')
    console.log(photo_id)
    db.transaction(tx => {
      tx.executeSql('DELETE FROM items where id=?', [photo_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Photo deleted successfully',
              [
                {
                  text: 'Ok',
                },
              ],
              { cancelable: false }
            );
          } else {
            return null;
          }
        }
      );
    });
  };

  async componentDidMount() {
      this.formatItems()
      db.transaction(tx => {
          tx.executeSql(`SELECT * FROM items;`, [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              temp.reverse()
              this.setState({
                items: temp,
              });
              this.setState({
                  itemsFormatted: this.state.items.concat(this.state.itemsFormatted)
              })
              console.log(this.state.items.id.count)
            });
        })
    }

    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            <VaultHeader/>
            <TextInput
                placeholder="Search Vault"
                placeholderTextColor='#999999'
                style={{
                  backgroundColor: '#F1F1F2',
                  height: 40,
                  fontSize: 16,
                  paddingLeft: 17,
                  color: 'black',
                  borderRadius: 10,
                  width: '92%',
                  alignSelf: 'center',
                  marginBottom: 10
                }}
                // onChangeText={value => this.searchContacts(value)}
            />
            <FlatList
            data={this.state.items, this.state.itemsFormatted}
            style={styles.grid}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            numColumns= {3}
          />
          <View style={{alignItems: 'center', bottom: 15}}>
            <AddButton />
          </View>
        </SafeAreaView>
      );
    }

  //update function to load items from DB
  update() {
    db.transaction(tx => {
      tx.executeSql(
        `select * from items`,
        (_, { rows: { _array } }) => this.setState({ items: _array })
      );
    });
  }
}
