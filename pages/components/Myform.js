import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, TouchableHighlight, TouchableOpacity, Image, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImagePicker from 'react-native-image-picker';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

class Myform extends React.Component {
    state = {
        imageData: null,
        caption: null,
        base64URI: null
    }

  //choose the photo. Should be in base64.
  getPhotoFromGallery = () => {
    ImagePicker.launchImageLibrary({}, (response)  => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        // this.add(response.uri)
        this.setState({ imageData: response });
        this.setState({ base64URI: response.uri });
      }
    });
  };

  //show image in component
  showPickedImage() {
    const { imageData } = this.state;

    if (imageData !== null) {
        return (
          <Image
          source={{ uri: imageData.uri }}
          style={{ alignSelf: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
          />
        );
    } else {
      return (
        <View>
          <TouchableOpacity
            style={styles.addPhoto}
            onPress={this.getPhotoFromGallery}
          >
            <Icon name="image" size={164} color="#F1F1F2" />
          </TouchableOpacity>
        </View>
      );
    }
  }

  //submit image to SQLite. Should insert into table and reset the image picker
  onSubmit = () => {

      const { base64URI } = this.state;

        if (base64URI != null) {
              //add into SQlite
              this.add(base64URI);
              this.setState({ caption: null, imageData: null, base64URI: null });
              console.log('text')
              console.log('submitted')
              // this.props.navigate.navigation('Vault'),

              Alert.alert(
                'Success',
                'Uploaded!',
                [
                  {
                    text: 'Ok!',
                  },
                ],
              );

      }
  }

//create table if not existing. Where should componentDidMount be placed?
componentDidMount() {
    db.transaction(tx => {
      tx.executeSql(
        'create table if not exists items (id integer primary key not null, value text);'
      );
    });
  }

  render() {
    const { image } = this.props;

    return (
        <View style={styles.container}>
            <View style={styles.container}>

              {this.showPickedImage()}

              <TouchableHighlight style={styles.submit} onPress={this.onSubmit}>
                <Text>Submit</Text>
              </TouchableHighlight>

            </View>
        </View>
    );
  }
  add(text) {
    db.transaction(
      tx => {
        tx.executeSql('INSERT INTO items (value) values (?)', [text]);
      },
      null,
      // this.update
    );
  }
  // update = () => {
  //   this.todo && this.todo.update();
  //   this.done && this.done.update();
  // };
}


export default Myform;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },
  addPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width
}
});
