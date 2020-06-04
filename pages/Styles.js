import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
  },
  item: {
    backgroundColor: '#1A86CB',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 3, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
  grid: {
    marginTop: 8
  },
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
  },
  //VAULT HEADER
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

//TO SORT
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 140,
        bottom: 0,
    },
    captureBtn: {
        width: 60,
        height: 60,
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 80,
        height: 80,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },
    //Modal Styling
      title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        alignSelf: 'center',
        marginBottom: 16
    },
      input: {
        alignSelf: 'center',
        height: 40,
        borderRadius: 10,
        borderWidth: .5,
        borderColor: 'grey',
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
      createList: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        height: 40,
        marginHorizontal: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
      header: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'grey',
        height: 40
      },
      buttonFont: {
        color: '#1A86CB',
        fontWeight: '400',
        fontSize: 16,
    },
      headerText: {
        position: 'absolute',
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 16
      },
      uploadTextInput: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 20,
        top: 75

      }
});

export default styles;
