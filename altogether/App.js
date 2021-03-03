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
// import { styles } from './Styles.js';


export default function App() {
  return (

    <View style={styles.container}>


      {/* Header bar */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>sydney_jones</Text>
        </View>
        <View style={styles.barIcons}>
          <Image
            source = {require('./assets/images/Post.png')}
            style = {styles.icons}/>
          <Image
            source = {require('./assets/images/Menu.png')}
            style = {styles.icons}/>
        </View>
      </View>

      {/* Scroll */}
      <ScrollView
        style={styles.scrollContainer}>
        {/* Profile */}
        <View>
          <Text>sydney_jones</Text>
        </View>

        {/* Photos */}
        <View>
        </View>
      </ScrollView>

      {/* Navigation bar */}
      <View style={styles.navBar}>
        <Image
          source = {require('./assets/images/Home.png')}
          style = {styles.icons}/>
        <Image
          source = {require('./assets/images/Search.png')}
          style = {styles.icons}/>
        <Image
          source = {require('./assets/images/LogoSmall.png')}
          style = {styles.icons}/>
        <Image
          source = {require('./assets/images/Bookmark.png')}
          style = {styles.icons}/>
        <Image
          source = {require('./assets/images/ProfileIcon.png')}
          style = {styles.icons}/>
      </View>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
  },

  exampleButton: {
    padding: 10,
    backgroundColor: '#3996EF',
    borderRadius: 10,
  },

  header: {
    height: 90,
    padding: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#FAFAFA'
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  barIcons: {
    flexDirection: 'row'
  },

  icons: {
    height: 25,
    width: 25,
    margin: 5
  },

  scrollContainer: {
  flexGrow: 1,
  margin: 20,
},

  navBar: {
    height: 100,
    padding: 30,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FAFAFA'
  }
});
