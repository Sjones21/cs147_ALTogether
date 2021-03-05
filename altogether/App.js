import React, { Component } from "react";
/*
import {
  View,
  Text,
  StyleSheet
} from "react-native";
*/

import CardComponent from './src/components/CardComponent'
//import { Audio } from ''
import { Alert, Image, Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { styles } from './Styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile.js';
import ProfileAlt from './ProfileAlt.js';
import Feed from './Feed.js';
import NewPost from './NewPost.js';
import { Container } from "native-base";
const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
]
export default class App extends React.Component {

  /*
  async componentDidMount() {
    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      shouldDuckAndroid: false,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: true
    })
    this.setState({ loaded: true })
  }*/


  render() {
    return (
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerShown: true
            }}>
            <Stack.Screen name="Feed" component={Feed} options={({route, navigation}) => ({ title: 'Instagram', headerShown: false})}/>
            <Stack.Screen name="Profile" component={Profile} options={({headerShown: false, animationEnabled: false})}/>
            <Stack.Screen name="ProfileAlt" component={ProfileAlt} options={({headerShown: false, animationEnabled: false})}/>
            <Stack.Screen name="NewPost" component={NewPost} options={{ title: 'New Post', headerBackTitle: "Prev"}} />
          </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
