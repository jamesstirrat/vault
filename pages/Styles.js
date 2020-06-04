import { StyleSheet, Dimensions } from 'react-native';

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
    backgroundColor: 'blue',
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
  }
});

export default styles;
