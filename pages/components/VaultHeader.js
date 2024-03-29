import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import styles from '../Styles'

export default function VaultHeader() {

    const navigation = useNavigation();

  return (
    <View style={styles.header}>
        <View style={styles.headerBundle}>
        <Image style={styles.logo} resizeMode='contain' source={require('../images/icon-nobackground.png')}/>
          <Text style={styles.headerText}>Vault</Text>
          <TouchableOpacity style={styles.avatar} onPress={() => {navigation.navigate('Settings')}}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
header: {
  width: '100%',
  height: 80,
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
  width: '100%',
  marginBottom: 5
},
headerText: {
  fontWeight: 'bold',
  fontSize: 42,
  color: 'black',
  paddingLeft: 2,
},
logo: {
  height: 65,
  width: 65,
  left: 3,
  alignContent: 'center',
  justifyContent: 'center'
},
avatar: {
  height: 40,
  width: 40,
  backgroundColor: '#1A86CB',
  position: 'absolute',
  right: 25,
  borderRadius: 20
}
});
