import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// import styles from '../Styles'

export default function VaultHeader() {

  return (
    <View style={styles.header}>
        <View style={styles.headerBundle}>
        <Image style={styles.logo} resizeMode='contain' source={require('../images/icon-nobackground.png')}/>
          <Text style={styles.headerText}>Vault</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
  width: '100%',
  height: 70,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor: 'white',
},
headerBundle: {
  flexDirection: 'row',
  marginRight: 'auto',
  alignItems: 'center',
  paddingLeft: 5,
  width: '100%'
},
headerText: {
  fontWeight: 'bold',
  fontSize: 42,
  color: 'black',
  paddingLeft: 5,
},
logo: {
  height: 80,
  width: 80,
  alignContent: 'center',
  justifyContent: 'center'
},
});
