// TODO: update vault screen when submit button is pressed

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
    value: '',
    searchQuery: ''
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
      <TouchableOpacity style={styles.item} onPress={this.viewPhoto} key={item.id}>
              <Image source={{ uri: item.value }} style={{ flex: 1, width: '100%', height: undefined }} />
      </TouchableOpacity>
        );
    };

  searchItems = (value) => {
    //search SQLite with search query and return the items that match that query
    db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM items where caption = ?, type = ?',
            [value],
            (tx, results) => {
                const filteredItems = []
                var len = results.rows.length;
                if (len > 0) {
                    for (let i = 0; i < results.rows.length; ++i) {
                        filteredItems.push(results.rows.item(i));
                        }
                        filteredItems.reverse()
                        this.setState({ items: filteredItems });
                    }
                }
            )
        });
    }

  selectPhoto = () => {
    const { photo_id } = this.state;
    console.log(this.photo_id);
    this.update()
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
              this.forceUpdate()
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

  viewPhoto = () => {

    this.selectPhoto()

    const { photo_id } = this.state;

    db.transaction(tx => {
      tx.executeSql('SELECT FROM items where id=?', [photo_id], (tx, results) => {
          var selection = results.rows.item;
          if (results.rowsAffected > 0) {
            this.props.navigate.navigation('PostScreen')
          } else {
            return null;
          }
        }
      );
    });
  };

  async componentDidMount() {
      this.formatItems()
      this.update()
      // db.transaction(tx => {
      //     tx.executeSql(`SELECT * FROM items;`, [], (tx, results) => {
      //         var temp = [];
      //         for (let i = 0; i < results.rows.length; ++i) {
      //           temp.push(results.rows.item(i));
      //         }
      //         temp.reverse()
      //         this.setState({
      //           items: temp,
      //         });
      //         this.setState({
      //             itemsFormatted: this.state.items.concat(this.state.itemsFormatted)
      //         })
      //         console.log(this.state.items.id.count)
      //       });
      //   })
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
                onChangeText={value => this.searchItems(value)}
            />
            <FlatList
            data={this.state.items, this.state.itemsFormatted}
            style={styles.grid}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            numColumns= {3}
            extraData={this.state}
          />
          <View style={{alignItems: 'center', bottom: 0}}>
              <View style={{backgroundColor: 'white', width: '100%', height: 55, alignItems: 'center', justifyContent: 'center'}}>
                <AddButton />
              </View>


          </View>
        </SafeAreaView>
      );
    }

    //update function to load items from DB
    update() {
        this.setState({ items: [] })
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
}
