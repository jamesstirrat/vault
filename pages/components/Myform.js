import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

import { withNavigation } from 'react-navigation';

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
          style={{ alignSelf: 'center', width: 200, height: 200 }}
          />
        );
    } else {
      return (
        <View>
          <TouchableHighlight
            style={styles.addPhoto}
            onPress={this.getPhotoFromGallery}
          >
            <Text style={styles.addPhotoText}>Add Photo</Text>

          </TouchableHighlight>
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

              Alert.alert(
                'Success',
                'Uploaded!',
                [
                  {
                    text: 'Ok!',
                    // onPress: () =>
                    //   navigate.navigation('Vault'),
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
      this.update
    );
  }
  update = () => {
    this.todo && this.todo.update();
    this.done && this.done.update();
  };
}


export default withNavigation(Myform);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addPhoto: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: '90%'
}
});
