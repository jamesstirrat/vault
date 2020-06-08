import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TouchableRipple, Switch, Image, TextInput, ScrollView } from 'react-native'

export default class PostScreen extends React.Component {
    render() {
      return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>

              <View>
                <TouchableOpacity style={styles.me}>
                    <Image style={styles.profilePic}/>
                    <View style={styles.profileBundle}>
                        <Text style={styles.profileTextHeader}>NAME</Text>
                        <Text style={styles.profileText}>Status</Text>
                    </View>
                </TouchableOpacity>
              </View>
        </SafeAreaView>
      )
    }
  }


const styles = StyleSheet.create({
  me: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    marginTop: 20,
    alignItems: 'center'
  },
  profileBundle: {
    left: 100
  },
  profilePic: {
    height: 70,
    width: 70,
    borderRadius: 60,
    backgroundColor: '#1A86CB',
    position: 'absolute',
    left: 20
  },
  meSecondaryMenu: {
    width: '100%',
    left: 20,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row'
  },
  meLastOnMenu: {
    width: '100%',
    left: 20,
    marginTop: 30,
    marginBottom: 40,
    alignItems: 'center',
    flexDirection: 'row'
  },
  settingsIcon: {
      backgroundColor: 'yellow',
      height: 35,
      width: 35,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center'
  },
  settingsHeader: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: 10
  },
  subMenu: {
    fontWeight: '400',
    fontSize: 14,
    left: 65,
    lineHeight: 20,
  },
  profileTextHeader: {
    fontWeight: '700',
    fontSize: 24,
  },
  rightArrow: {
    }
});
