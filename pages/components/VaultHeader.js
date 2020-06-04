import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import styles from '../Styles'

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
