//linking settings so user can flick permissions from app

// import { TouchableOpacity, Linking } from 'react-native'
// const Component = props => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       onPress={() => Linking.openURL('app-settings:')}
//     >
//       <SettingsIcon />
//    </TouchableOpacity>
//   );
// }

//changing table to include data type
// componentDidMount() {
//     db.transaction(tx => {
//       tx.executeSql(
//         'create table if not exists items (id integer primary key not null, value text, type not null);'
//       );
//     });
//   }

//adding other data types to feed

// onSubmit = () => {
//
//     const { thoughtPost } = this.state;
//
//       if (thoughtPost != null) {
//             //add into SQlite
//             this.add(thoughtPost);
//             this.setState({ thoughtPost: null });
//             console.log('text')
//             console.log('submitted')
//
//             Alert.alert(
//               'Success',
//               'Uploaded!',
//               [
//                 {
//                   text: 'Ok!',
//                   onPress: () =>
//                     navigate.navigation('Vault'),
//                 },
//               ],
//             );
//     }
// }
// add(text) {
//   db.transaction(
//     tx => {
//       tx.executeSql('INSERT INTO items (value) values (?) type thought', [text]);
//     },
//     null,
//     this.update
//   );
// }

//rendering other data types to feed

// renderItem = ({ item }) => {
//   const { items } = this.state;
//   if (item.empty === true) {
//     return <View style={[styles.item, styles.itemInvisible]} />;
// } else if (item.type === 'thought') {
//     <TouchableOpacity style={styles.item} onPress={this.deletePhoto} key={item.id}>
//             <View style={{ flex: 1, width: '100%', height: undefined, backgroundColor: 'x' }} />
//                 <Icon>
//             </View>
//     </TouchableOpacity>
// } else if (item.type === 'mood') {
//     <TouchableOpacity style={styles.item} onPress={this.deletePhoto} key={item.id}>
//             <View style={{ flex: 1, width: '100%', height: undefined, backgroundColor: 'y' }} />
//                 <Icon>
//             </View>
//     </TouchableOpacity>
// } else if (item.type === 'place') {
//     <TouchableOpacity style={styles.item} onPress={this.deletePhoto} key={item.id}>
//             <View style={{ flex: 1, width: '100%', height: undefined, backgroundColor: 'z' }} />
//                 <Icon>
//             </View>
//     </TouchableOpacity>
// } else {
//   return (
//     <TouchableOpacity style={styles.item} onPress={this.deletePhoto} key={item.id}>
//             <Image source={{ uri: item.value }} style={{ flex: 1, width: '100%', height: undefined }} />
//     </TouchableOpacity>
//       );
//   }
// }
