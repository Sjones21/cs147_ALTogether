import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  Button,
  AppRegistry,
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './Styles.js';


export default function App() {
  return (
    <View style={styles.container}>

      {/* Example text */}
      <Text>Open up App.js to start working on your app!</Text>
      <Text>If you're seeing this, it means that you set up ALTogether correctly!</Text>
      <Text>SYDNEY WAS HERE (In the new branch too) (Or was I) </Text>
      <Text>more text (And more text) Changed in New_branch</Text>
      <Text>PLease let this be the final test</Text>
      <StatusBar style="auto" />

      {/* Example button */}
      <Text style={{marginTop: 20}}>Example button</Text>
      <TouchableOpacity
        style={styles.exampleButton}
        onPress={() => Alert.alert('You just pressed an example button')}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>ICE CREAM</Text>
      </TouchableOpacity>

      {/* Example image */}
      <Text style={{marginTop: 20}}>Example image</Text>
      <Image
        source = {require('./assets/images/ice_cream.png')}
        style = {{width: 100, height: 100}}/>
        <Text>DELICIOUS! I want one. Strawberry OH YEAH</Text>
    </View>


  );
}
